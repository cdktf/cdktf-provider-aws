# `paymentcryptographyKey` Submodule <a name="`paymentcryptographyKey` Submodule" id="@cdktf/provider-aws.paymentcryptographyKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PaymentcryptographyKey <a name="PaymentcryptographyKey" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/paymentcryptography_key aws_paymentcryptography_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/paymentcryptographykey"

paymentcryptographykey.NewPaymentcryptographyKey(scope Construct, id *string, config PaymentcryptographyKeyConfig) PaymentcryptographyKey
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig">PaymentcryptographyKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig">PaymentcryptographyKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.putKeyAttributes">PutKeyAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.resetDeletionWindowInDays">ResetDeletionWindowInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.resetKeyAttributes">ResetKeyAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.resetKeyCheckValueAlgorithm">ResetKeyCheckValueAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutKeyAttributes` <a name="PutKeyAttributes" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.putKeyAttributes"></a>

```go
func PutKeyAttributes(value PaymentcryptographyKeyKeyAttributes)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.putKeyAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributes">PaymentcryptographyKeyKeyAttributes</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.putTimeouts"></a>

```go
func PutTimeouts(value PaymentcryptographyKeyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeouts">PaymentcryptographyKeyTimeouts</a>

---

##### `ResetDeletionWindowInDays` <a name="ResetDeletionWindowInDays" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.resetDeletionWindowInDays"></a>

```go
func ResetDeletionWindowInDays()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetKeyAttributes` <a name="ResetKeyAttributes" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.resetKeyAttributes"></a>

```go
func ResetKeyAttributes()
```

##### `ResetKeyCheckValueAlgorithm` <a name="ResetKeyCheckValueAlgorithm" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.resetKeyCheckValueAlgorithm"></a>

```go
func ResetKeyCheckValueAlgorithm()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a PaymentcryptographyKey resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/paymentcryptographykey"

paymentcryptographykey.PaymentcryptographyKey_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/paymentcryptographykey"

paymentcryptographykey.PaymentcryptographyKey_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/paymentcryptographykey"

paymentcryptographykey.PaymentcryptographyKey_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/paymentcryptographykey"

paymentcryptographykey.PaymentcryptographyKey_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a PaymentcryptographyKey resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the PaymentcryptographyKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing PaymentcryptographyKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/paymentcryptography_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the PaymentcryptographyKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.keyAttributes">KeyAttributes</a></code> | <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference">PaymentcryptographyKeyKeyAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.keyCheckValue">KeyCheckValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.keyOrigin">KeyOrigin</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.keyState">KeyState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.tagsAll">TagsAll</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference">PaymentcryptographyKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.deletionWindowInDaysInput">DeletionWindowInDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.exportableInput">ExportableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.keyAttributesInput">KeyAttributesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.keyCheckValueAlgorithmInput">KeyCheckValueAlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.deletionWindowInDays">DeletionWindowInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.exportable">Exportable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.keyCheckValueAlgorithm">KeyCheckValueAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KeyAttributes`<sup>Required</sup> <a name="KeyAttributes" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.keyAttributes"></a>

```go
func KeyAttributes() PaymentcryptographyKeyKeyAttributesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference">PaymentcryptographyKeyKeyAttributesOutputReference</a>

---

##### `KeyCheckValue`<sup>Required</sup> <a name="KeyCheckValue" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.keyCheckValue"></a>

```go
func KeyCheckValue() *string
```

- *Type:* *string

---

##### `KeyOrigin`<sup>Required</sup> <a name="KeyOrigin" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.keyOrigin"></a>

```go
func KeyOrigin() *string
```

- *Type:* *string

---

##### `KeyState`<sup>Required</sup> <a name="KeyState" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.keyState"></a>

```go
func KeyState() *string
```

- *Type:* *string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.tagsAll"></a>

```go
func TagsAll() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.timeouts"></a>

```go
func Timeouts() PaymentcryptographyKeyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference">PaymentcryptographyKeyTimeoutsOutputReference</a>

---

##### `DeletionWindowInDaysInput`<sup>Optional</sup> <a name="DeletionWindowInDaysInput" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.deletionWindowInDaysInput"></a>

```go
func DeletionWindowInDaysInput() *f64
```

- *Type:* *f64

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ExportableInput`<sup>Optional</sup> <a name="ExportableInput" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.exportableInput"></a>

```go
func ExportableInput() interface{}
```

- *Type:* interface{}

---

##### `KeyAttributesInput`<sup>Optional</sup> <a name="KeyAttributesInput" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.keyAttributesInput"></a>

```go
func KeyAttributesInput() interface{}
```

- *Type:* interface{}

---

##### `KeyCheckValueAlgorithmInput`<sup>Optional</sup> <a name="KeyCheckValueAlgorithmInput" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.keyCheckValueAlgorithmInput"></a>

```go
func KeyCheckValueAlgorithmInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionWindowInDays`<sup>Required</sup> <a name="DeletionWindowInDays" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.deletionWindowInDays"></a>

```go
func DeletionWindowInDays() *f64
```

- *Type:* *f64

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Exportable`<sup>Required</sup> <a name="Exportable" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.exportable"></a>

```go
func Exportable() interface{}
```

- *Type:* interface{}

---

##### `KeyCheckValueAlgorithm`<sup>Required</sup> <a name="KeyCheckValueAlgorithm" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.keyCheckValueAlgorithm"></a>

```go
func KeyCheckValueAlgorithm() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PaymentcryptographyKeyConfig <a name="PaymentcryptographyKeyConfig" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/paymentcryptographykey"

&paymentcryptographykey.PaymentcryptographyKeyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Exportable: interface{},
	DeletionWindowInDays: *f64,
	Enabled: interface{},
	KeyAttributes: github.com/cdktf/cdktf-provider-aws-go/aws/v19.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributes,
	KeyCheckValueAlgorithm: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws/v19.paymentcryptographyKey.PaymentcryptographyKeyTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.exportable">Exportable</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/paymentcryptography_key#exportable PaymentcryptographyKey#exportable}. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.deletionWindowInDays">DeletionWindowInDays</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/paymentcryptography_key#deletion_window_in_days PaymentcryptographyKey#deletion_window_in_days}. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/paymentcryptography_key#enabled PaymentcryptographyKey#enabled}. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.keyAttributes">KeyAttributes</a></code> | <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributes">PaymentcryptographyKeyKeyAttributes</a></code> | key_attributes block. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.keyCheckValueAlgorithm">KeyCheckValueAlgorithm</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/paymentcryptography_key#key_check_value_algorithm PaymentcryptographyKey#key_check_value_algorithm}. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/paymentcryptography_key#tags PaymentcryptographyKey#tags}. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeouts">PaymentcryptographyKeyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Exportable`<sup>Required</sup> <a name="Exportable" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.exportable"></a>

```go
Exportable interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/paymentcryptography_key#exportable PaymentcryptographyKey#exportable}.

---

##### `DeletionWindowInDays`<sup>Optional</sup> <a name="DeletionWindowInDays" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.deletionWindowInDays"></a>

```go
DeletionWindowInDays *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/paymentcryptography_key#deletion_window_in_days PaymentcryptographyKey#deletion_window_in_days}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/paymentcryptography_key#enabled PaymentcryptographyKey#enabled}.

---

##### `KeyAttributes`<sup>Optional</sup> <a name="KeyAttributes" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.keyAttributes"></a>

```go
KeyAttributes PaymentcryptographyKeyKeyAttributes
```

- *Type:* <a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributes">PaymentcryptographyKeyKeyAttributes</a>

key_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/paymentcryptography_key#key_attributes PaymentcryptographyKey#key_attributes}

---

##### `KeyCheckValueAlgorithm`<sup>Optional</sup> <a name="KeyCheckValueAlgorithm" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.keyCheckValueAlgorithm"></a>

```go
KeyCheckValueAlgorithm *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/paymentcryptography_key#key_check_value_algorithm PaymentcryptographyKey#key_check_value_algorithm}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/paymentcryptography_key#tags PaymentcryptographyKey#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.timeouts"></a>

```go
Timeouts PaymentcryptographyKeyTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeouts">PaymentcryptographyKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/paymentcryptography_key#timeouts PaymentcryptographyKey#timeouts}

---

### PaymentcryptographyKeyKeyAttributes <a name="PaymentcryptographyKeyKeyAttributes" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/paymentcryptographykey"

&paymentcryptographykey.PaymentcryptographyKeyKeyAttributes {
	KeyAlgorithm: *string,
	KeyClass: *string,
	KeyUsage: *string,
	KeyModesOfUse: github.com/cdktf/cdktf-provider-aws-go/aws/v19.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributes.property.keyAlgorithm">KeyAlgorithm</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/paymentcryptography_key#key_algorithm PaymentcryptographyKey#key_algorithm}. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributes.property.keyClass">KeyClass</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/paymentcryptography_key#key_class PaymentcryptographyKey#key_class}. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributes.property.keyUsage">KeyUsage</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/paymentcryptography_key#key_usage PaymentcryptographyKey#key_usage}. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributes.property.keyModesOfUse">KeyModesOfUse</a></code> | <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse">PaymentcryptographyKeyKeyAttributesKeyModesOfUse</a></code> | key_modes_of_use block. |

---

##### `KeyAlgorithm`<sup>Required</sup> <a name="KeyAlgorithm" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributes.property.keyAlgorithm"></a>

```go
KeyAlgorithm *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/paymentcryptography_key#key_algorithm PaymentcryptographyKey#key_algorithm}.

---

##### `KeyClass`<sup>Required</sup> <a name="KeyClass" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributes.property.keyClass"></a>

```go
KeyClass *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/paymentcryptography_key#key_class PaymentcryptographyKey#key_class}.

---

##### `KeyUsage`<sup>Required</sup> <a name="KeyUsage" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributes.property.keyUsage"></a>

```go
KeyUsage *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/paymentcryptography_key#key_usage PaymentcryptographyKey#key_usage}.

---

##### `KeyModesOfUse`<sup>Optional</sup> <a name="KeyModesOfUse" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributes.property.keyModesOfUse"></a>

```go
KeyModesOfUse PaymentcryptographyKeyKeyAttributesKeyModesOfUse
```

- *Type:* <a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse">PaymentcryptographyKeyKeyAttributesKeyModesOfUse</a>

key_modes_of_use block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/paymentcryptography_key#key_modes_of_use PaymentcryptographyKey#key_modes_of_use}

---

### PaymentcryptographyKeyKeyAttributesKeyModesOfUse <a name="PaymentcryptographyKeyKeyAttributesKeyModesOfUse" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/paymentcryptographykey"

&paymentcryptographykey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse {
	Decrypt: interface{},
	DeriveKey: interface{},
	Encrypt: interface{},
	Generate: interface{},
	NoRestrictions: interface{},
	Sign: interface{},
	Unwrap: interface{},
	Verify: interface{},
	Wrap: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse.property.decrypt">Decrypt</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/paymentcryptography_key#decrypt PaymentcryptographyKey#decrypt}. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse.property.deriveKey">DeriveKey</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/paymentcryptography_key#derive_key PaymentcryptographyKey#derive_key}. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse.property.encrypt">Encrypt</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/paymentcryptography_key#encrypt PaymentcryptographyKey#encrypt}. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse.property.generate">Generate</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/paymentcryptography_key#generate PaymentcryptographyKey#generate}. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse.property.noRestrictions">NoRestrictions</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/paymentcryptography_key#no_restrictions PaymentcryptographyKey#no_restrictions}. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse.property.sign">Sign</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/paymentcryptography_key#sign PaymentcryptographyKey#sign}. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse.property.unwrap">Unwrap</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/paymentcryptography_key#unwrap PaymentcryptographyKey#unwrap}. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse.property.verify">Verify</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/paymentcryptography_key#verify PaymentcryptographyKey#verify}. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse.property.wrap">Wrap</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/paymentcryptography_key#wrap PaymentcryptographyKey#wrap}. |

---

##### `Decrypt`<sup>Optional</sup> <a name="Decrypt" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse.property.decrypt"></a>

```go
Decrypt interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/paymentcryptography_key#decrypt PaymentcryptographyKey#decrypt}.

---

##### `DeriveKey`<sup>Optional</sup> <a name="DeriveKey" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse.property.deriveKey"></a>

```go
DeriveKey interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/paymentcryptography_key#derive_key PaymentcryptographyKey#derive_key}.

---

##### `Encrypt`<sup>Optional</sup> <a name="Encrypt" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse.property.encrypt"></a>

```go
Encrypt interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/paymentcryptography_key#encrypt PaymentcryptographyKey#encrypt}.

---

##### `Generate`<sup>Optional</sup> <a name="Generate" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse.property.generate"></a>

```go
Generate interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/paymentcryptography_key#generate PaymentcryptographyKey#generate}.

---

##### `NoRestrictions`<sup>Optional</sup> <a name="NoRestrictions" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse.property.noRestrictions"></a>

```go
NoRestrictions interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/paymentcryptography_key#no_restrictions PaymentcryptographyKey#no_restrictions}.

---

##### `Sign`<sup>Optional</sup> <a name="Sign" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse.property.sign"></a>

```go
Sign interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/paymentcryptography_key#sign PaymentcryptographyKey#sign}.

---

##### `Unwrap`<sup>Optional</sup> <a name="Unwrap" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse.property.unwrap"></a>

```go
Unwrap interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/paymentcryptography_key#unwrap PaymentcryptographyKey#unwrap}.

---

##### `Verify`<sup>Optional</sup> <a name="Verify" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse.property.verify"></a>

```go
Verify interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/paymentcryptography_key#verify PaymentcryptographyKey#verify}.

---

##### `Wrap`<sup>Optional</sup> <a name="Wrap" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse.property.wrap"></a>

```go
Wrap interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/paymentcryptography_key#wrap PaymentcryptographyKey#wrap}.

---

### PaymentcryptographyKeyTimeouts <a name="PaymentcryptographyKeyTimeouts" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/paymentcryptographykey"

&paymentcryptographykey.PaymentcryptographyKeyTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeouts.property.create">Create</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeouts.property.update">Update</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/paymentcryptography_key#create PaymentcryptographyKey#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/paymentcryptography_key#delete PaymentcryptographyKey#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/paymentcryptography_key#update PaymentcryptographyKey#update}

---

## Classes <a name="Classes" id="Classes"></a>

### PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference <a name="PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/paymentcryptographykey"

paymentcryptographykey.NewPaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resetDecrypt">ResetDecrypt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resetDeriveKey">ResetDeriveKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resetEncrypt">ResetEncrypt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resetGenerate">ResetGenerate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resetNoRestrictions">ResetNoRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resetSign">ResetSign</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resetUnwrap">ResetUnwrap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resetVerify">ResetVerify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resetWrap">ResetWrap</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDecrypt` <a name="ResetDecrypt" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resetDecrypt"></a>

```go
func ResetDecrypt()
```

##### `ResetDeriveKey` <a name="ResetDeriveKey" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resetDeriveKey"></a>

```go
func ResetDeriveKey()
```

##### `ResetEncrypt` <a name="ResetEncrypt" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resetEncrypt"></a>

```go
func ResetEncrypt()
```

##### `ResetGenerate` <a name="ResetGenerate" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resetGenerate"></a>

```go
func ResetGenerate()
```

##### `ResetNoRestrictions` <a name="ResetNoRestrictions" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resetNoRestrictions"></a>

```go
func ResetNoRestrictions()
```

##### `ResetSign` <a name="ResetSign" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resetSign"></a>

```go
func ResetSign()
```

##### `ResetUnwrap` <a name="ResetUnwrap" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resetUnwrap"></a>

```go
func ResetUnwrap()
```

##### `ResetVerify` <a name="ResetVerify" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resetVerify"></a>

```go
func ResetVerify()
```

##### `ResetWrap` <a name="ResetWrap" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resetWrap"></a>

```go
func ResetWrap()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.decryptInput">DecryptInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.deriveKeyInput">DeriveKeyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.encryptInput">EncryptInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.generateInput">GenerateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.noRestrictionsInput">NoRestrictionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.signInput">SignInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.unwrapInput">UnwrapInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.verifyInput">VerifyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.wrapInput">WrapInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.decrypt">Decrypt</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.deriveKey">DeriveKey</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.encrypt">Encrypt</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.generate">Generate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.noRestrictions">NoRestrictions</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.sign">Sign</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.unwrap">Unwrap</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.verify">Verify</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.wrap">Wrap</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DecryptInput`<sup>Optional</sup> <a name="DecryptInput" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.decryptInput"></a>

```go
func DecryptInput() interface{}
```

- *Type:* interface{}

---

##### `DeriveKeyInput`<sup>Optional</sup> <a name="DeriveKeyInput" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.deriveKeyInput"></a>

```go
func DeriveKeyInput() interface{}
```

- *Type:* interface{}

---

##### `EncryptInput`<sup>Optional</sup> <a name="EncryptInput" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.encryptInput"></a>

```go
func EncryptInput() interface{}
```

- *Type:* interface{}

---

##### `GenerateInput`<sup>Optional</sup> <a name="GenerateInput" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.generateInput"></a>

```go
func GenerateInput() interface{}
```

- *Type:* interface{}

---

##### `NoRestrictionsInput`<sup>Optional</sup> <a name="NoRestrictionsInput" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.noRestrictionsInput"></a>

```go
func NoRestrictionsInput() interface{}
```

- *Type:* interface{}

---

##### `SignInput`<sup>Optional</sup> <a name="SignInput" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.signInput"></a>

```go
func SignInput() interface{}
```

- *Type:* interface{}

---

##### `UnwrapInput`<sup>Optional</sup> <a name="UnwrapInput" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.unwrapInput"></a>

```go
func UnwrapInput() interface{}
```

- *Type:* interface{}

---

##### `VerifyInput`<sup>Optional</sup> <a name="VerifyInput" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.verifyInput"></a>

```go
func VerifyInput() interface{}
```

- *Type:* interface{}

---

##### `WrapInput`<sup>Optional</sup> <a name="WrapInput" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.wrapInput"></a>

```go
func WrapInput() interface{}
```

- *Type:* interface{}

---

##### `Decrypt`<sup>Required</sup> <a name="Decrypt" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.decrypt"></a>

```go
func Decrypt() interface{}
```

- *Type:* interface{}

---

##### `DeriveKey`<sup>Required</sup> <a name="DeriveKey" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.deriveKey"></a>

```go
func DeriveKey() interface{}
```

- *Type:* interface{}

---

##### `Encrypt`<sup>Required</sup> <a name="Encrypt" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.encrypt"></a>

```go
func Encrypt() interface{}
```

- *Type:* interface{}

---

##### `Generate`<sup>Required</sup> <a name="Generate" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.generate"></a>

```go
func Generate() interface{}
```

- *Type:* interface{}

---

##### `NoRestrictions`<sup>Required</sup> <a name="NoRestrictions" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.noRestrictions"></a>

```go
func NoRestrictions() interface{}
```

- *Type:* interface{}

---

##### `Sign`<sup>Required</sup> <a name="Sign" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.sign"></a>

```go
func Sign() interface{}
```

- *Type:* interface{}

---

##### `Unwrap`<sup>Required</sup> <a name="Unwrap" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.unwrap"></a>

```go
func Unwrap() interface{}
```

- *Type:* interface{}

---

##### `Verify`<sup>Required</sup> <a name="Verify" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.verify"></a>

```go
func Verify() interface{}
```

- *Type:* interface{}

---

##### `Wrap`<sup>Required</sup> <a name="Wrap" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.wrap"></a>

```go
func Wrap() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PaymentcryptographyKeyKeyAttributesOutputReference <a name="PaymentcryptographyKeyKeyAttributesOutputReference" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/paymentcryptographykey"

paymentcryptographykey.NewPaymentcryptographyKeyKeyAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PaymentcryptographyKeyKeyAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.putKeyModesOfUse">PutKeyModesOfUse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.resetKeyModesOfUse">ResetKeyModesOfUse</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutKeyModesOfUse` <a name="PutKeyModesOfUse" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.putKeyModesOfUse"></a>

```go
func PutKeyModesOfUse(value PaymentcryptographyKeyKeyAttributesKeyModesOfUse)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.putKeyModesOfUse.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse">PaymentcryptographyKeyKeyAttributesKeyModesOfUse</a>

---

##### `ResetKeyModesOfUse` <a name="ResetKeyModesOfUse" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.resetKeyModesOfUse"></a>

```go
func ResetKeyModesOfUse()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.keyModesOfUse">KeyModesOfUse</a></code> | <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference">PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.keyAlgorithmInput">KeyAlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.keyClassInput">KeyClassInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.keyModesOfUseInput">KeyModesOfUseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.keyUsageInput">KeyUsageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.keyAlgorithm">KeyAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.keyClass">KeyClass</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.keyUsage">KeyUsage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyModesOfUse`<sup>Required</sup> <a name="KeyModesOfUse" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.keyModesOfUse"></a>

```go
func KeyModesOfUse() PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference">PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference</a>

---

##### `KeyAlgorithmInput`<sup>Optional</sup> <a name="KeyAlgorithmInput" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.keyAlgorithmInput"></a>

```go
func KeyAlgorithmInput() *string
```

- *Type:* *string

---

##### `KeyClassInput`<sup>Optional</sup> <a name="KeyClassInput" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.keyClassInput"></a>

```go
func KeyClassInput() *string
```

- *Type:* *string

---

##### `KeyModesOfUseInput`<sup>Optional</sup> <a name="KeyModesOfUseInput" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.keyModesOfUseInput"></a>

```go
func KeyModesOfUseInput() interface{}
```

- *Type:* interface{}

---

##### `KeyUsageInput`<sup>Optional</sup> <a name="KeyUsageInput" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.keyUsageInput"></a>

```go
func KeyUsageInput() *string
```

- *Type:* *string

---

##### `KeyAlgorithm`<sup>Required</sup> <a name="KeyAlgorithm" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.keyAlgorithm"></a>

```go
func KeyAlgorithm() *string
```

- *Type:* *string

---

##### `KeyClass`<sup>Required</sup> <a name="KeyClass" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.keyClass"></a>

```go
func KeyClass() *string
```

- *Type:* *string

---

##### `KeyUsage`<sup>Required</sup> <a name="KeyUsage" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.keyUsage"></a>

```go
func KeyUsage() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PaymentcryptographyKeyTimeoutsOutputReference <a name="PaymentcryptographyKeyTimeoutsOutputReference" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/paymentcryptographykey"

paymentcryptographykey.NewPaymentcryptographyKeyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PaymentcryptographyKeyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



