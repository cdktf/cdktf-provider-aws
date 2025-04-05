# `chimesdkvoiceGlobalSettings` Submodule <a name="`chimesdkvoiceGlobalSettings` Submodule" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChimesdkvoiceGlobalSettings <a name="ChimesdkvoiceGlobalSettings" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/chimesdkvoice_global_settings aws_chimesdkvoice_global_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/chimesdkvoiceglobalsettings"

chimesdkvoiceglobalsettings.NewChimesdkvoiceGlobalSettings(scope Construct, id *string, config ChimesdkvoiceGlobalSettingsConfig) ChimesdkvoiceGlobalSettings
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsConfig">ChimesdkvoiceGlobalSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsConfig">ChimesdkvoiceGlobalSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.putVoiceConnector">PutVoiceConnector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutVoiceConnector` <a name="PutVoiceConnector" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.putVoiceConnector"></a>

```go
func PutVoiceConnector(value ChimesdkvoiceGlobalSettingsVoiceConnector)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.putVoiceConnector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnector">ChimesdkvoiceGlobalSettingsVoiceConnector</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ChimesdkvoiceGlobalSettings resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/chimesdkvoiceglobalsettings"

chimesdkvoiceglobalsettings.ChimesdkvoiceGlobalSettings_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/chimesdkvoiceglobalsettings"

chimesdkvoiceglobalsettings.ChimesdkvoiceGlobalSettings_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/chimesdkvoiceglobalsettings"

chimesdkvoiceglobalsettings.ChimesdkvoiceGlobalSettings_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/chimesdkvoiceglobalsettings"

chimesdkvoiceglobalsettings.ChimesdkvoiceGlobalSettings_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ChimesdkvoiceGlobalSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ChimesdkvoiceGlobalSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ChimesdkvoiceGlobalSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/chimesdkvoice_global_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ChimesdkvoiceGlobalSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.voiceConnector">VoiceConnector</a></code> | <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference">ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.voiceConnectorInput">VoiceConnectorInput</a></code> | <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnector">ChimesdkvoiceGlobalSettingsVoiceConnector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `VoiceConnector`<sup>Required</sup> <a name="VoiceConnector" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.voiceConnector"></a>

```go
func VoiceConnector() ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference">ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `VoiceConnectorInput`<sup>Optional</sup> <a name="VoiceConnectorInput" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.voiceConnectorInput"></a>

```go
func VoiceConnectorInput() ChimesdkvoiceGlobalSettingsVoiceConnector
```

- *Type:* <a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnector">ChimesdkvoiceGlobalSettingsVoiceConnector</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ChimesdkvoiceGlobalSettingsConfig <a name="ChimesdkvoiceGlobalSettingsConfig" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/chimesdkvoiceglobalsettings"

&chimesdkvoiceglobalsettings.ChimesdkvoiceGlobalSettingsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	VoiceConnector: github.com/cdktf/cdktf-provider-aws-go/aws/v19.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnector,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsConfig.property.voiceConnector">VoiceConnector</a></code> | <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnector">ChimesdkvoiceGlobalSettingsVoiceConnector</a></code> | voice_connector block. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/chimesdkvoice_global_settings#id ChimesdkvoiceGlobalSettings#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `VoiceConnector`<sup>Required</sup> <a name="VoiceConnector" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsConfig.property.voiceConnector"></a>

```go
VoiceConnector ChimesdkvoiceGlobalSettingsVoiceConnector
```

- *Type:* <a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnector">ChimesdkvoiceGlobalSettingsVoiceConnector</a>

voice_connector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/chimesdkvoice_global_settings#voice_connector ChimesdkvoiceGlobalSettings#voice_connector}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/chimesdkvoice_global_settings#id ChimesdkvoiceGlobalSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### ChimesdkvoiceGlobalSettingsVoiceConnector <a name="ChimesdkvoiceGlobalSettingsVoiceConnector" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnector.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/chimesdkvoiceglobalsettings"

&chimesdkvoiceglobalsettings.ChimesdkvoiceGlobalSettingsVoiceConnector {
	CdrBucket: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnector.property.cdrBucket">CdrBucket</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/chimesdkvoice_global_settings#cdr_bucket ChimesdkvoiceGlobalSettings#cdr_bucket}. |

---

##### `CdrBucket`<sup>Optional</sup> <a name="CdrBucket" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnector.property.cdrBucket"></a>

```go
CdrBucket *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/chimesdkvoice_global_settings#cdr_bucket ChimesdkvoiceGlobalSettings#cdr_bucket}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference <a name="ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/chimesdkvoiceglobalsettings"

chimesdkvoiceglobalsettings.NewChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.resetCdrBucket">ResetCdrBucket</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCdrBucket` <a name="ResetCdrBucket" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.resetCdrBucket"></a>

```go
func ResetCdrBucket()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.property.cdrBucketInput">CdrBucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.property.cdrBucket">CdrBucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnector">ChimesdkvoiceGlobalSettingsVoiceConnector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CdrBucketInput`<sup>Optional</sup> <a name="CdrBucketInput" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.property.cdrBucketInput"></a>

```go
func CdrBucketInput() *string
```

- *Type:* *string

---

##### `CdrBucket`<sup>Required</sup> <a name="CdrBucket" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.property.cdrBucket"></a>

```go
func CdrBucket() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.property.internalValue"></a>

```go
func InternalValue() ChimesdkvoiceGlobalSettingsVoiceConnector
```

- *Type:* <a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnector">ChimesdkvoiceGlobalSettingsVoiceConnector</a>

---



