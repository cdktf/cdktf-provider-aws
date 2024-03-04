# `shieldApplicationLayerAutomaticResponse` Submodule <a name="`shieldApplicationLayerAutomaticResponse` Submodule" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ShieldApplicationLayerAutomaticResponse <a name="ShieldApplicationLayerAutomaticResponse" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/shield_application_layer_automatic_response aws_shield_application_layer_automatic_response}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/shieldapplicationlayerautomaticresponse"

shieldapplicationlayerautomaticresponse.NewShieldApplicationLayerAutomaticResponse(scope Construct, id *string, config ShieldApplicationLayerAutomaticResponseConfig) ShieldApplicationLayerAutomaticResponse
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig">ShieldApplicationLayerAutomaticResponseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig">ShieldApplicationLayerAutomaticResponseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.putTimeouts"></a>

```go
func PutTimeouts(value ShieldApplicationLayerAutomaticResponseTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeouts">ShieldApplicationLayerAutomaticResponseTimeouts</a>

---

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ShieldApplicationLayerAutomaticResponse resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/shieldapplicationlayerautomaticresponse"

shieldapplicationlayerautomaticresponse.ShieldApplicationLayerAutomaticResponse_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/shieldapplicationlayerautomaticresponse"

shieldapplicationlayerautomaticresponse.ShieldApplicationLayerAutomaticResponse_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/shieldapplicationlayerautomaticresponse"

shieldapplicationlayerautomaticresponse.ShieldApplicationLayerAutomaticResponse_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/shieldapplicationlayerautomaticresponse"

shieldapplicationlayerautomaticresponse.ShieldApplicationLayerAutomaticResponse_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ShieldApplicationLayerAutomaticResponse resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ShieldApplicationLayerAutomaticResponse to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ShieldApplicationLayerAutomaticResponse that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/shield_application_layer_automatic_response#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ShieldApplicationLayerAutomaticResponse to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference">ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.resourceArnInput">ResourceArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.resourceArn">ResourceArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.timeouts"></a>

```go
func Timeouts() ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference">ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `ResourceArnInput`<sup>Optional</sup> <a name="ResourceArnInput" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.resourceArnInput"></a>

```go
func ResourceArnInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.resourceArn"></a>

```go
func ResourceArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponse.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ShieldApplicationLayerAutomaticResponseConfig <a name="ShieldApplicationLayerAutomaticResponseConfig" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/shieldapplicationlayerautomaticresponse"

&shieldapplicationlayerautomaticresponse.ShieldApplicationLayerAutomaticResponseConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Action: *string,
	ResourceArn: *string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig.property.action">Action</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/shield_application_layer_automatic_response#action ShieldApplicationLayerAutomaticResponse#action}. |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig.property.resourceArn">ResourceArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/shield_application_layer_automatic_response#resource_arn ShieldApplicationLayerAutomaticResponse#resource_arn}. |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeouts">ShieldApplicationLayerAutomaticResponseTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig.property.action"></a>

```go
Action *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/shield_application_layer_automatic_response#action ShieldApplicationLayerAutomaticResponse#action}.

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig.property.resourceArn"></a>

```go
ResourceArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/shield_application_layer_automatic_response#resource_arn ShieldApplicationLayerAutomaticResponse#resource_arn}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseConfig.property.timeouts"></a>

```go
Timeouts ShieldApplicationLayerAutomaticResponseTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeouts">ShieldApplicationLayerAutomaticResponseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/shield_application_layer_automatic_response#timeouts ShieldApplicationLayerAutomaticResponse#timeouts}

---

### ShieldApplicationLayerAutomaticResponseTimeouts <a name="ShieldApplicationLayerAutomaticResponseTimeouts" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/shieldapplicationlayerautomaticresponse"

&shieldapplicationlayerautomaticresponse.ShieldApplicationLayerAutomaticResponseTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeouts.property.create">Create</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeouts.property.delete">Delete</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeouts.property.update">Update</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/shield_application_layer_automatic_response#create ShieldApplicationLayerAutomaticResponse#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/shield_application_layer_automatic_response#delete ShieldApplicationLayerAutomaticResponse#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/shield_application_layer_automatic_response#update ShieldApplicationLayerAutomaticResponse#update}

---

## Classes <a name="Classes" id="Classes"></a>

### ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference <a name="ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/shieldapplicationlayerautomaticresponse"

shieldapplicationlayerautomaticresponse.NewShieldApplicationLayerAutomaticResponseTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.shieldApplicationLayerAutomaticResponse.ShieldApplicationLayerAutomaticResponseTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



