# `opsworksPermission` Submodule <a name="`opsworksPermission` Submodule" id="@cdktf/provider-aws.opsworksPermission"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpsworksPermission <a name="OpsworksPermission" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/opsworks_permission aws_opsworks_permission}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworkspermission"

opsworkspermission.NewOpsworksPermission(scope Construct, id *string, config OpsworksPermissionConfig) OpsworksPermission
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermissionConfig">OpsworksPermissionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermissionConfig">OpsworksPermissionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.resetAllowSsh">ResetAllowSsh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.resetAllowSudo">ResetAllowSudo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.resetLevel">ResetLevel</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAllowSsh` <a name="ResetAllowSsh" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.resetAllowSsh"></a>

```go
func ResetAllowSsh()
```

##### `ResetAllowSudo` <a name="ResetAllowSudo" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.resetAllowSudo"></a>

```go
func ResetAllowSudo()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.resetId"></a>

```go
func ResetId()
```

##### `ResetLevel` <a name="ResetLevel" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.resetLevel"></a>

```go
func ResetLevel()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworkspermission"

opsworkspermission.OpsworksPermission_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworkspermission"

opsworkspermission.OpsworksPermission_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworkspermission"

opsworkspermission.OpsworksPermission_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.allowSshInput">AllowSshInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.allowSudoInput">AllowSudoInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.levelInput">LevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.stackIdInput">StackIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.userArnInput">UserArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.allowSsh">AllowSsh</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.allowSudo">AllowSudo</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.level">Level</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.stackId">StackId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.userArn">UserArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AllowSshInput`<sup>Optional</sup> <a name="AllowSshInput" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.allowSshInput"></a>

```go
func AllowSshInput() interface{}
```

- *Type:* interface{}

---

##### `AllowSudoInput`<sup>Optional</sup> <a name="AllowSudoInput" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.allowSudoInput"></a>

```go
func AllowSudoInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LevelInput`<sup>Optional</sup> <a name="LevelInput" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.levelInput"></a>

```go
func LevelInput() *string
```

- *Type:* *string

---

##### `StackIdInput`<sup>Optional</sup> <a name="StackIdInput" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.stackIdInput"></a>

```go
func StackIdInput() *string
```

- *Type:* *string

---

##### `UserArnInput`<sup>Optional</sup> <a name="UserArnInput" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.userArnInput"></a>

```go
func UserArnInput() *string
```

- *Type:* *string

---

##### `AllowSsh`<sup>Required</sup> <a name="AllowSsh" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.allowSsh"></a>

```go
func AllowSsh() interface{}
```

- *Type:* interface{}

---

##### `AllowSudo`<sup>Required</sup> <a name="AllowSudo" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.allowSudo"></a>

```go
func AllowSudo() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.level"></a>

```go
func Level() *string
```

- *Type:* *string

---

##### `StackId`<sup>Required</sup> <a name="StackId" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.stackId"></a>

```go
func StackId() *string
```

- *Type:* *string

---

##### `UserArn`<sup>Required</sup> <a name="UserArn" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.userArn"></a>

```go
func UserArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermission.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OpsworksPermissionConfig <a name="OpsworksPermissionConfig" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermissionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermissionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/opsworkspermission"

&opsworkspermission.OpsworksPermissionConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	StackId: *string,
	UserArn: *string,
	AllowSsh: interface{},
	AllowSudo: interface{},
	Id: *string,
	Level: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermissionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermissionConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermissionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermissionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermissionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermissionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermissionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermissionConfig.property.stackId">StackId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_permission#stack_id OpsworksPermission#stack_id}. |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermissionConfig.property.userArn">UserArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_permission#user_arn OpsworksPermission#user_arn}. |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermissionConfig.property.allowSsh">AllowSsh</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_permission#allow_ssh OpsworksPermission#allow_ssh}. |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermissionConfig.property.allowSudo">AllowSudo</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_permission#allow_sudo OpsworksPermission#allow_sudo}. |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermissionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_permission#id OpsworksPermission#id}. |
| <code><a href="#@cdktf/provider-aws.opsworksPermission.OpsworksPermissionConfig.property.level">Level</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_permission#level OpsworksPermission#level}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermissionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermissionConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermissionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermissionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermissionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermissionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermissionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `StackId`<sup>Required</sup> <a name="StackId" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermissionConfig.property.stackId"></a>

```go
StackId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_permission#stack_id OpsworksPermission#stack_id}.

---

##### `UserArn`<sup>Required</sup> <a name="UserArn" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermissionConfig.property.userArn"></a>

```go
UserArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_permission#user_arn OpsworksPermission#user_arn}.

---

##### `AllowSsh`<sup>Optional</sup> <a name="AllowSsh" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermissionConfig.property.allowSsh"></a>

```go
AllowSsh interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_permission#allow_ssh OpsworksPermission#allow_ssh}.

---

##### `AllowSudo`<sup>Optional</sup> <a name="AllowSudo" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermissionConfig.property.allowSudo"></a>

```go
AllowSudo interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_permission#allow_sudo OpsworksPermission#allow_sudo}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermissionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_permission#id OpsworksPermission#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Level`<sup>Optional</sup> <a name="Level" id="@cdktf/provider-aws.opsworksPermission.OpsworksPermissionConfig.property.level"></a>

```go
Level *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_permission#level OpsworksPermission#level}.

---



