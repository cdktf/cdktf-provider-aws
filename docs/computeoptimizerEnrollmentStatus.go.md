# `computeoptimizerEnrollmentStatus` Submodule <a name="`computeoptimizerEnrollmentStatus` Submodule" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeoptimizerEnrollmentStatus <a name="ComputeoptimizerEnrollmentStatus" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.81.0/docs/resources/computeoptimizer_enrollment_status aws_computeoptimizer_enrollment_status}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/computeoptimizerenrollmentstatus"

computeoptimizerenrollmentstatus.NewComputeoptimizerEnrollmentStatus(scope Construct, id *string, config ComputeoptimizerEnrollmentStatusConfig) ComputeoptimizerEnrollmentStatus
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig">ComputeoptimizerEnrollmentStatusConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig">ComputeoptimizerEnrollmentStatusConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.resetIncludeMemberAccounts">ResetIncludeMemberAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.putTimeouts"></a>

```go
func PutTimeouts(value ComputeoptimizerEnrollmentStatusTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeouts">ComputeoptimizerEnrollmentStatusTimeouts</a>

---

##### `ResetIncludeMemberAccounts` <a name="ResetIncludeMemberAccounts" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.resetIncludeMemberAccounts"></a>

```go
func ResetIncludeMemberAccounts()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeoptimizerEnrollmentStatus resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/computeoptimizerenrollmentstatus"

computeoptimizerenrollmentstatus.ComputeoptimizerEnrollmentStatus_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/computeoptimizerenrollmentstatus"

computeoptimizerenrollmentstatus.ComputeoptimizerEnrollmentStatus_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/computeoptimizerenrollmentstatus"

computeoptimizerenrollmentstatus.ComputeoptimizerEnrollmentStatus_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/computeoptimizerenrollmentstatus"

computeoptimizerenrollmentstatus.ComputeoptimizerEnrollmentStatus_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ComputeoptimizerEnrollmentStatus resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ComputeoptimizerEnrollmentStatus to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ComputeoptimizerEnrollmentStatus that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.81.0/docs/resources/computeoptimizer_enrollment_status#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ComputeoptimizerEnrollmentStatus to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.numberOfMemberAccountsOptedIn">NumberOfMemberAccountsOptedIn</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference">ComputeoptimizerEnrollmentStatusTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.includeMemberAccountsInput">IncludeMemberAccountsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.includeMemberAccounts">IncludeMemberAccounts</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.status">Status</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NumberOfMemberAccountsOptedIn`<sup>Required</sup> <a name="NumberOfMemberAccountsOptedIn" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.numberOfMemberAccountsOptedIn"></a>

```go
func NumberOfMemberAccountsOptedIn() *f64
```

- *Type:* *f64

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.timeouts"></a>

```go
func Timeouts() ComputeoptimizerEnrollmentStatusTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference">ComputeoptimizerEnrollmentStatusTimeoutsOutputReference</a>

---

##### `IncludeMemberAccountsInput`<sup>Optional</sup> <a name="IncludeMemberAccountsInput" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.includeMemberAccountsInput"></a>

```go
func IncludeMemberAccountsInput() interface{}
```

- *Type:* interface{}

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `IncludeMemberAccounts`<sup>Required</sup> <a name="IncludeMemberAccounts" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.includeMemberAccounts"></a>

```go
func IncludeMemberAccounts() interface{}
```

- *Type:* interface{}

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeoptimizerEnrollmentStatusConfig <a name="ComputeoptimizerEnrollmentStatusConfig" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/computeoptimizerenrollmentstatus"

&computeoptimizerenrollmentstatus.ComputeoptimizerEnrollmentStatusConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Status: *string,
	IncludeMemberAccounts: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws/v19.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.property.status">Status</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.81.0/docs/resources/computeoptimizer_enrollment_status#status ComputeoptimizerEnrollmentStatus#status}. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.property.includeMemberAccounts">IncludeMemberAccounts</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.81.0/docs/resources/computeoptimizer_enrollment_status#include_member_accounts ComputeoptimizerEnrollmentStatus#include_member_accounts}. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeouts">ComputeoptimizerEnrollmentStatusTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.81.0/docs/resources/computeoptimizer_enrollment_status#status ComputeoptimizerEnrollmentStatus#status}.

---

##### `IncludeMemberAccounts`<sup>Optional</sup> <a name="IncludeMemberAccounts" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.property.includeMemberAccounts"></a>

```go
IncludeMemberAccounts interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.81.0/docs/resources/computeoptimizer_enrollment_status#include_member_accounts ComputeoptimizerEnrollmentStatus#include_member_accounts}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.property.timeouts"></a>

```go
Timeouts ComputeoptimizerEnrollmentStatusTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeouts">ComputeoptimizerEnrollmentStatusTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.81.0/docs/resources/computeoptimizer_enrollment_status#timeouts ComputeoptimizerEnrollmentStatus#timeouts}

---

### ComputeoptimizerEnrollmentStatusTimeouts <a name="ComputeoptimizerEnrollmentStatusTimeouts" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/computeoptimizerenrollmentstatus"

&computeoptimizerenrollmentstatus.ComputeoptimizerEnrollmentStatusTimeouts {
	Create: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeouts.property.create">Create</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeouts.property.update">Update</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.81.0/docs/resources/computeoptimizer_enrollment_status#create ComputeoptimizerEnrollmentStatus#create}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.81.0/docs/resources/computeoptimizer_enrollment_status#update ComputeoptimizerEnrollmentStatus#update}

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeoptimizerEnrollmentStatusTimeoutsOutputReference <a name="ComputeoptimizerEnrollmentStatusTimeoutsOutputReference" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/computeoptimizerenrollmentstatus"

computeoptimizerenrollmentstatus.NewComputeoptimizerEnrollmentStatusTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeoptimizerEnrollmentStatusTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



