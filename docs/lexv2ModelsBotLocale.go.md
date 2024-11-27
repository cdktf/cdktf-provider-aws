# `lexv2ModelsBotLocale` Submodule <a name="`lexv2ModelsBotLocale` Submodule" id="@cdktf/provider-aws.lexv2ModelsBotLocale"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Lexv2ModelsBotLocale <a name="Lexv2ModelsBotLocale" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/lexv2models_bot_locale aws_lexv2models_bot_locale}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lexv2modelsbotlocale"

lexv2modelsbotlocale.NewLexv2ModelsBotLocale(scope Construct, id *string, config Lexv2ModelsBotLocaleConfig) Lexv2ModelsBotLocale
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig">Lexv2ModelsBotLocaleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig">Lexv2ModelsBotLocaleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.putVoiceSettings">PutVoiceSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.resetVoiceSettings">ResetVoiceSettings</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.putTimeouts"></a>

```go
func PutTimeouts(value Lexv2ModelsBotLocaleTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeouts">Lexv2ModelsBotLocaleTimeouts</a>

---

##### `PutVoiceSettings` <a name="PutVoiceSettings" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.putVoiceSettings"></a>

```go
func PutVoiceSettings(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.putVoiceSettings.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.resetName"></a>

```go
func ResetName()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVoiceSettings` <a name="ResetVoiceSettings" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.resetVoiceSettings"></a>

```go
func ResetVoiceSettings()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Lexv2ModelsBotLocale resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lexv2modelsbotlocale"

lexv2modelsbotlocale.Lexv2ModelsBotLocale_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lexv2modelsbotlocale"

lexv2modelsbotlocale.Lexv2ModelsBotLocale_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lexv2modelsbotlocale"

lexv2modelsbotlocale.Lexv2ModelsBotLocale_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lexv2modelsbotlocale"

lexv2modelsbotlocale.Lexv2ModelsBotLocale_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a Lexv2ModelsBotLocale resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Lexv2ModelsBotLocale to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Lexv2ModelsBotLocale that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/lexv2models_bot_locale#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the Lexv2ModelsBotLocale to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference">Lexv2ModelsBotLocaleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.voiceSettings">VoiceSettings</a></code> | <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList">Lexv2ModelsBotLocaleVoiceSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.botIdInput">BotIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.botVersionInput">BotVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.localeIdInput">LocaleIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.nLuIntentConfidenceThresholdInput">NLuIntentConfidenceThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.voiceSettingsInput">VoiceSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.botId">BotId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.botVersion">BotVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.localeId">LocaleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.nLuIntentConfidenceThreshold">NLuIntentConfidenceThreshold</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.timeouts"></a>

```go
func Timeouts() Lexv2ModelsBotLocaleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference">Lexv2ModelsBotLocaleTimeoutsOutputReference</a>

---

##### `VoiceSettings`<sup>Required</sup> <a name="VoiceSettings" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.voiceSettings"></a>

```go
func VoiceSettings() Lexv2ModelsBotLocaleVoiceSettingsList
```

- *Type:* <a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList">Lexv2ModelsBotLocaleVoiceSettingsList</a>

---

##### `BotIdInput`<sup>Optional</sup> <a name="BotIdInput" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.botIdInput"></a>

```go
func BotIdInput() *string
```

- *Type:* *string

---

##### `BotVersionInput`<sup>Optional</sup> <a name="BotVersionInput" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.botVersionInput"></a>

```go
func BotVersionInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `LocaleIdInput`<sup>Optional</sup> <a name="LocaleIdInput" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.localeIdInput"></a>

```go
func LocaleIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NLuIntentConfidenceThresholdInput`<sup>Optional</sup> <a name="NLuIntentConfidenceThresholdInput" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.nLuIntentConfidenceThresholdInput"></a>

```go
func NLuIntentConfidenceThresholdInput() *f64
```

- *Type:* *f64

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VoiceSettingsInput`<sup>Optional</sup> <a name="VoiceSettingsInput" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.voiceSettingsInput"></a>

```go
func VoiceSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `BotId`<sup>Required</sup> <a name="BotId" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.botId"></a>

```go
func BotId() *string
```

- *Type:* *string

---

##### `BotVersion`<sup>Required</sup> <a name="BotVersion" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.botVersion"></a>

```go
func BotVersion() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `LocaleId`<sup>Required</sup> <a name="LocaleId" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.localeId"></a>

```go
func LocaleId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NLuIntentConfidenceThreshold`<sup>Required</sup> <a name="NLuIntentConfidenceThreshold" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.nLuIntentConfidenceThreshold"></a>

```go
func NLuIntentConfidenceThreshold() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocale.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Lexv2ModelsBotLocaleConfig <a name="Lexv2ModelsBotLocaleConfig" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lexv2modelsbotlocale"

&lexv2modelsbotlocale.Lexv2ModelsBotLocaleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BotId: *string,
	BotVersion: *string,
	LocaleId: *string,
	NLuIntentConfidenceThreshold: *f64,
	Description: *string,
	Name: *string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeouts,
	VoiceSettings: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.botId">BotId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/lexv2models_bot_locale#bot_id Lexv2ModelsBotLocale#bot_id}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.botVersion">BotVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/lexv2models_bot_locale#bot_version Lexv2ModelsBotLocale#bot_version}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.localeId">LocaleId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/lexv2models_bot_locale#locale_id Lexv2ModelsBotLocale#locale_id}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.nLuIntentConfidenceThreshold">NLuIntentConfidenceThreshold</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/lexv2models_bot_locale#n_lu_intent_confidence_threshold Lexv2ModelsBotLocale#n_lu_intent_confidence_threshold}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/lexv2models_bot_locale#description Lexv2ModelsBotLocale#description}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/lexv2models_bot_locale#name Lexv2ModelsBotLocale#name}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeouts">Lexv2ModelsBotLocaleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.voiceSettings">VoiceSettings</a></code> | <code>interface{}</code> | voice_settings block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BotId`<sup>Required</sup> <a name="BotId" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.botId"></a>

```go
BotId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/lexv2models_bot_locale#bot_id Lexv2ModelsBotLocale#bot_id}.

---

##### `BotVersion`<sup>Required</sup> <a name="BotVersion" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.botVersion"></a>

```go
BotVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/lexv2models_bot_locale#bot_version Lexv2ModelsBotLocale#bot_version}.

---

##### `LocaleId`<sup>Required</sup> <a name="LocaleId" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.localeId"></a>

```go
LocaleId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/lexv2models_bot_locale#locale_id Lexv2ModelsBotLocale#locale_id}.

---

##### `NLuIntentConfidenceThreshold`<sup>Required</sup> <a name="NLuIntentConfidenceThreshold" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.nLuIntentConfidenceThreshold"></a>

```go
NLuIntentConfidenceThreshold *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/lexv2models_bot_locale#n_lu_intent_confidence_threshold Lexv2ModelsBotLocale#n_lu_intent_confidence_threshold}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/lexv2models_bot_locale#description Lexv2ModelsBotLocale#description}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/lexv2models_bot_locale#name Lexv2ModelsBotLocale#name}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.timeouts"></a>

```go
Timeouts Lexv2ModelsBotLocaleTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeouts">Lexv2ModelsBotLocaleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/lexv2models_bot_locale#timeouts Lexv2ModelsBotLocale#timeouts}

---

##### `VoiceSettings`<sup>Optional</sup> <a name="VoiceSettings" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleConfig.property.voiceSettings"></a>

```go
VoiceSettings interface{}
```

- *Type:* interface{}

voice_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/lexv2models_bot_locale#voice_settings Lexv2ModelsBotLocale#voice_settings}

---

### Lexv2ModelsBotLocaleTimeouts <a name="Lexv2ModelsBotLocaleTimeouts" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lexv2modelsbotlocale"

&lexv2modelsbotlocale.Lexv2ModelsBotLocaleTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeouts.property.create">Create</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeouts.property.delete">Delete</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeouts.property.update">Update</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/lexv2models_bot_locale#create Lexv2ModelsBotLocale#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/lexv2models_bot_locale#delete Lexv2ModelsBotLocale#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/lexv2models_bot_locale#update Lexv2ModelsBotLocale#update}

---

### Lexv2ModelsBotLocaleVoiceSettings <a name="Lexv2ModelsBotLocaleVoiceSettings" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lexv2modelsbotlocale"

&lexv2modelsbotlocale.Lexv2ModelsBotLocaleVoiceSettings {
	VoiceId: *string,
	Engine: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettings.property.voiceId">VoiceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/lexv2models_bot_locale#voice_id Lexv2ModelsBotLocale#voice_id}. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettings.property.engine">Engine</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/lexv2models_bot_locale#engine Lexv2ModelsBotLocale#engine}. |

---

##### `VoiceId`<sup>Required</sup> <a name="VoiceId" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettings.property.voiceId"></a>

```go
VoiceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/lexv2models_bot_locale#voice_id Lexv2ModelsBotLocale#voice_id}.

---

##### `Engine`<sup>Optional</sup> <a name="Engine" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettings.property.engine"></a>

```go
Engine *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/lexv2models_bot_locale#engine Lexv2ModelsBotLocale#engine}.

---

## Classes <a name="Classes" id="Classes"></a>

### Lexv2ModelsBotLocaleTimeoutsOutputReference <a name="Lexv2ModelsBotLocaleTimeoutsOutputReference" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lexv2modelsbotlocale"

lexv2modelsbotlocale.NewLexv2ModelsBotLocaleTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Lexv2ModelsBotLocaleTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Lexv2ModelsBotLocaleVoiceSettingsList <a name="Lexv2ModelsBotLocaleVoiceSettingsList" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lexv2modelsbotlocale"

lexv2modelsbotlocale.NewLexv2ModelsBotLocaleVoiceSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Lexv2ModelsBotLocaleVoiceSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.get"></a>

```go
func Get(index *f64) Lexv2ModelsBotLocaleVoiceSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Lexv2ModelsBotLocaleVoiceSettingsOutputReference <a name="Lexv2ModelsBotLocaleVoiceSettingsOutputReference" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/lexv2modelsbotlocale"

lexv2modelsbotlocale.NewLexv2ModelsBotLocaleVoiceSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Lexv2ModelsBotLocaleVoiceSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.resetEngine">ResetEngine</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEngine` <a name="ResetEngine" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.resetEngine"></a>

```go
func ResetEngine()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.property.engineInput">EngineInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.property.voiceIdInput">VoiceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.property.engine">Engine</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.property.voiceId">VoiceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EngineInput`<sup>Optional</sup> <a name="EngineInput" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.property.engineInput"></a>

```go
func EngineInput() *string
```

- *Type:* *string

---

##### `VoiceIdInput`<sup>Optional</sup> <a name="VoiceIdInput" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.property.voiceIdInput"></a>

```go
func VoiceIdInput() *string
```

- *Type:* *string

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.property.engine"></a>

```go
func Engine() *string
```

- *Type:* *string

---

##### `VoiceId`<sup>Required</sup> <a name="VoiceId" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.property.voiceId"></a>

```go
func VoiceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lexv2ModelsBotLocale.Lexv2ModelsBotLocaleVoiceSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



