# `inspector2OrganizationConfiguration` Submodule <a name="`inspector2OrganizationConfiguration` Submodule" id="@cdktf/provider-aws.inspector2OrganizationConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Inspector2OrganizationConfiguration <a name="Inspector2OrganizationConfiguration" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/inspector2_organization_configuration aws_inspector2_organization_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/inspector2organizationconfiguration"

inspector2organizationconfiguration.NewInspector2OrganizationConfiguration(scope Construct, id *string, config Inspector2OrganizationConfigurationConfig) Inspector2OrganizationConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationConfig">Inspector2OrganizationConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationConfig">Inspector2OrganizationConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.putAutoEnable">PutAutoEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAutoEnable` <a name="PutAutoEnable" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.putAutoEnable"></a>

```go
func PutAutoEnable(value Inspector2OrganizationConfigurationAutoEnable)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.putAutoEnable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnable">Inspector2OrganizationConfigurationAutoEnable</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.putTimeouts"></a>

```go
func PutTimeouts(value Inspector2OrganizationConfigurationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeouts">Inspector2OrganizationConfigurationTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.resetId"></a>

```go
func ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Inspector2OrganizationConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/inspector2organizationconfiguration"

inspector2organizationconfiguration.Inspector2OrganizationConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/inspector2organizationconfiguration"

inspector2organizationconfiguration.Inspector2OrganizationConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/inspector2organizationconfiguration"

inspector2organizationconfiguration.Inspector2OrganizationConfiguration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/inspector2organizationconfiguration"

inspector2organizationconfiguration.Inspector2OrganizationConfiguration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a Inspector2OrganizationConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Inspector2OrganizationConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Inspector2OrganizationConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/inspector2_organization_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the Inspector2OrganizationConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.autoEnable">AutoEnable</a></code> | <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference">Inspector2OrganizationConfigurationAutoEnableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.maxAccountLimitReached">MaxAccountLimitReached</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference">Inspector2OrganizationConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.autoEnableInput">AutoEnableInput</a></code> | <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnable">Inspector2OrganizationConfigurationAutoEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AutoEnable`<sup>Required</sup> <a name="AutoEnable" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.autoEnable"></a>

```go
func AutoEnable() Inspector2OrganizationConfigurationAutoEnableOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference">Inspector2OrganizationConfigurationAutoEnableOutputReference</a>

---

##### `MaxAccountLimitReached`<sup>Required</sup> <a name="MaxAccountLimitReached" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.maxAccountLimitReached"></a>

```go
func MaxAccountLimitReached() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.timeouts"></a>

```go
func Timeouts() Inspector2OrganizationConfigurationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference">Inspector2OrganizationConfigurationTimeoutsOutputReference</a>

---

##### `AutoEnableInput`<sup>Optional</sup> <a name="AutoEnableInput" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.autoEnableInput"></a>

```go
func AutoEnableInput() Inspector2OrganizationConfigurationAutoEnable
```

- *Type:* <a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnable">Inspector2OrganizationConfigurationAutoEnable</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Inspector2OrganizationConfigurationAutoEnable <a name="Inspector2OrganizationConfigurationAutoEnable" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnable.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/inspector2organizationconfiguration"

&inspector2organizationconfiguration.Inspector2OrganizationConfigurationAutoEnable {
	Ec2: interface{},
	Ecr: interface{},
	Lambda: interface{},
	LambdaCode: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnable.property.ec2">Ec2</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/inspector2_organization_configuration#ec2 Inspector2OrganizationConfiguration#ec2}. |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnable.property.ecr">Ecr</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/inspector2_organization_configuration#ecr Inspector2OrganizationConfiguration#ecr}. |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnable.property.lambda">Lambda</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/inspector2_organization_configuration#lambda Inspector2OrganizationConfiguration#lambda}. |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnable.property.lambdaCode">LambdaCode</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/inspector2_organization_configuration#lambda_code Inspector2OrganizationConfiguration#lambda_code}. |

---

##### `Ec2`<sup>Required</sup> <a name="Ec2" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnable.property.ec2"></a>

```go
Ec2 interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/inspector2_organization_configuration#ec2 Inspector2OrganizationConfiguration#ec2}.

---

##### `Ecr`<sup>Required</sup> <a name="Ecr" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnable.property.ecr"></a>

```go
Ecr interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/inspector2_organization_configuration#ecr Inspector2OrganizationConfiguration#ecr}.

---

##### `Lambda`<sup>Optional</sup> <a name="Lambda" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnable.property.lambda"></a>

```go
Lambda interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/inspector2_organization_configuration#lambda Inspector2OrganizationConfiguration#lambda}.

---

##### `LambdaCode`<sup>Optional</sup> <a name="LambdaCode" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnable.property.lambdaCode"></a>

```go
LambdaCode interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/inspector2_organization_configuration#lambda_code Inspector2OrganizationConfiguration#lambda_code}.

---

### Inspector2OrganizationConfigurationConfig <a name="Inspector2OrganizationConfigurationConfig" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/inspector2organizationconfiguration"

&inspector2organizationconfiguration.Inspector2OrganizationConfigurationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AutoEnable: github.com/cdktf/cdktf-provider-aws-go/aws/v21.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnable,
	Id: *string,
	Region: *string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws/v21.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationConfig.property.autoEnable">AutoEnable</a></code> | <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnable">Inspector2OrganizationConfigurationAutoEnable</a></code> | auto_enable block. |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/inspector2_organization_configuration#id Inspector2OrganizationConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeouts">Inspector2OrganizationConfigurationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AutoEnable`<sup>Required</sup> <a name="AutoEnable" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationConfig.property.autoEnable"></a>

```go
AutoEnable Inspector2OrganizationConfigurationAutoEnable
```

- *Type:* <a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnable">Inspector2OrganizationConfigurationAutoEnable</a>

auto_enable block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/inspector2_organization_configuration#auto_enable Inspector2OrganizationConfiguration#auto_enable}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/inspector2_organization_configuration#id Inspector2OrganizationConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/inspector2_organization_configuration#region Inspector2OrganizationConfiguration#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationConfig.property.timeouts"></a>

```go
Timeouts Inspector2OrganizationConfigurationTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeouts">Inspector2OrganizationConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/inspector2_organization_configuration#timeouts Inspector2OrganizationConfiguration#timeouts}

---

### Inspector2OrganizationConfigurationTimeouts <a name="Inspector2OrganizationConfigurationTimeouts" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/inspector2organizationconfiguration"

&inspector2organizationconfiguration.Inspector2OrganizationConfigurationTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/inspector2_organization_configuration#create Inspector2OrganizationConfiguration#create}. |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/inspector2_organization_configuration#delete Inspector2OrganizationConfiguration#delete}. |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/inspector2_organization_configuration#update Inspector2OrganizationConfiguration#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/inspector2_organization_configuration#create Inspector2OrganizationConfiguration#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/inspector2_organization_configuration#delete Inspector2OrganizationConfiguration#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/inspector2_organization_configuration#update Inspector2OrganizationConfiguration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### Inspector2OrganizationConfigurationAutoEnableOutputReference <a name="Inspector2OrganizationConfigurationAutoEnableOutputReference" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/inspector2organizationconfiguration"

inspector2organizationconfiguration.NewInspector2OrganizationConfigurationAutoEnableOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Inspector2OrganizationConfigurationAutoEnableOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.resetLambda">ResetLambda</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.resetLambdaCode">ResetLambdaCode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLambda` <a name="ResetLambda" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.resetLambda"></a>

```go
func ResetLambda()
```

##### `ResetLambdaCode` <a name="ResetLambdaCode" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.resetLambdaCode"></a>

```go
func ResetLambdaCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.property.ec2Input">Ec2Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.property.ecrInput">EcrInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.property.lambdaCodeInput">LambdaCodeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.property.lambdaInput">LambdaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.property.ec2">Ec2</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.property.ecr">Ecr</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.property.lambda">Lambda</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.property.lambdaCode">LambdaCode</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnable">Inspector2OrganizationConfigurationAutoEnable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ec2Input`<sup>Optional</sup> <a name="Ec2Input" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.property.ec2Input"></a>

```go
func Ec2Input() interface{}
```

- *Type:* interface{}

---

##### `EcrInput`<sup>Optional</sup> <a name="EcrInput" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.property.ecrInput"></a>

```go
func EcrInput() interface{}
```

- *Type:* interface{}

---

##### `LambdaCodeInput`<sup>Optional</sup> <a name="LambdaCodeInput" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.property.lambdaCodeInput"></a>

```go
func LambdaCodeInput() interface{}
```

- *Type:* interface{}

---

##### `LambdaInput`<sup>Optional</sup> <a name="LambdaInput" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.property.lambdaInput"></a>

```go
func LambdaInput() interface{}
```

- *Type:* interface{}

---

##### `Ec2`<sup>Required</sup> <a name="Ec2" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.property.ec2"></a>

```go
func Ec2() interface{}
```

- *Type:* interface{}

---

##### `Ecr`<sup>Required</sup> <a name="Ecr" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.property.ecr"></a>

```go
func Ecr() interface{}
```

- *Type:* interface{}

---

##### `Lambda`<sup>Required</sup> <a name="Lambda" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.property.lambda"></a>

```go
func Lambda() interface{}
```

- *Type:* interface{}

---

##### `LambdaCode`<sup>Required</sup> <a name="LambdaCode" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.property.lambdaCode"></a>

```go
func LambdaCode() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.property.internalValue"></a>

```go
func InternalValue() Inspector2OrganizationConfigurationAutoEnable
```

- *Type:* <a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnable">Inspector2OrganizationConfigurationAutoEnable</a>

---


### Inspector2OrganizationConfigurationTimeoutsOutputReference <a name="Inspector2OrganizationConfigurationTimeoutsOutputReference" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/inspector2organizationconfiguration"

inspector2organizationconfiguration.NewInspector2OrganizationConfigurationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Inspector2OrganizationConfigurationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



