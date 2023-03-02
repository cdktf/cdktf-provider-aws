# `dataAwsWorkspacesBundle` Submodule <a name="`dataAwsWorkspacesBundle` Submodule" id="@cdktf/provider-aws.dataAwsWorkspacesBundle"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsWorkspacesBundle <a name="DataAwsWorkspacesBundle" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/workspaces_bundle aws_workspaces_bundle}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsworkspacesbundle"

dataawsworkspacesbundle.NewDataAwsWorkspacesBundle(scope Construct, id *string, config DataAwsWorkspacesBundleConfig) DataAwsWorkspacesBundle
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleConfig">DataAwsWorkspacesBundleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleConfig">DataAwsWorkspacesBundleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.resetBundleId">ResetBundleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.resetOwner">ResetOwner</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetBundleId` <a name="ResetBundleId" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.resetBundleId"></a>

```go
func ResetBundleId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.resetName"></a>

```go
func ResetName()
```

##### `ResetOwner` <a name="ResetOwner" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.resetOwner"></a>

```go
func ResetOwner()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsworkspacesbundle"

dataawsworkspacesbundle.DataAwsWorkspacesBundle_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsworkspacesbundle"

dataawsworkspacesbundle.DataAwsWorkspacesBundle_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsworkspacesbundle"

dataawsworkspacesbundle.DataAwsWorkspacesBundle_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.property.computeType">ComputeType</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleComputeTypeList">DataAwsWorkspacesBundleComputeTypeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.property.rootStorage">RootStorage</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleRootStorageList">DataAwsWorkspacesBundleRootStorageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.property.userStorage">UserStorage</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleUserStorageList">DataAwsWorkspacesBundleUserStorageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.property.bundleIdInput">BundleIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.property.ownerInput">OwnerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.property.bundleId">BundleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ComputeType`<sup>Required</sup> <a name="ComputeType" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.property.computeType"></a>

```go
func ComputeType() DataAwsWorkspacesBundleComputeTypeList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleComputeTypeList">DataAwsWorkspacesBundleComputeTypeList</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `RootStorage`<sup>Required</sup> <a name="RootStorage" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.property.rootStorage"></a>

```go
func RootStorage() DataAwsWorkspacesBundleRootStorageList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleRootStorageList">DataAwsWorkspacesBundleRootStorageList</a>

---

##### `UserStorage`<sup>Required</sup> <a name="UserStorage" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.property.userStorage"></a>

```go
func UserStorage() DataAwsWorkspacesBundleUserStorageList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleUserStorageList">DataAwsWorkspacesBundleUserStorageList</a>

---

##### `BundleIdInput`<sup>Optional</sup> <a name="BundleIdInput" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.property.bundleIdInput"></a>

```go
func BundleIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OwnerInput`<sup>Optional</sup> <a name="OwnerInput" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.property.ownerInput"></a>

```go
func OwnerInput() *string
```

- *Type:* *string

---

##### `BundleId`<sup>Required</sup> <a name="BundleId" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.property.bundleId"></a>

```go
func BundleId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundle.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsWorkspacesBundleComputeType <a name="DataAwsWorkspacesBundleComputeType" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleComputeType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleComputeType.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsworkspacesbundle"

&dataawsworkspacesbundle.DataAwsWorkspacesBundleComputeType {

}
```


### DataAwsWorkspacesBundleConfig <a name="DataAwsWorkspacesBundleConfig" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsworkspacesbundle"

&dataawsworkspacesbundle.DataAwsWorkspacesBundleConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BundleId: *string,
	Id: *string,
	Name: *string,
	Owner: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleConfig.property.bundleId">BundleId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_bundle#bundle_id DataAwsWorkspacesBundle#bundle_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_bundle#id DataAwsWorkspacesBundle#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_bundle#name DataAwsWorkspacesBundle#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleConfig.property.owner">Owner</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_bundle#owner DataAwsWorkspacesBundle#owner}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BundleId`<sup>Optional</sup> <a name="BundleId" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleConfig.property.bundleId"></a>

```go
BundleId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_bundle#bundle_id DataAwsWorkspacesBundle#bundle_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_bundle#id DataAwsWorkspacesBundle#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_bundle#name DataAwsWorkspacesBundle#name}.

---

##### `Owner`<sup>Optional</sup> <a name="Owner" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleConfig.property.owner"></a>

```go
Owner *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_bundle#owner DataAwsWorkspacesBundle#owner}.

---

### DataAwsWorkspacesBundleRootStorage <a name="DataAwsWorkspacesBundleRootStorage" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleRootStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleRootStorage.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsworkspacesbundle"

&dataawsworkspacesbundle.DataAwsWorkspacesBundleRootStorage {

}
```


### DataAwsWorkspacesBundleUserStorage <a name="DataAwsWorkspacesBundleUserStorage" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleUserStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleUserStorage.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsworkspacesbundle"

&dataawsworkspacesbundle.DataAwsWorkspacesBundleUserStorage {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsWorkspacesBundleComputeTypeList <a name="DataAwsWorkspacesBundleComputeTypeList" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleComputeTypeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleComputeTypeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsworkspacesbundle"

dataawsworkspacesbundle.NewDataAwsWorkspacesBundleComputeTypeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsWorkspacesBundleComputeTypeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleComputeTypeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleComputeTypeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleComputeTypeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleComputeTypeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleComputeTypeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleComputeTypeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleComputeTypeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleComputeTypeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleComputeTypeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleComputeTypeList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleComputeTypeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleComputeTypeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleComputeTypeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleComputeTypeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleComputeTypeList.get"></a>

```go
func Get(index *f64) DataAwsWorkspacesBundleComputeTypeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleComputeTypeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleComputeTypeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleComputeTypeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleComputeTypeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleComputeTypeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsWorkspacesBundleComputeTypeOutputReference <a name="DataAwsWorkspacesBundleComputeTypeOutputReference" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleComputeTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleComputeTypeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsworkspacesbundle"

dataawsworkspacesbundle.NewDataAwsWorkspacesBundleComputeTypeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsWorkspacesBundleComputeTypeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleComputeTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleComputeTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleComputeTypeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleComputeTypeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleComputeTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleComputeTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleComputeTypeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleComputeTypeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleComputeTypeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleComputeTypeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleComputeTypeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleComputeTypeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleComputeTypeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleComputeTypeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleComputeTypeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleComputeTypeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleComputeTypeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleComputeTypeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleComputeTypeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleComputeTypeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleComputeTypeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleComputeTypeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleComputeTypeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleComputeTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleComputeTypeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleComputeTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleComputeTypeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleComputeTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleComputeTypeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleComputeTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleComputeTypeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleComputeTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleComputeTypeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleComputeTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleComputeTypeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleComputeTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleComputeTypeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleComputeTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleComputeTypeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleComputeTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleComputeTypeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleComputeTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleComputeTypeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleComputeTypeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleComputeTypeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleComputeTypeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleComputeTypeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleComputeTypeOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleComputeTypeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleComputeType">DataAwsWorkspacesBundleComputeType</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleComputeTypeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleComputeTypeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleComputeTypeOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleComputeTypeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsWorkspacesBundleComputeType
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleComputeType">DataAwsWorkspacesBundleComputeType</a>

---


### DataAwsWorkspacesBundleRootStorageList <a name="DataAwsWorkspacesBundleRootStorageList" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleRootStorageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleRootStorageList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsworkspacesbundle"

dataawsworkspacesbundle.NewDataAwsWorkspacesBundleRootStorageList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsWorkspacesBundleRootStorageList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleRootStorageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleRootStorageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleRootStorageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleRootStorageList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleRootStorageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleRootStorageList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleRootStorageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleRootStorageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleRootStorageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleRootStorageList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleRootStorageList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleRootStorageList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleRootStorageList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleRootStorageList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleRootStorageList.get"></a>

```go
func Get(index *f64) DataAwsWorkspacesBundleRootStorageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleRootStorageList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleRootStorageList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleRootStorageList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleRootStorageList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleRootStorageList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsWorkspacesBundleRootStorageOutputReference <a name="DataAwsWorkspacesBundleRootStorageOutputReference" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleRootStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleRootStorageOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsworkspacesbundle"

dataawsworkspacesbundle.NewDataAwsWorkspacesBundleRootStorageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsWorkspacesBundleRootStorageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleRootStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleRootStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleRootStorageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleRootStorageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleRootStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleRootStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleRootStorageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleRootStorageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleRootStorageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleRootStorageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleRootStorageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleRootStorageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleRootStorageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleRootStorageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleRootStorageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleRootStorageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleRootStorageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleRootStorageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleRootStorageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleRootStorageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleRootStorageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleRootStorageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleRootStorageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleRootStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleRootStorageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleRootStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleRootStorageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleRootStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleRootStorageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleRootStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleRootStorageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleRootStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleRootStorageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleRootStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleRootStorageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleRootStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleRootStorageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleRootStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleRootStorageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleRootStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleRootStorageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleRootStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleRootStorageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleRootStorageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleRootStorageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleRootStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleRootStorageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleRootStorageOutputReference.property.capacity">Capacity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleRootStorageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleRootStorage">DataAwsWorkspacesBundleRootStorage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleRootStorageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleRootStorageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleRootStorageOutputReference.property.capacity"></a>

```go
func Capacity() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleRootStorageOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsWorkspacesBundleRootStorage
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleRootStorage">DataAwsWorkspacesBundleRootStorage</a>

---


### DataAwsWorkspacesBundleUserStorageList <a name="DataAwsWorkspacesBundleUserStorageList" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleUserStorageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleUserStorageList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsworkspacesbundle"

dataawsworkspacesbundle.NewDataAwsWorkspacesBundleUserStorageList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsWorkspacesBundleUserStorageList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleUserStorageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleUserStorageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleUserStorageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleUserStorageList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleUserStorageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleUserStorageList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleUserStorageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleUserStorageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleUserStorageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleUserStorageList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleUserStorageList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleUserStorageList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleUserStorageList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleUserStorageList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleUserStorageList.get"></a>

```go
func Get(index *f64) DataAwsWorkspacesBundleUserStorageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleUserStorageList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleUserStorageList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleUserStorageList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleUserStorageList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleUserStorageList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsWorkspacesBundleUserStorageOutputReference <a name="DataAwsWorkspacesBundleUserStorageOutputReference" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleUserStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleUserStorageOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsworkspacesbundle"

dataawsworkspacesbundle.NewDataAwsWorkspacesBundleUserStorageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsWorkspacesBundleUserStorageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleUserStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleUserStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleUserStorageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleUserStorageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleUserStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleUserStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleUserStorageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleUserStorageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleUserStorageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleUserStorageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleUserStorageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleUserStorageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleUserStorageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleUserStorageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleUserStorageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleUserStorageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleUserStorageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleUserStorageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleUserStorageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleUserStorageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleUserStorageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleUserStorageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleUserStorageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleUserStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleUserStorageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleUserStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleUserStorageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleUserStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleUserStorageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleUserStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleUserStorageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleUserStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleUserStorageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleUserStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleUserStorageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleUserStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleUserStorageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleUserStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleUserStorageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleUserStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleUserStorageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleUserStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleUserStorageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleUserStorageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleUserStorageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleUserStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleUserStorageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleUserStorageOutputReference.property.capacity">Capacity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleUserStorageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleUserStorage">DataAwsWorkspacesBundleUserStorage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleUserStorageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleUserStorageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleUserStorageOutputReference.property.capacity"></a>

```go
func Capacity() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleUserStorageOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsWorkspacesBundleUserStorage
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsWorkspacesBundle.DataAwsWorkspacesBundleUserStorage">DataAwsWorkspacesBundleUserStorage</a>

---



