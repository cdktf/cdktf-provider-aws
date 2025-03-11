# `ec2CapacityBlockReservation` Submodule <a name="`ec2CapacityBlockReservation` Submodule" id="@cdktf/provider-aws.ec2CapacityBlockReservation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2CapacityBlockReservation <a name="Ec2CapacityBlockReservation" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/ec2_capacity_block_reservation aws_ec2_capacity_block_reservation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/ec2capacityblockreservation"

ec2capacityblockreservation.NewEc2CapacityBlockReservation(scope Construct, id *string, config Ec2CapacityBlockReservationConfig) Ec2CapacityBlockReservation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationConfig">Ec2CapacityBlockReservationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationConfig">Ec2CapacityBlockReservationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.putTimeouts"></a>

```go
func PutTimeouts(value Ec2CapacityBlockReservationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeouts">Ec2CapacityBlockReservationTimeouts</a>

---

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Ec2CapacityBlockReservation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/ec2capacityblockreservation"

ec2capacityblockreservation.Ec2CapacityBlockReservation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/ec2capacityblockreservation"

ec2capacityblockreservation.Ec2CapacityBlockReservation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/ec2capacityblockreservation"

ec2capacityblockreservation.Ec2CapacityBlockReservation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/ec2capacityblockreservation"

ec2capacityblockreservation.Ec2CapacityBlockReservation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a Ec2CapacityBlockReservation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Ec2CapacityBlockReservation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Ec2CapacityBlockReservation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/ec2_capacity_block_reservation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the Ec2CapacityBlockReservation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.createdDate">CreatedDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.ebsOptimized">EbsOptimized</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.endDate">EndDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.endDateType">EndDateType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.instanceCount">InstanceCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.instanceType">InstanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.outpostArn">OutpostArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.placementGroupArn">PlacementGroupArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.reservationType">ReservationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.startDate">StartDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.tagsAll">TagsAll</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.tenancy">Tenancy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference">Ec2CapacityBlockReservationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.capacityBlockOfferingIdInput">CapacityBlockOfferingIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.instancePlatformInput">InstancePlatformInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.capacityBlockOfferingId">CapacityBlockOfferingId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.instancePlatform">InstancePlatform</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.availabilityZone"></a>

```go
func AvailabilityZone() *string
```

- *Type:* *string

---

##### `CreatedDate`<sup>Required</sup> <a name="CreatedDate" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.createdDate"></a>

```go
func CreatedDate() *string
```

- *Type:* *string

---

##### `EbsOptimized`<sup>Required</sup> <a name="EbsOptimized" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.ebsOptimized"></a>

```go
func EbsOptimized() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `EndDate`<sup>Required</sup> <a name="EndDate" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.endDate"></a>

```go
func EndDate() *string
```

- *Type:* *string

---

##### `EndDateType`<sup>Required</sup> <a name="EndDateType" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.endDateType"></a>

```go
func EndDateType() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstanceCount`<sup>Required</sup> <a name="InstanceCount" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.instanceCount"></a>

```go
func InstanceCount() *f64
```

- *Type:* *f64

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.instanceType"></a>

```go
func InstanceType() *string
```

- *Type:* *string

---

##### `OutpostArn`<sup>Required</sup> <a name="OutpostArn" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.outpostArn"></a>

```go
func OutpostArn() *string
```

- *Type:* *string

---

##### `PlacementGroupArn`<sup>Required</sup> <a name="PlacementGroupArn" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.placementGroupArn"></a>

```go
func PlacementGroupArn() *string
```

- *Type:* *string

---

##### `ReservationType`<sup>Required</sup> <a name="ReservationType" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.reservationType"></a>

```go
func ReservationType() *string
```

- *Type:* *string

---

##### `StartDate`<sup>Required</sup> <a name="StartDate" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.startDate"></a>

```go
func StartDate() *string
```

- *Type:* *string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.tagsAll"></a>

```go
func TagsAll() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Tenancy`<sup>Required</sup> <a name="Tenancy" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.tenancy"></a>

```go
func Tenancy() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.timeouts"></a>

```go
func Timeouts() Ec2CapacityBlockReservationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference">Ec2CapacityBlockReservationTimeoutsOutputReference</a>

---

##### `CapacityBlockOfferingIdInput`<sup>Optional</sup> <a name="CapacityBlockOfferingIdInput" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.capacityBlockOfferingIdInput"></a>

```go
func CapacityBlockOfferingIdInput() *string
```

- *Type:* *string

---

##### `InstancePlatformInput`<sup>Optional</sup> <a name="InstancePlatformInput" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.instancePlatformInput"></a>

```go
func InstancePlatformInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CapacityBlockOfferingId`<sup>Required</sup> <a name="CapacityBlockOfferingId" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.capacityBlockOfferingId"></a>

```go
func CapacityBlockOfferingId() *string
```

- *Type:* *string

---

##### `InstancePlatform`<sup>Required</sup> <a name="InstancePlatform" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.instancePlatform"></a>

```go
func InstancePlatform() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2CapacityBlockReservationConfig <a name="Ec2CapacityBlockReservationConfig" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/ec2capacityblockreservation"

&ec2capacityblockreservation.Ec2CapacityBlockReservationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CapacityBlockOfferingId: *string,
	InstancePlatform: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws/v19.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationConfig.property.capacityBlockOfferingId">CapacityBlockOfferingId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/ec2_capacity_block_reservation#capacity_block_offering_id Ec2CapacityBlockReservation#capacity_block_offering_id}. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationConfig.property.instancePlatform">InstancePlatform</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/ec2_capacity_block_reservation#instance_platform Ec2CapacityBlockReservation#instance_platform}. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/ec2_capacity_block_reservation#tags Ec2CapacityBlockReservation#tags}. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeouts">Ec2CapacityBlockReservationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CapacityBlockOfferingId`<sup>Required</sup> <a name="CapacityBlockOfferingId" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationConfig.property.capacityBlockOfferingId"></a>

```go
CapacityBlockOfferingId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/ec2_capacity_block_reservation#capacity_block_offering_id Ec2CapacityBlockReservation#capacity_block_offering_id}.

---

##### `InstancePlatform`<sup>Required</sup> <a name="InstancePlatform" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationConfig.property.instancePlatform"></a>

```go
InstancePlatform *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/ec2_capacity_block_reservation#instance_platform Ec2CapacityBlockReservation#instance_platform}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/ec2_capacity_block_reservation#tags Ec2CapacityBlockReservation#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationConfig.property.timeouts"></a>

```go
Timeouts Ec2CapacityBlockReservationTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeouts">Ec2CapacityBlockReservationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/ec2_capacity_block_reservation#timeouts Ec2CapacityBlockReservation#timeouts}

---

### Ec2CapacityBlockReservationTimeouts <a name="Ec2CapacityBlockReservationTimeouts" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/ec2capacityblockreservation"

&ec2capacityblockreservation.Ec2CapacityBlockReservationTimeouts {
	Create: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeouts.property.create">Create</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/ec2_capacity_block_reservation#create Ec2CapacityBlockReservation#create}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2CapacityBlockReservationTimeoutsOutputReference <a name="Ec2CapacityBlockReservationTimeoutsOutputReference" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/ec2capacityblockreservation"

ec2capacityblockreservation.NewEc2CapacityBlockReservationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Ec2CapacityBlockReservationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ec2CapacityBlockReservation.Ec2CapacityBlockReservationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



