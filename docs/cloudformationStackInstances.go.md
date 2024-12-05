# `cloudformationStackInstances` Submodule <a name="`cloudformationStackInstances` Submodule" id="@cdktf/provider-aws.cloudformationStackInstances"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudformationStackInstances <a name="CloudformationStackInstances" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/cloudformation_stack_instances aws_cloudformation_stack_instances}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/cloudformationstackinstances"

cloudformationstackinstances.NewCloudformationStackInstances(scope Construct, id *string, config CloudformationStackInstancesConfig) CloudformationStackInstances
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesConfig">CloudformationStackInstancesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesConfig">CloudformationStackInstancesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.putDeploymentTargets">PutDeploymentTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.putOperationPreferences">PutOperationPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.resetAccounts">ResetAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.resetCallAs">ResetCallAs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.resetDeploymentTargets">ResetDeploymentTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.resetOperationPreferences">ResetOperationPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.resetParameterOverrides">ResetParameterOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.resetRegions">ResetRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.resetRetainStacks">ResetRetainStacks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDeploymentTargets` <a name="PutDeploymentTargets" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.putDeploymentTargets"></a>

```go
func PutDeploymentTargets(value CloudformationStackInstancesDeploymentTargets)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.putDeploymentTargets.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargets">CloudformationStackInstancesDeploymentTargets</a>

---

##### `PutOperationPreferences` <a name="PutOperationPreferences" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.putOperationPreferences"></a>

```go
func PutOperationPreferences(value CloudformationStackInstancesOperationPreferences)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.putOperationPreferences.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferences">CloudformationStackInstancesOperationPreferences</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.putTimeouts"></a>

```go
func PutTimeouts(value CloudformationStackInstancesTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeouts">CloudformationStackInstancesTimeouts</a>

---

##### `ResetAccounts` <a name="ResetAccounts" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.resetAccounts"></a>

```go
func ResetAccounts()
```

##### `ResetCallAs` <a name="ResetCallAs" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.resetCallAs"></a>

```go
func ResetCallAs()
```

##### `ResetDeploymentTargets` <a name="ResetDeploymentTargets" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.resetDeploymentTargets"></a>

```go
func ResetDeploymentTargets()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.resetId"></a>

```go
func ResetId()
```

##### `ResetOperationPreferences` <a name="ResetOperationPreferences" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.resetOperationPreferences"></a>

```go
func ResetOperationPreferences()
```

##### `ResetParameterOverrides` <a name="ResetParameterOverrides" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.resetParameterOverrides"></a>

```go
func ResetParameterOverrides()
```

##### `ResetRegions` <a name="ResetRegions" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.resetRegions"></a>

```go
func ResetRegions()
```

##### `ResetRetainStacks` <a name="ResetRetainStacks" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.resetRetainStacks"></a>

```go
func ResetRetainStacks()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CloudformationStackInstances resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/cloudformationstackinstances"

cloudformationstackinstances.CloudformationStackInstances_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/cloudformationstackinstances"

cloudformationstackinstances.CloudformationStackInstances_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/cloudformationstackinstances"

cloudformationstackinstances.CloudformationStackInstances_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/cloudformationstackinstances"

cloudformationstackinstances.CloudformationStackInstances_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a CloudformationStackInstances resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CloudformationStackInstances to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CloudformationStackInstances that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/cloudformation_stack_instances#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the CloudformationStackInstances to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.deploymentTargets">DeploymentTargets</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference">CloudformationStackInstancesDeploymentTargetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.operationPreferences">OperationPreferences</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference">CloudformationStackInstancesOperationPreferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.stackInstanceSummaries">StackInstanceSummaries</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesList">CloudformationStackInstancesStackInstanceSummariesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.stackSetId">StackSetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference">CloudformationStackInstancesTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.accountsInput">AccountsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.callAsInput">CallAsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.deploymentTargetsInput">DeploymentTargetsInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargets">CloudformationStackInstancesDeploymentTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.operationPreferencesInput">OperationPreferencesInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferences">CloudformationStackInstancesOperationPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.parameterOverridesInput">ParameterOverridesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.regionsInput">RegionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.retainStacksInput">RetainStacksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.stackSetNameInput">StackSetNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.accounts">Accounts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.callAs">CallAs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.parameterOverrides">ParameterOverrides</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.regions">Regions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.retainStacks">RetainStacks</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.stackSetName">StackSetName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DeploymentTargets`<sup>Required</sup> <a name="DeploymentTargets" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.deploymentTargets"></a>

```go
func DeploymentTargets() CloudformationStackInstancesDeploymentTargetsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference">CloudformationStackInstancesDeploymentTargetsOutputReference</a>

---

##### `OperationPreferences`<sup>Required</sup> <a name="OperationPreferences" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.operationPreferences"></a>

```go
func OperationPreferences() CloudformationStackInstancesOperationPreferencesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference">CloudformationStackInstancesOperationPreferencesOutputReference</a>

---

##### `StackInstanceSummaries`<sup>Required</sup> <a name="StackInstanceSummaries" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.stackInstanceSummaries"></a>

```go
func StackInstanceSummaries() CloudformationStackInstancesStackInstanceSummariesList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesList">CloudformationStackInstancesStackInstanceSummariesList</a>

---

##### `StackSetId`<sup>Required</sup> <a name="StackSetId" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.stackSetId"></a>

```go
func StackSetId() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.timeouts"></a>

```go
func Timeouts() CloudformationStackInstancesTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference">CloudformationStackInstancesTimeoutsOutputReference</a>

---

##### `AccountsInput`<sup>Optional</sup> <a name="AccountsInput" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.accountsInput"></a>

```go
func AccountsInput() *[]*string
```

- *Type:* *[]*string

---

##### `CallAsInput`<sup>Optional</sup> <a name="CallAsInput" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.callAsInput"></a>

```go
func CallAsInput() *string
```

- *Type:* *string

---

##### `DeploymentTargetsInput`<sup>Optional</sup> <a name="DeploymentTargetsInput" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.deploymentTargetsInput"></a>

```go
func DeploymentTargetsInput() CloudformationStackInstancesDeploymentTargets
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargets">CloudformationStackInstancesDeploymentTargets</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OperationPreferencesInput`<sup>Optional</sup> <a name="OperationPreferencesInput" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.operationPreferencesInput"></a>

```go
func OperationPreferencesInput() CloudformationStackInstancesOperationPreferences
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferences">CloudformationStackInstancesOperationPreferences</a>

---

##### `ParameterOverridesInput`<sup>Optional</sup> <a name="ParameterOverridesInput" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.parameterOverridesInput"></a>

```go
func ParameterOverridesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `RegionsInput`<sup>Optional</sup> <a name="RegionsInput" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.regionsInput"></a>

```go
func RegionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `RetainStacksInput`<sup>Optional</sup> <a name="RetainStacksInput" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.retainStacksInput"></a>

```go
func RetainStacksInput() interface{}
```

- *Type:* interface{}

---

##### `StackSetNameInput`<sup>Optional</sup> <a name="StackSetNameInput" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.stackSetNameInput"></a>

```go
func StackSetNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Accounts`<sup>Required</sup> <a name="Accounts" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.accounts"></a>

```go
func Accounts() *[]*string
```

- *Type:* *[]*string

---

##### `CallAs`<sup>Required</sup> <a name="CallAs" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.callAs"></a>

```go
func CallAs() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ParameterOverrides`<sup>Required</sup> <a name="ParameterOverrides" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.parameterOverrides"></a>

```go
func ParameterOverrides() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.regions"></a>

```go
func Regions() *[]*string
```

- *Type:* *[]*string

---

##### `RetainStacks`<sup>Required</sup> <a name="RetainStacks" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.retainStacks"></a>

```go
func RetainStacks() interface{}
```

- *Type:* interface{}

---

##### `StackSetName`<sup>Required</sup> <a name="StackSetName" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.stackSetName"></a>

```go
func StackSetName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstances.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudformationStackInstancesConfig <a name="CloudformationStackInstancesConfig" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/cloudformationstackinstances"

&cloudformationstackinstances.CloudformationStackInstancesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	StackSetName: *string,
	Accounts: *[]*string,
	CallAs: *string,
	DeploymentTargets: github.com/cdktf/cdktf-provider-aws-go/aws/v19.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargets,
	Id: *string,
	OperationPreferences: github.com/cdktf/cdktf-provider-aws-go/aws/v19.cloudformationStackInstances.CloudformationStackInstancesOperationPreferences,
	ParameterOverrides: *map[string]*string,
	Regions: *[]*string,
	RetainStacks: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws/v19.cloudformationStackInstances.CloudformationStackInstancesTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesConfig.property.stackSetName">StackSetName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/cloudformation_stack_instances#stack_set_name CloudformationStackInstances#stack_set_name}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesConfig.property.accounts">Accounts</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/cloudformation_stack_instances#accounts CloudformationStackInstances#accounts}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesConfig.property.callAs">CallAs</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/cloudformation_stack_instances#call_as CloudformationStackInstances#call_as}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesConfig.property.deploymentTargets">DeploymentTargets</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargets">CloudformationStackInstancesDeploymentTargets</a></code> | deployment_targets block. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/cloudformation_stack_instances#id CloudformationStackInstances#id}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesConfig.property.operationPreferences">OperationPreferences</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferences">CloudformationStackInstancesOperationPreferences</a></code> | operation_preferences block. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesConfig.property.parameterOverrides">ParameterOverrides</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/cloudformation_stack_instances#parameter_overrides CloudformationStackInstances#parameter_overrides}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesConfig.property.regions">Regions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/cloudformation_stack_instances#regions CloudformationStackInstances#regions}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesConfig.property.retainStacks">RetainStacks</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/cloudformation_stack_instances#retain_stacks CloudformationStackInstances#retain_stacks}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeouts">CloudformationStackInstancesTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `StackSetName`<sup>Required</sup> <a name="StackSetName" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesConfig.property.stackSetName"></a>

```go
StackSetName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/cloudformation_stack_instances#stack_set_name CloudformationStackInstances#stack_set_name}.

---

##### `Accounts`<sup>Optional</sup> <a name="Accounts" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesConfig.property.accounts"></a>

```go
Accounts *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/cloudformation_stack_instances#accounts CloudformationStackInstances#accounts}.

---

##### `CallAs`<sup>Optional</sup> <a name="CallAs" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesConfig.property.callAs"></a>

```go
CallAs *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/cloudformation_stack_instances#call_as CloudformationStackInstances#call_as}.

---

##### `DeploymentTargets`<sup>Optional</sup> <a name="DeploymentTargets" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesConfig.property.deploymentTargets"></a>

```go
DeploymentTargets CloudformationStackInstancesDeploymentTargets
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargets">CloudformationStackInstancesDeploymentTargets</a>

deployment_targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/cloudformation_stack_instances#deployment_targets CloudformationStackInstances#deployment_targets}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/cloudformation_stack_instances#id CloudformationStackInstances#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OperationPreferences`<sup>Optional</sup> <a name="OperationPreferences" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesConfig.property.operationPreferences"></a>

```go
OperationPreferences CloudformationStackInstancesOperationPreferences
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferences">CloudformationStackInstancesOperationPreferences</a>

operation_preferences block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/cloudformation_stack_instances#operation_preferences CloudformationStackInstances#operation_preferences}

---

##### `ParameterOverrides`<sup>Optional</sup> <a name="ParameterOverrides" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesConfig.property.parameterOverrides"></a>

```go
ParameterOverrides *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/cloudformation_stack_instances#parameter_overrides CloudformationStackInstances#parameter_overrides}.

---

##### `Regions`<sup>Optional</sup> <a name="Regions" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesConfig.property.regions"></a>

```go
Regions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/cloudformation_stack_instances#regions CloudformationStackInstances#regions}.

---

##### `RetainStacks`<sup>Optional</sup> <a name="RetainStacks" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesConfig.property.retainStacks"></a>

```go
RetainStacks interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/cloudformation_stack_instances#retain_stacks CloudformationStackInstances#retain_stacks}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesConfig.property.timeouts"></a>

```go
Timeouts CloudformationStackInstancesTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeouts">CloudformationStackInstancesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/cloudformation_stack_instances#timeouts CloudformationStackInstances#timeouts}

---

### CloudformationStackInstancesDeploymentTargets <a name="CloudformationStackInstancesDeploymentTargets" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargets.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/cloudformationstackinstances"

&cloudformationstackinstances.CloudformationStackInstancesDeploymentTargets {
	AccountFilterType: *string,
	Accounts: *[]*string,
	AccountsUrl: *string,
	OrganizationalUnitIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargets.property.accountFilterType">AccountFilterType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/cloudformation_stack_instances#account_filter_type CloudformationStackInstances#account_filter_type}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargets.property.accounts">Accounts</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/cloudformation_stack_instances#accounts CloudformationStackInstances#accounts}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargets.property.accountsUrl">AccountsUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/cloudformation_stack_instances#accounts_url CloudformationStackInstances#accounts_url}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargets.property.organizationalUnitIds">OrganizationalUnitIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/cloudformation_stack_instances#organizational_unit_ids CloudformationStackInstances#organizational_unit_ids}. |

---

##### `AccountFilterType`<sup>Optional</sup> <a name="AccountFilterType" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargets.property.accountFilterType"></a>

```go
AccountFilterType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/cloudformation_stack_instances#account_filter_type CloudformationStackInstances#account_filter_type}.

---

##### `Accounts`<sup>Optional</sup> <a name="Accounts" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargets.property.accounts"></a>

```go
Accounts *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/cloudformation_stack_instances#accounts CloudformationStackInstances#accounts}.

---

##### `AccountsUrl`<sup>Optional</sup> <a name="AccountsUrl" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargets.property.accountsUrl"></a>

```go
AccountsUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/cloudformation_stack_instances#accounts_url CloudformationStackInstances#accounts_url}.

---

##### `OrganizationalUnitIds`<sup>Optional</sup> <a name="OrganizationalUnitIds" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargets.property.organizationalUnitIds"></a>

```go
OrganizationalUnitIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/cloudformation_stack_instances#organizational_unit_ids CloudformationStackInstances#organizational_unit_ids}.

---

### CloudformationStackInstancesOperationPreferences <a name="CloudformationStackInstancesOperationPreferences" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferences.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/cloudformationstackinstances"

&cloudformationstackinstances.CloudformationStackInstancesOperationPreferences {
	ConcurrencyMode: *string,
	FailureToleranceCount: *f64,
	FailureTolerancePercentage: *f64,
	MaxConcurrentCount: *f64,
	MaxConcurrentPercentage: *f64,
	RegionConcurrencyType: *string,
	RegionOrder: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferences.property.concurrencyMode">ConcurrencyMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/cloudformation_stack_instances#concurrency_mode CloudformationStackInstances#concurrency_mode}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferences.property.failureToleranceCount">FailureToleranceCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/cloudformation_stack_instances#failure_tolerance_count CloudformationStackInstances#failure_tolerance_count}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferences.property.failureTolerancePercentage">FailureTolerancePercentage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/cloudformation_stack_instances#failure_tolerance_percentage CloudformationStackInstances#failure_tolerance_percentage}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferences.property.maxConcurrentCount">MaxConcurrentCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/cloudformation_stack_instances#max_concurrent_count CloudformationStackInstances#max_concurrent_count}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferences.property.maxConcurrentPercentage">MaxConcurrentPercentage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/cloudformation_stack_instances#max_concurrent_percentage CloudformationStackInstances#max_concurrent_percentage}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferences.property.regionConcurrencyType">RegionConcurrencyType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/cloudformation_stack_instances#region_concurrency_type CloudformationStackInstances#region_concurrency_type}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferences.property.regionOrder">RegionOrder</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/cloudformation_stack_instances#region_order CloudformationStackInstances#region_order}. |

---

##### `ConcurrencyMode`<sup>Optional</sup> <a name="ConcurrencyMode" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferences.property.concurrencyMode"></a>

```go
ConcurrencyMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/cloudformation_stack_instances#concurrency_mode CloudformationStackInstances#concurrency_mode}.

---

##### `FailureToleranceCount`<sup>Optional</sup> <a name="FailureToleranceCount" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferences.property.failureToleranceCount"></a>

```go
FailureToleranceCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/cloudformation_stack_instances#failure_tolerance_count CloudformationStackInstances#failure_tolerance_count}.

---

##### `FailureTolerancePercentage`<sup>Optional</sup> <a name="FailureTolerancePercentage" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferences.property.failureTolerancePercentage"></a>

```go
FailureTolerancePercentage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/cloudformation_stack_instances#failure_tolerance_percentage CloudformationStackInstances#failure_tolerance_percentage}.

---

##### `MaxConcurrentCount`<sup>Optional</sup> <a name="MaxConcurrentCount" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferences.property.maxConcurrentCount"></a>

```go
MaxConcurrentCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/cloudformation_stack_instances#max_concurrent_count CloudformationStackInstances#max_concurrent_count}.

---

##### `MaxConcurrentPercentage`<sup>Optional</sup> <a name="MaxConcurrentPercentage" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferences.property.maxConcurrentPercentage"></a>

```go
MaxConcurrentPercentage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/cloudformation_stack_instances#max_concurrent_percentage CloudformationStackInstances#max_concurrent_percentage}.

---

##### `RegionConcurrencyType`<sup>Optional</sup> <a name="RegionConcurrencyType" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferences.property.regionConcurrencyType"></a>

```go
RegionConcurrencyType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/cloudformation_stack_instances#region_concurrency_type CloudformationStackInstances#region_concurrency_type}.

---

##### `RegionOrder`<sup>Optional</sup> <a name="RegionOrder" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferences.property.regionOrder"></a>

```go
RegionOrder *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/cloudformation_stack_instances#region_order CloudformationStackInstances#region_order}.

---

### CloudformationStackInstancesStackInstanceSummaries <a name="CloudformationStackInstancesStackInstanceSummaries" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummaries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummaries.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/cloudformationstackinstances"

&cloudformationstackinstances.CloudformationStackInstancesStackInstanceSummaries {

}
```


### CloudformationStackInstancesTimeouts <a name="CloudformationStackInstancesTimeouts" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/cloudformationstackinstances"

&cloudformationstackinstances.CloudformationStackInstancesTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/cloudformation_stack_instances#create CloudformationStackInstances#create}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/cloudformation_stack_instances#delete CloudformationStackInstances#delete}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/cloudformation_stack_instances#update CloudformationStackInstances#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/cloudformation_stack_instances#create CloudformationStackInstances#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/cloudformation_stack_instances#delete CloudformationStackInstances#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/cloudformation_stack_instances#update CloudformationStackInstances#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudformationStackInstancesDeploymentTargetsOutputReference <a name="CloudformationStackInstancesDeploymentTargetsOutputReference" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/cloudformationstackinstances"

cloudformationstackinstances.NewCloudformationStackInstancesDeploymentTargetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudformationStackInstancesDeploymentTargetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.resetAccountFilterType">ResetAccountFilterType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.resetAccounts">ResetAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.resetAccountsUrl">ResetAccountsUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.resetOrganizationalUnitIds">ResetOrganizationalUnitIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccountFilterType` <a name="ResetAccountFilterType" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.resetAccountFilterType"></a>

```go
func ResetAccountFilterType()
```

##### `ResetAccounts` <a name="ResetAccounts" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.resetAccounts"></a>

```go
func ResetAccounts()
```

##### `ResetAccountsUrl` <a name="ResetAccountsUrl" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.resetAccountsUrl"></a>

```go
func ResetAccountsUrl()
```

##### `ResetOrganizationalUnitIds` <a name="ResetOrganizationalUnitIds" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.resetOrganizationalUnitIds"></a>

```go
func ResetOrganizationalUnitIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.property.accountFilterTypeInput">AccountFilterTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.property.accountsInput">AccountsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.property.accountsUrlInput">AccountsUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.property.organizationalUnitIdsInput">OrganizationalUnitIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.property.accountFilterType">AccountFilterType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.property.accounts">Accounts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.property.accountsUrl">AccountsUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.property.organizationalUnitIds">OrganizationalUnitIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargets">CloudformationStackInstancesDeploymentTargets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountFilterTypeInput`<sup>Optional</sup> <a name="AccountFilterTypeInput" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.property.accountFilterTypeInput"></a>

```go
func AccountFilterTypeInput() *string
```

- *Type:* *string

---

##### `AccountsInput`<sup>Optional</sup> <a name="AccountsInput" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.property.accountsInput"></a>

```go
func AccountsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AccountsUrlInput`<sup>Optional</sup> <a name="AccountsUrlInput" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.property.accountsUrlInput"></a>

```go
func AccountsUrlInput() *string
```

- *Type:* *string

---

##### `OrganizationalUnitIdsInput`<sup>Optional</sup> <a name="OrganizationalUnitIdsInput" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.property.organizationalUnitIdsInput"></a>

```go
func OrganizationalUnitIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AccountFilterType`<sup>Required</sup> <a name="AccountFilterType" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.property.accountFilterType"></a>

```go
func AccountFilterType() *string
```

- *Type:* *string

---

##### `Accounts`<sup>Required</sup> <a name="Accounts" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.property.accounts"></a>

```go
func Accounts() *[]*string
```

- *Type:* *[]*string

---

##### `AccountsUrl`<sup>Required</sup> <a name="AccountsUrl" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.property.accountsUrl"></a>

```go
func AccountsUrl() *string
```

- *Type:* *string

---

##### `OrganizationalUnitIds`<sup>Required</sup> <a name="OrganizationalUnitIds" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.property.organizationalUnitIds"></a>

```go
func OrganizationalUnitIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargetsOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudformationStackInstancesDeploymentTargets
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesDeploymentTargets">CloudformationStackInstancesDeploymentTargets</a>

---


### CloudformationStackInstancesOperationPreferencesOutputReference <a name="CloudformationStackInstancesOperationPreferencesOutputReference" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/cloudformationstackinstances"

cloudformationstackinstances.NewCloudformationStackInstancesOperationPreferencesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudformationStackInstancesOperationPreferencesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.resetConcurrencyMode">ResetConcurrencyMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.resetFailureToleranceCount">ResetFailureToleranceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.resetFailureTolerancePercentage">ResetFailureTolerancePercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.resetMaxConcurrentCount">ResetMaxConcurrentCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.resetMaxConcurrentPercentage">ResetMaxConcurrentPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.resetRegionConcurrencyType">ResetRegionConcurrencyType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.resetRegionOrder">ResetRegionOrder</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConcurrencyMode` <a name="ResetConcurrencyMode" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.resetConcurrencyMode"></a>

```go
func ResetConcurrencyMode()
```

##### `ResetFailureToleranceCount` <a name="ResetFailureToleranceCount" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.resetFailureToleranceCount"></a>

```go
func ResetFailureToleranceCount()
```

##### `ResetFailureTolerancePercentage` <a name="ResetFailureTolerancePercentage" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.resetFailureTolerancePercentage"></a>

```go
func ResetFailureTolerancePercentage()
```

##### `ResetMaxConcurrentCount` <a name="ResetMaxConcurrentCount" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.resetMaxConcurrentCount"></a>

```go
func ResetMaxConcurrentCount()
```

##### `ResetMaxConcurrentPercentage` <a name="ResetMaxConcurrentPercentage" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.resetMaxConcurrentPercentage"></a>

```go
func ResetMaxConcurrentPercentage()
```

##### `ResetRegionConcurrencyType` <a name="ResetRegionConcurrencyType" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.resetRegionConcurrencyType"></a>

```go
func ResetRegionConcurrencyType()
```

##### `ResetRegionOrder` <a name="ResetRegionOrder" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.resetRegionOrder"></a>

```go
func ResetRegionOrder()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.property.concurrencyModeInput">ConcurrencyModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.property.failureToleranceCountInput">FailureToleranceCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.property.failureTolerancePercentageInput">FailureTolerancePercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.property.maxConcurrentCountInput">MaxConcurrentCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.property.maxConcurrentPercentageInput">MaxConcurrentPercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.property.regionConcurrencyTypeInput">RegionConcurrencyTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.property.regionOrderInput">RegionOrderInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.property.concurrencyMode">ConcurrencyMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.property.failureToleranceCount">FailureToleranceCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.property.failureTolerancePercentage">FailureTolerancePercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.property.maxConcurrentCount">MaxConcurrentCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.property.maxConcurrentPercentage">MaxConcurrentPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.property.regionConcurrencyType">RegionConcurrencyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.property.regionOrder">RegionOrder</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferences">CloudformationStackInstancesOperationPreferences</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConcurrencyModeInput`<sup>Optional</sup> <a name="ConcurrencyModeInput" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.property.concurrencyModeInput"></a>

```go
func ConcurrencyModeInput() *string
```

- *Type:* *string

---

##### `FailureToleranceCountInput`<sup>Optional</sup> <a name="FailureToleranceCountInput" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.property.failureToleranceCountInput"></a>

```go
func FailureToleranceCountInput() *f64
```

- *Type:* *f64

---

##### `FailureTolerancePercentageInput`<sup>Optional</sup> <a name="FailureTolerancePercentageInput" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.property.failureTolerancePercentageInput"></a>

```go
func FailureTolerancePercentageInput() *f64
```

- *Type:* *f64

---

##### `MaxConcurrentCountInput`<sup>Optional</sup> <a name="MaxConcurrentCountInput" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.property.maxConcurrentCountInput"></a>

```go
func MaxConcurrentCountInput() *f64
```

- *Type:* *f64

---

##### `MaxConcurrentPercentageInput`<sup>Optional</sup> <a name="MaxConcurrentPercentageInput" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.property.maxConcurrentPercentageInput"></a>

```go
func MaxConcurrentPercentageInput() *f64
```

- *Type:* *f64

---

##### `RegionConcurrencyTypeInput`<sup>Optional</sup> <a name="RegionConcurrencyTypeInput" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.property.regionConcurrencyTypeInput"></a>

```go
func RegionConcurrencyTypeInput() *string
```

- *Type:* *string

---

##### `RegionOrderInput`<sup>Optional</sup> <a name="RegionOrderInput" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.property.regionOrderInput"></a>

```go
func RegionOrderInput() *[]*string
```

- *Type:* *[]*string

---

##### `ConcurrencyMode`<sup>Required</sup> <a name="ConcurrencyMode" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.property.concurrencyMode"></a>

```go
func ConcurrencyMode() *string
```

- *Type:* *string

---

##### `FailureToleranceCount`<sup>Required</sup> <a name="FailureToleranceCount" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.property.failureToleranceCount"></a>

```go
func FailureToleranceCount() *f64
```

- *Type:* *f64

---

##### `FailureTolerancePercentage`<sup>Required</sup> <a name="FailureTolerancePercentage" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.property.failureTolerancePercentage"></a>

```go
func FailureTolerancePercentage() *f64
```

- *Type:* *f64

---

##### `MaxConcurrentCount`<sup>Required</sup> <a name="MaxConcurrentCount" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.property.maxConcurrentCount"></a>

```go
func MaxConcurrentCount() *f64
```

- *Type:* *f64

---

##### `MaxConcurrentPercentage`<sup>Required</sup> <a name="MaxConcurrentPercentage" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.property.maxConcurrentPercentage"></a>

```go
func MaxConcurrentPercentage() *f64
```

- *Type:* *f64

---

##### `RegionConcurrencyType`<sup>Required</sup> <a name="RegionConcurrencyType" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.property.regionConcurrencyType"></a>

```go
func RegionConcurrencyType() *string
```

- *Type:* *string

---

##### `RegionOrder`<sup>Required</sup> <a name="RegionOrder" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.property.regionOrder"></a>

```go
func RegionOrder() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferencesOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudformationStackInstancesOperationPreferences
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesOperationPreferences">CloudformationStackInstancesOperationPreferences</a>

---


### CloudformationStackInstancesStackInstanceSummariesList <a name="CloudformationStackInstancesStackInstanceSummariesList" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/cloudformationstackinstances"

cloudformationstackinstances.NewCloudformationStackInstancesStackInstanceSummariesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudformationStackInstancesStackInstanceSummariesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesList.get"></a>

```go
func Get(index *f64) CloudformationStackInstancesStackInstanceSummariesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### CloudformationStackInstancesStackInstanceSummariesOutputReference <a name="CloudformationStackInstancesStackInstanceSummariesOutputReference" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/cloudformationstackinstances"

cloudformationstackinstances.NewCloudformationStackInstancesStackInstanceSummariesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudformationStackInstancesStackInstanceSummariesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.property.detailedStatus">DetailedStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.property.driftStatus">DriftStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.property.organizationalUnitId">OrganizationalUnitId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.property.stackId">StackId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.property.stackSetId">StackSetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.property.statusReason">StatusReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummaries">CloudformationStackInstancesStackInstanceSummaries</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `DetailedStatus`<sup>Required</sup> <a name="DetailedStatus" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.property.detailedStatus"></a>

```go
func DetailedStatus() *string
```

- *Type:* *string

---

##### `DriftStatus`<sup>Required</sup> <a name="DriftStatus" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.property.driftStatus"></a>

```go
func DriftStatus() *string
```

- *Type:* *string

---

##### `OrganizationalUnitId`<sup>Required</sup> <a name="OrganizationalUnitId" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.property.organizationalUnitId"></a>

```go
func OrganizationalUnitId() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `StackId`<sup>Required</sup> <a name="StackId" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.property.stackId"></a>

```go
func StackId() *string
```

- *Type:* *string

---

##### `StackSetId`<sup>Required</sup> <a name="StackSetId" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.property.stackSetId"></a>

```go
func StackSetId() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StatusReason`<sup>Required</sup> <a name="StatusReason" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.property.statusReason"></a>

```go
func StatusReason() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummariesOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudformationStackInstancesStackInstanceSummaries
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesStackInstanceSummaries">CloudformationStackInstancesStackInstanceSummaries</a>

---


### CloudformationStackInstancesTimeoutsOutputReference <a name="CloudformationStackInstancesTimeoutsOutputReference" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/cloudformationstackinstances"

cloudformationstackinstances.NewCloudformationStackInstancesTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudformationStackInstancesTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudformationStackInstances.CloudformationStackInstancesTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



