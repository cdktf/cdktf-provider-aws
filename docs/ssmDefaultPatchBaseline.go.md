# `ssmDefaultPatchBaseline` Submodule <a name="`ssmDefaultPatchBaseline` Submodule" id="@cdktf/provider-aws.ssmDefaultPatchBaseline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmDefaultPatchBaseline <a name="SsmDefaultPatchBaseline" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ssm_default_patch_baseline aws_ssm_default_patch_baseline}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssmdefaultpatchbaseline"

ssmdefaultpatchbaseline.NewSsmDefaultPatchBaseline(scope Construct, id *string, config SsmDefaultPatchBaselineConfig) SsmDefaultPatchBaseline
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaselineConfig">SsmDefaultPatchBaselineConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaselineConfig">SsmDefaultPatchBaselineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssmdefaultpatchbaseline"

ssmdefaultpatchbaseline.SsmDefaultPatchBaseline_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssmdefaultpatchbaseline"

ssmdefaultpatchbaseline.SsmDefaultPatchBaseline_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssmdefaultpatchbaseline"

ssmdefaultpatchbaseline.SsmDefaultPatchBaseline_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.baselineIdInput">BaselineIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.operatingSystemInput">OperatingSystemInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.baselineId">BaselineId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.operatingSystem">OperatingSystem</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BaselineIdInput`<sup>Optional</sup> <a name="BaselineIdInput" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.baselineIdInput"></a>

```go
func BaselineIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OperatingSystemInput`<sup>Optional</sup> <a name="OperatingSystemInput" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.operatingSystemInput"></a>

```go
func OperatingSystemInput() *string
```

- *Type:* *string

---

##### `BaselineId`<sup>Required</sup> <a name="BaselineId" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.baselineId"></a>

```go
func BaselineId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `OperatingSystem`<sup>Required</sup> <a name="OperatingSystem" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.operatingSystem"></a>

```go
func OperatingSystem() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaseline.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SsmDefaultPatchBaselineConfig <a name="SsmDefaultPatchBaselineConfig" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaselineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaselineConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssmdefaultpatchbaseline"

&ssmdefaultpatchbaseline.SsmDefaultPatchBaselineConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BaselineId: *string,
	OperatingSystem: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaselineConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaselineConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaselineConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaselineConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaselineConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaselineConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaselineConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaselineConfig.property.baselineId">BaselineId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_default_patch_baseline#baseline_id SsmDefaultPatchBaseline#baseline_id}. |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaselineConfig.property.operatingSystem">OperatingSystem</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_default_patch_baseline#operating_system SsmDefaultPatchBaseline#operating_system}. |
| <code><a href="#@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaselineConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_default_patch_baseline#id SsmDefaultPatchBaseline#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaselineConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaselineConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaselineConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaselineConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaselineConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaselineConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaselineConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BaselineId`<sup>Required</sup> <a name="BaselineId" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaselineConfig.property.baselineId"></a>

```go
BaselineId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_default_patch_baseline#baseline_id SsmDefaultPatchBaseline#baseline_id}.

---

##### `OperatingSystem`<sup>Required</sup> <a name="OperatingSystem" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaselineConfig.property.operatingSystem"></a>

```go
OperatingSystem *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_default_patch_baseline#operating_system SsmDefaultPatchBaseline#operating_system}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.ssmDefaultPatchBaseline.SsmDefaultPatchBaselineConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_default_patch_baseline#id SsmDefaultPatchBaseline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



