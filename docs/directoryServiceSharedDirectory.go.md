# `directoryServiceSharedDirectory` Submodule <a name="`directoryServiceSharedDirectory` Submodule" id="@cdktf/provider-aws.directoryServiceSharedDirectory"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DirectoryServiceSharedDirectory <a name="DirectoryServiceSharedDirectory" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory aws_directory_service_shared_directory}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/directoryserviceshareddirectory"

directoryserviceshareddirectory.NewDirectoryServiceSharedDirectory(scope Construct, id *string, config DirectoryServiceSharedDirectoryConfig) DirectoryServiceSharedDirectory
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig">DirectoryServiceSharedDirectoryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig">DirectoryServiceSharedDirectoryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.putTarget">PutTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.resetMethod">ResetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.resetNotes">ResetNotes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTarget` <a name="PutTarget" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.putTarget"></a>

```go
func PutTarget(value DirectoryServiceSharedDirectoryTarget)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTarget">DirectoryServiceSharedDirectoryTarget</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.putTimeouts"></a>

```go
func PutTimeouts(value DirectoryServiceSharedDirectoryTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeouts">DirectoryServiceSharedDirectoryTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.resetId"></a>

```go
func ResetId()
```

##### `ResetMethod` <a name="ResetMethod" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.resetMethod"></a>

```go
func ResetMethod()
```

##### `ResetNotes` <a name="ResetNotes" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.resetNotes"></a>

```go
func ResetNotes()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/directoryserviceshareddirectory"

directoryserviceshareddirectory.DirectoryServiceSharedDirectory_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/directoryserviceshareddirectory"

directoryserviceshareddirectory.DirectoryServiceSharedDirectory_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/directoryserviceshareddirectory"

directoryserviceshareddirectory.DirectoryServiceSharedDirectory_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.sharedDirectoryId">SharedDirectoryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.target">Target</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference">DirectoryServiceSharedDirectoryTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference">DirectoryServiceSharedDirectoryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.directoryIdInput">DirectoryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.methodInput">MethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.notesInput">NotesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.targetInput">TargetInput</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTarget">DirectoryServiceSharedDirectoryTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.directoryId">DirectoryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.method">Method</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.notes">Notes</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `SharedDirectoryId`<sup>Required</sup> <a name="SharedDirectoryId" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.sharedDirectoryId"></a>

```go
func SharedDirectoryId() *string
```

- *Type:* *string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.target"></a>

```go
func Target() DirectoryServiceSharedDirectoryTargetOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference">DirectoryServiceSharedDirectoryTargetOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.timeouts"></a>

```go
func Timeouts() DirectoryServiceSharedDirectoryTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference">DirectoryServiceSharedDirectoryTimeoutsOutputReference</a>

---

##### `DirectoryIdInput`<sup>Optional</sup> <a name="DirectoryIdInput" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.directoryIdInput"></a>

```go
func DirectoryIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.methodInput"></a>

```go
func MethodInput() *string
```

- *Type:* *string

---

##### `NotesInput`<sup>Optional</sup> <a name="NotesInput" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.notesInput"></a>

```go
func NotesInput() *string
```

- *Type:* *string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.targetInput"></a>

```go
func TargetInput() DirectoryServiceSharedDirectoryTarget
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTarget">DirectoryServiceSharedDirectoryTarget</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DirectoryId`<sup>Required</sup> <a name="DirectoryId" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.directoryId"></a>

```go
func DirectoryId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.method"></a>

```go
func Method() *string
```

- *Type:* *string

---

##### `Notes`<sup>Required</sup> <a name="Notes" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.notes"></a>

```go
func Notes() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectory.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DirectoryServiceSharedDirectoryConfig <a name="DirectoryServiceSharedDirectoryConfig" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/directoryserviceshareddirectory"

&directoryserviceshareddirectory.DirectoryServiceSharedDirectoryConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DirectoryId: *string,
	Target: github.com/cdktf/cdktf-provider-aws-go/aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTarget,
	Id: *string,
	Method: *string,
	Notes: *string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig.property.directoryId">DirectoryId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory#directory_id DirectoryServiceSharedDirectory#directory_id}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig.property.target">Target</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTarget">DirectoryServiceSharedDirectoryTarget</a></code> | target block. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory#id DirectoryServiceSharedDirectory#id}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig.property.method">Method</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory#method DirectoryServiceSharedDirectory#method}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig.property.notes">Notes</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory#notes DirectoryServiceSharedDirectory#notes}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeouts">DirectoryServiceSharedDirectoryTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DirectoryId`<sup>Required</sup> <a name="DirectoryId" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig.property.directoryId"></a>

```go
DirectoryId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory#directory_id DirectoryServiceSharedDirectory#directory_id}.

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig.property.target"></a>

```go
Target DirectoryServiceSharedDirectoryTarget
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTarget">DirectoryServiceSharedDirectoryTarget</a>

target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory#target DirectoryServiceSharedDirectory#target}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory#id DirectoryServiceSharedDirectory#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Method`<sup>Optional</sup> <a name="Method" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig.property.method"></a>

```go
Method *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory#method DirectoryServiceSharedDirectory#method}.

---

##### `Notes`<sup>Optional</sup> <a name="Notes" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig.property.notes"></a>

```go
Notes *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory#notes DirectoryServiceSharedDirectory#notes}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryConfig.property.timeouts"></a>

```go
Timeouts DirectoryServiceSharedDirectoryTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeouts">DirectoryServiceSharedDirectoryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory#timeouts DirectoryServiceSharedDirectory#timeouts}

---

### DirectoryServiceSharedDirectoryTarget <a name="DirectoryServiceSharedDirectoryTarget" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTarget.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/directoryserviceshareddirectory"

&directoryserviceshareddirectory.DirectoryServiceSharedDirectoryTarget {
	Id: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTarget.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory#id DirectoryServiceSharedDirectory#id}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTarget.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory#type DirectoryServiceSharedDirectory#type}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTarget.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory#id DirectoryServiceSharedDirectory#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTarget.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory#type DirectoryServiceSharedDirectory#type}.

---

### DirectoryServiceSharedDirectoryTimeouts <a name="DirectoryServiceSharedDirectoryTimeouts" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/directoryserviceshareddirectory"

&directoryserviceshareddirectory.DirectoryServiceSharedDirectoryTimeouts {
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory#delete DirectoryServiceSharedDirectory#delete}. |

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_shared_directory#delete DirectoryServiceSharedDirectory#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### DirectoryServiceSharedDirectoryTargetOutputReference <a name="DirectoryServiceSharedDirectoryTargetOutputReference" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/directoryserviceshareddirectory"

directoryserviceshareddirectory.NewDirectoryServiceSharedDirectoryTargetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DirectoryServiceSharedDirectoryTargetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTarget">DirectoryServiceSharedDirectoryTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTargetOutputReference.property.internalValue"></a>

```go
func InternalValue() DirectoryServiceSharedDirectoryTarget
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTarget">DirectoryServiceSharedDirectoryTarget</a>

---


### DirectoryServiceSharedDirectoryTimeoutsOutputReference <a name="DirectoryServiceSharedDirectoryTimeoutsOutputReference" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/directoryserviceshareddirectory"

directoryserviceshareddirectory.NewDirectoryServiceSharedDirectoryTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DirectoryServiceSharedDirectoryTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.directoryServiceSharedDirectory.DirectoryServiceSharedDirectoryTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



