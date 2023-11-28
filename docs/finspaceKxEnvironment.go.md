# `aws_finspace_kx_environment`

Refer to the Terraform Registory for docs: [`aws_finspace_kx_environment`](https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/finspace_kx_environment).

# `finspaceKxEnvironment` Submodule <a name="`finspaceKxEnvironment` Submodule" id="@cdktf/provider-aws.finspaceKxEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FinspaceKxEnvironment <a name="FinspaceKxEnvironment" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/finspace_kx_environment aws_finspace_kx_environment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/finspacekxenvironment"

finspacekxenvironment.NewFinspaceKxEnvironment(scope Construct, id *string, config FinspaceKxEnvironmentConfig) FinspaceKxEnvironment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig">FinspaceKxEnvironmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig">FinspaceKxEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.putCustomDnsConfiguration">PutCustomDnsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.putTransitGatewayConfiguration">PutTransitGatewayConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.resetCustomDnsConfiguration">ResetCustomDnsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.resetTransitGatewayConfiguration">ResetTransitGatewayConfiguration</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutCustomDnsConfiguration` <a name="PutCustomDnsConfiguration" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.putCustomDnsConfiguration"></a>

```go
func PutCustomDnsConfiguration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.putCustomDnsConfiguration.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.putTimeouts"></a>

```go
func PutTimeouts(value FinspaceKxEnvironmentTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeouts">FinspaceKxEnvironmentTimeouts</a>

---

##### `PutTransitGatewayConfiguration` <a name="PutTransitGatewayConfiguration" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.putTransitGatewayConfiguration"></a>

```go
func PutTransitGatewayConfiguration(value FinspaceKxEnvironmentTransitGatewayConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.putTransitGatewayConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfiguration">FinspaceKxEnvironmentTransitGatewayConfiguration</a>

---

##### `ResetCustomDnsConfiguration` <a name="ResetCustomDnsConfiguration" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.resetCustomDnsConfiguration"></a>

```go
func ResetCustomDnsConfiguration()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTransitGatewayConfiguration` <a name="ResetTransitGatewayConfiguration" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.resetTransitGatewayConfiguration"></a>

```go
func ResetTransitGatewayConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a FinspaceKxEnvironment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/finspacekxenvironment"

finspacekxenvironment.FinspaceKxEnvironment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/finspacekxenvironment"

finspacekxenvironment.FinspaceKxEnvironment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/finspacekxenvironment"

finspacekxenvironment.FinspaceKxEnvironment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/finspacekxenvironment"

finspacekxenvironment.FinspaceKxEnvironment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a FinspaceKxEnvironment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the FinspaceKxEnvironment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing FinspaceKxEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/finspace_kx_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the FinspaceKxEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.availabilityZones">AvailabilityZones</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.createdTimestamp">CreatedTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.customDnsConfiguration">CustomDnsConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationList">FinspaceKxEnvironmentCustomDnsConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.infrastructureAccountId">InfrastructureAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.lastModifiedTimestamp">LastModifiedTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference">FinspaceKxEnvironmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.transitGatewayConfiguration">TransitGatewayConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference">FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.customDnsConfigurationInput">CustomDnsConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.transitGatewayConfigurationInput">TransitGatewayConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfiguration">FinspaceKxEnvironmentTransitGatewayConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `AvailabilityZones`<sup>Required</sup> <a name="AvailabilityZones" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.availabilityZones"></a>

```go
func AvailabilityZones() *[]*string
```

- *Type:* *[]*string

---

##### `CreatedTimestamp`<sup>Required</sup> <a name="CreatedTimestamp" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.createdTimestamp"></a>

```go
func CreatedTimestamp() *string
```

- *Type:* *string

---

##### `CustomDnsConfiguration`<sup>Required</sup> <a name="CustomDnsConfiguration" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.customDnsConfiguration"></a>

```go
func CustomDnsConfiguration() FinspaceKxEnvironmentCustomDnsConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationList">FinspaceKxEnvironmentCustomDnsConfigurationList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InfrastructureAccountId`<sup>Required</sup> <a name="InfrastructureAccountId" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.infrastructureAccountId"></a>

```go
func InfrastructureAccountId() *string
```

- *Type:* *string

---

##### `LastModifiedTimestamp`<sup>Required</sup> <a name="LastModifiedTimestamp" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.lastModifiedTimestamp"></a>

```go
func LastModifiedTimestamp() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.timeouts"></a>

```go
func Timeouts() FinspaceKxEnvironmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference">FinspaceKxEnvironmentTimeoutsOutputReference</a>

---

##### `TransitGatewayConfiguration`<sup>Required</sup> <a name="TransitGatewayConfiguration" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.transitGatewayConfiguration"></a>

```go
func TransitGatewayConfiguration() FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference">FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference</a>

---

##### `CustomDnsConfigurationInput`<sup>Optional</sup> <a name="CustomDnsConfigurationInput" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.customDnsConfigurationInput"></a>

```go
func CustomDnsConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TransitGatewayConfigurationInput`<sup>Optional</sup> <a name="TransitGatewayConfigurationInput" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.transitGatewayConfigurationInput"></a>

```go
func TransitGatewayConfigurationInput() FinspaceKxEnvironmentTransitGatewayConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfiguration">FinspaceKxEnvironmentTransitGatewayConfiguration</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### FinspaceKxEnvironmentConfig <a name="FinspaceKxEnvironmentConfig" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/finspacekxenvironment"

&finspacekxenvironment.FinspaceKxEnvironmentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	KmsKeyId: *string,
	Name: *string,
	CustomDnsConfiguration: interface{},
	Description: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws/v18.finspaceKxEnvironment.FinspaceKxEnvironmentTimeouts,
	TransitGatewayConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws/v18.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/finspace_kx_environment#kms_key_id FinspaceKxEnvironment#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/finspace_kx_environment#name FinspaceKxEnvironment#name}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.customDnsConfiguration">CustomDnsConfiguration</a></code> | <code>interface{}</code> | custom_dns_configuration block. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/finspace_kx_environment#description FinspaceKxEnvironment#description}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/finspace_kx_environment#tags FinspaceKxEnvironment#tags}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/finspace_kx_environment#tags_all FinspaceKxEnvironment#tags_all}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeouts">FinspaceKxEnvironmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.transitGatewayConfiguration">TransitGatewayConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfiguration">FinspaceKxEnvironmentTransitGatewayConfiguration</a></code> | transit_gateway_configuration block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/finspace_kx_environment#kms_key_id FinspaceKxEnvironment#kms_key_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/finspace_kx_environment#name FinspaceKxEnvironment#name}.

---

##### `CustomDnsConfiguration`<sup>Optional</sup> <a name="CustomDnsConfiguration" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.customDnsConfiguration"></a>

```go
CustomDnsConfiguration interface{}
```

- *Type:* interface{}

custom_dns_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/finspace_kx_environment#custom_dns_configuration FinspaceKxEnvironment#custom_dns_configuration}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/finspace_kx_environment#description FinspaceKxEnvironment#description}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/finspace_kx_environment#tags FinspaceKxEnvironment#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/finspace_kx_environment#tags_all FinspaceKxEnvironment#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.timeouts"></a>

```go
Timeouts FinspaceKxEnvironmentTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeouts">FinspaceKxEnvironmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/finspace_kx_environment#timeouts FinspaceKxEnvironment#timeouts}

---

##### `TransitGatewayConfiguration`<sup>Optional</sup> <a name="TransitGatewayConfiguration" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.transitGatewayConfiguration"></a>

```go
TransitGatewayConfiguration FinspaceKxEnvironmentTransitGatewayConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfiguration">FinspaceKxEnvironmentTransitGatewayConfiguration</a>

transit_gateway_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/finspace_kx_environment#transit_gateway_configuration FinspaceKxEnvironment#transit_gateway_configuration}

---

### FinspaceKxEnvironmentCustomDnsConfiguration <a name="FinspaceKxEnvironmentCustomDnsConfiguration" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/finspacekxenvironment"

&finspacekxenvironment.FinspaceKxEnvironmentCustomDnsConfiguration {
	CustomDnsServerIp: *string,
	CustomDnsServerName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfiguration.property.customDnsServerIp">CustomDnsServerIp</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/finspace_kx_environment#custom_dns_server_ip FinspaceKxEnvironment#custom_dns_server_ip}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfiguration.property.customDnsServerName">CustomDnsServerName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/finspace_kx_environment#custom_dns_server_name FinspaceKxEnvironment#custom_dns_server_name}. |

---

##### `CustomDnsServerIp`<sup>Required</sup> <a name="CustomDnsServerIp" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfiguration.property.customDnsServerIp"></a>

```go
CustomDnsServerIp *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/finspace_kx_environment#custom_dns_server_ip FinspaceKxEnvironment#custom_dns_server_ip}.

---

##### `CustomDnsServerName`<sup>Required</sup> <a name="CustomDnsServerName" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfiguration.property.customDnsServerName"></a>

```go
CustomDnsServerName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/finspace_kx_environment#custom_dns_server_name FinspaceKxEnvironment#custom_dns_server_name}.

---

### FinspaceKxEnvironmentTimeouts <a name="FinspaceKxEnvironmentTimeouts" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/finspacekxenvironment"

&finspacekxenvironment.FinspaceKxEnvironmentTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/finspace_kx_environment#create FinspaceKxEnvironment#create}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/finspace_kx_environment#delete FinspaceKxEnvironment#delete}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/finspace_kx_environment#update FinspaceKxEnvironment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/finspace_kx_environment#create FinspaceKxEnvironment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/finspace_kx_environment#delete FinspaceKxEnvironment#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/finspace_kx_environment#update FinspaceKxEnvironment#update}.

---

### FinspaceKxEnvironmentTransitGatewayConfiguration <a name="FinspaceKxEnvironmentTransitGatewayConfiguration" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/finspacekxenvironment"

&finspacekxenvironment.FinspaceKxEnvironmentTransitGatewayConfiguration {
	RoutableCidrSpace: *string,
	TransitGatewayId: *string,
	AttachmentNetworkAclConfiguration: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfiguration.property.routableCidrSpace">RoutableCidrSpace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/finspace_kx_environment#routable_cidr_space FinspaceKxEnvironment#routable_cidr_space}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfiguration.property.transitGatewayId">TransitGatewayId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/finspace_kx_environment#transit_gateway_id FinspaceKxEnvironment#transit_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfiguration.property.attachmentNetworkAclConfiguration">AttachmentNetworkAclConfiguration</a></code> | <code>interface{}</code> | attachment_network_acl_configuration block. |

---

##### `RoutableCidrSpace`<sup>Required</sup> <a name="RoutableCidrSpace" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfiguration.property.routableCidrSpace"></a>

```go
RoutableCidrSpace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/finspace_kx_environment#routable_cidr_space FinspaceKxEnvironment#routable_cidr_space}.

---

##### `TransitGatewayId`<sup>Required</sup> <a name="TransitGatewayId" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfiguration.property.transitGatewayId"></a>

```go
TransitGatewayId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/finspace_kx_environment#transit_gateway_id FinspaceKxEnvironment#transit_gateway_id}.

---

##### `AttachmentNetworkAclConfiguration`<sup>Optional</sup> <a name="AttachmentNetworkAclConfiguration" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfiguration.property.attachmentNetworkAclConfiguration"></a>

```go
AttachmentNetworkAclConfiguration interface{}
```

- *Type:* interface{}

attachment_network_acl_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/finspace_kx_environment#attachment_network_acl_configuration FinspaceKxEnvironment#attachment_network_acl_configuration}

---

### FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration <a name="FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/finspacekxenvironment"

&finspacekxenvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration {
	CidrBlock: *string,
	Protocol: *string,
	RuleAction: *string,
	RuleNumber: *f64,
	IcmpTypeCode: github.com/cdktf/cdktf-provider-aws-go/aws/v18.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode,
	PortRange: github.com/cdktf/cdktf-provider-aws-go/aws/v18.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration.property.cidrBlock">CidrBlock</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/finspace_kx_environment#cidr_block FinspaceKxEnvironment#cidr_block}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration.property.protocol">Protocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/finspace_kx_environment#protocol FinspaceKxEnvironment#protocol}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration.property.ruleAction">RuleAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/finspace_kx_environment#rule_action FinspaceKxEnvironment#rule_action}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration.property.ruleNumber">RuleNumber</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/finspace_kx_environment#rule_number FinspaceKxEnvironment#rule_number}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration.property.icmpTypeCode">IcmpTypeCode</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode">FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode</a></code> | icmp_type_code block. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration.property.portRange">PortRange</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange">FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange</a></code> | port_range block. |

---

##### `CidrBlock`<sup>Required</sup> <a name="CidrBlock" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration.property.cidrBlock"></a>

```go
CidrBlock *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/finspace_kx_environment#cidr_block FinspaceKxEnvironment#cidr_block}.

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/finspace_kx_environment#protocol FinspaceKxEnvironment#protocol}.

---

##### `RuleAction`<sup>Required</sup> <a name="RuleAction" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration.property.ruleAction"></a>

```go
RuleAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/finspace_kx_environment#rule_action FinspaceKxEnvironment#rule_action}.

---

##### `RuleNumber`<sup>Required</sup> <a name="RuleNumber" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration.property.ruleNumber"></a>

```go
RuleNumber *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/finspace_kx_environment#rule_number FinspaceKxEnvironment#rule_number}.

---

##### `IcmpTypeCode`<sup>Optional</sup> <a name="IcmpTypeCode" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration.property.icmpTypeCode"></a>

```go
IcmpTypeCode FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode">FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode</a>

icmp_type_code block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/finspace_kx_environment#icmp_type_code FinspaceKxEnvironment#icmp_type_code}

---

##### `PortRange`<sup>Optional</sup> <a name="PortRange" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration.property.portRange"></a>

```go
PortRange FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange">FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange</a>

port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/finspace_kx_environment#port_range FinspaceKxEnvironment#port_range}

---

### FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode <a name="FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/finspacekxenvironment"

&finspacekxenvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode {
	Code: *f64,
	Type: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode.property.code">Code</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/finspace_kx_environment#code FinspaceKxEnvironment#code}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode.property.type">Type</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/finspace_kx_environment#type FinspaceKxEnvironment#type}. |

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode.property.code"></a>

```go
Code *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/finspace_kx_environment#code FinspaceKxEnvironment#code}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode.property.type"></a>

```go
Type *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/finspace_kx_environment#type FinspaceKxEnvironment#type}.

---

### FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange <a name="FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/finspacekxenvironment"

&finspacekxenvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange {
	From: *f64,
	To: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange.property.from">From</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/finspace_kx_environment#from FinspaceKxEnvironment#from}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange.property.to">To</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/finspace_kx_environment#to FinspaceKxEnvironment#to}. |

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange.property.from"></a>

```go
From *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/finspace_kx_environment#from FinspaceKxEnvironment#from}.

---

##### `To`<sup>Required</sup> <a name="To" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange.property.to"></a>

```go
To *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/finspace_kx_environment#to FinspaceKxEnvironment#to}.

---

## Classes <a name="Classes" id="Classes"></a>

### FinspaceKxEnvironmentCustomDnsConfigurationList <a name="FinspaceKxEnvironmentCustomDnsConfigurationList" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/finspacekxenvironment"

finspacekxenvironment.NewFinspaceKxEnvironmentCustomDnsConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FinspaceKxEnvironmentCustomDnsConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationList.get"></a>

```go
func Get(index *f64) FinspaceKxEnvironmentCustomDnsConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FinspaceKxEnvironmentCustomDnsConfigurationOutputReference <a name="FinspaceKxEnvironmentCustomDnsConfigurationOutputReference" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/finspacekxenvironment"

finspacekxenvironment.NewFinspaceKxEnvironmentCustomDnsConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FinspaceKxEnvironmentCustomDnsConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.property.customDnsServerIpInput">CustomDnsServerIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.property.customDnsServerNameInput">CustomDnsServerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.property.customDnsServerIp">CustomDnsServerIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.property.customDnsServerName">CustomDnsServerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomDnsServerIpInput`<sup>Optional</sup> <a name="CustomDnsServerIpInput" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.property.customDnsServerIpInput"></a>

```go
func CustomDnsServerIpInput() *string
```

- *Type:* *string

---

##### `CustomDnsServerNameInput`<sup>Optional</sup> <a name="CustomDnsServerNameInput" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.property.customDnsServerNameInput"></a>

```go
func CustomDnsServerNameInput() *string
```

- *Type:* *string

---

##### `CustomDnsServerIp`<sup>Required</sup> <a name="CustomDnsServerIp" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.property.customDnsServerIp"></a>

```go
func CustomDnsServerIp() *string
```

- *Type:* *string

---

##### `CustomDnsServerName`<sup>Required</sup> <a name="CustomDnsServerName" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.property.customDnsServerName"></a>

```go
func CustomDnsServerName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FinspaceKxEnvironmentTimeoutsOutputReference <a name="FinspaceKxEnvironmentTimeoutsOutputReference" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/finspacekxenvironment"

finspacekxenvironment.NewFinspaceKxEnvironmentTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FinspaceKxEnvironmentTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference <a name="FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/finspacekxenvironment"

finspacekxenvironment.NewFinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.property.codeInput">CodeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.property.typeInput">TypeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.property.code">Code</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.property.type">Type</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode">FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CodeInput`<sup>Optional</sup> <a name="CodeInput" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.property.codeInput"></a>

```go
func CodeInput() *f64
```

- *Type:* *f64

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.property.typeInput"></a>

```go
func TypeInput() *f64
```

- *Type:* *f64

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.property.code"></a>

```go
func Code() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.property.type"></a>

```go
func Type() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.property.internalValue"></a>

```go
func InternalValue() FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode">FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode</a>

---


### FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList <a name="FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/finspacekxenvironment"

finspacekxenvironment.NewFinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList.get"></a>

```go
func Get(index *f64) FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference <a name="FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/finspacekxenvironment"

finspacekxenvironment.NewFinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.putIcmpTypeCode">PutIcmpTypeCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.putPortRange">PutPortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.resetIcmpTypeCode">ResetIcmpTypeCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.resetPortRange">ResetPortRange</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIcmpTypeCode` <a name="PutIcmpTypeCode" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.putIcmpTypeCode"></a>

```go
func PutIcmpTypeCode(value FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.putIcmpTypeCode.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode">FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode</a>

---

##### `PutPortRange` <a name="PutPortRange" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.putPortRange"></a>

```go
func PutPortRange(value FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.putPortRange.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange">FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange</a>

---

##### `ResetIcmpTypeCode` <a name="ResetIcmpTypeCode" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.resetIcmpTypeCode"></a>

```go
func ResetIcmpTypeCode()
```

##### `ResetPortRange` <a name="ResetPortRange" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.resetPortRange"></a>

```go
func ResetPortRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.icmpTypeCode">IcmpTypeCode</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference">FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.portRange">PortRange</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference">FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.cidrBlockInput">CidrBlockInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.icmpTypeCodeInput">IcmpTypeCodeInput</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode">FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.portRangeInput">PortRangeInput</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange">FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.ruleActionInput">RuleActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.ruleNumberInput">RuleNumberInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.cidrBlock">CidrBlock</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.ruleAction">RuleAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.ruleNumber">RuleNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IcmpTypeCode`<sup>Required</sup> <a name="IcmpTypeCode" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.icmpTypeCode"></a>

```go
func IcmpTypeCode() FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference">FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference</a>

---

##### `PortRange`<sup>Required</sup> <a name="PortRange" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.portRange"></a>

```go
func PortRange() FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference">FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference</a>

---

##### `CidrBlockInput`<sup>Optional</sup> <a name="CidrBlockInput" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.cidrBlockInput"></a>

```go
func CidrBlockInput() *string
```

- *Type:* *string

---

##### `IcmpTypeCodeInput`<sup>Optional</sup> <a name="IcmpTypeCodeInput" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.icmpTypeCodeInput"></a>

```go
func IcmpTypeCodeInput() FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode">FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode</a>

---

##### `PortRangeInput`<sup>Optional</sup> <a name="PortRangeInput" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.portRangeInput"></a>

```go
func PortRangeInput() FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange">FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange</a>

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `RuleActionInput`<sup>Optional</sup> <a name="RuleActionInput" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.ruleActionInput"></a>

```go
func RuleActionInput() *string
```

- *Type:* *string

---

##### `RuleNumberInput`<sup>Optional</sup> <a name="RuleNumberInput" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.ruleNumberInput"></a>

```go
func RuleNumberInput() *f64
```

- *Type:* *f64

---

##### `CidrBlock`<sup>Required</sup> <a name="CidrBlock" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.cidrBlock"></a>

```go
func CidrBlock() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `RuleAction`<sup>Required</sup> <a name="RuleAction" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.ruleAction"></a>

```go
func RuleAction() *string
```

- *Type:* *string

---

##### `RuleNumber`<sup>Required</sup> <a name="RuleNumber" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.ruleNumber"></a>

```go
func RuleNumber() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference <a name="FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/finspacekxenvironment"

finspacekxenvironment.NewFinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.property.fromInput">FromInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.property.toInput">ToInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.property.from">From</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.property.to">To</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange">FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FromInput`<sup>Optional</sup> <a name="FromInput" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.property.fromInput"></a>

```go
func FromInput() *f64
```

- *Type:* *f64

---

##### `ToInput`<sup>Optional</sup> <a name="ToInput" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.property.toInput"></a>

```go
func ToInput() *f64
```

- *Type:* *f64

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.property.from"></a>

```go
func From() *f64
```

- *Type:* *f64

---

##### `To`<sup>Required</sup> <a name="To" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.property.to"></a>

```go
func To() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange">FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange</a>

---


### FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference <a name="FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v18/finspacekxenvironment"

finspacekxenvironment.NewFinspaceKxEnvironmentTransitGatewayConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.putAttachmentNetworkAclConfiguration">PutAttachmentNetworkAclConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.resetAttachmentNetworkAclConfiguration">ResetAttachmentNetworkAclConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAttachmentNetworkAclConfiguration` <a name="PutAttachmentNetworkAclConfiguration" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.putAttachmentNetworkAclConfiguration"></a>

```go
func PutAttachmentNetworkAclConfiguration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.putAttachmentNetworkAclConfiguration.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAttachmentNetworkAclConfiguration` <a name="ResetAttachmentNetworkAclConfiguration" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.resetAttachmentNetworkAclConfiguration"></a>

```go
func ResetAttachmentNetworkAclConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.property.attachmentNetworkAclConfiguration">AttachmentNetworkAclConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList">FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.property.attachmentNetworkAclConfigurationInput">AttachmentNetworkAclConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.property.routableCidrSpaceInput">RoutableCidrSpaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.property.transitGatewayIdInput">TransitGatewayIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.property.routableCidrSpace">RoutableCidrSpace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.property.transitGatewayId">TransitGatewayId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfiguration">FinspaceKxEnvironmentTransitGatewayConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttachmentNetworkAclConfiguration`<sup>Required</sup> <a name="AttachmentNetworkAclConfiguration" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.property.attachmentNetworkAclConfiguration"></a>

```go
func AttachmentNetworkAclConfiguration() FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList">FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList</a>

---

##### `AttachmentNetworkAclConfigurationInput`<sup>Optional</sup> <a name="AttachmentNetworkAclConfigurationInput" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.property.attachmentNetworkAclConfigurationInput"></a>

```go
func AttachmentNetworkAclConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `RoutableCidrSpaceInput`<sup>Optional</sup> <a name="RoutableCidrSpaceInput" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.property.routableCidrSpaceInput"></a>

```go
func RoutableCidrSpaceInput() *string
```

- *Type:* *string

---

##### `TransitGatewayIdInput`<sup>Optional</sup> <a name="TransitGatewayIdInput" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.property.transitGatewayIdInput"></a>

```go
func TransitGatewayIdInput() *string
```

- *Type:* *string

---

##### `RoutableCidrSpace`<sup>Required</sup> <a name="RoutableCidrSpace" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.property.routableCidrSpace"></a>

```go
func RoutableCidrSpace() *string
```

- *Type:* *string

---

##### `TransitGatewayId`<sup>Required</sup> <a name="TransitGatewayId" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.property.transitGatewayId"></a>

```go
func TransitGatewayId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() FinspaceKxEnvironmentTransitGatewayConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfiguration">FinspaceKxEnvironmentTransitGatewayConfiguration</a>

---



