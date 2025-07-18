# `batchComputeEnvironment` Submodule <a name="`batchComputeEnvironment` Submodule" id="@cdktf/provider-aws.batchComputeEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BatchComputeEnvironment <a name="BatchComputeEnvironment" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment aws_batch_compute_environment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/batchcomputeenvironment"

batchcomputeenvironment.NewBatchComputeEnvironment(scope Construct, id *string, config BatchComputeEnvironmentConfig) BatchComputeEnvironment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentConfig">BatchComputeEnvironmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentConfig">BatchComputeEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.putComputeResources">PutComputeResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.putEksConfiguration">PutEksConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.putUpdatePolicy">PutUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.resetComputeResources">ResetComputeResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.resetEksConfiguration">ResetEksConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.resetNamePrefix">ResetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.resetServiceRole">ResetServiceRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.resetUpdatePolicy">ResetUpdatePolicy</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutComputeResources` <a name="PutComputeResources" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.putComputeResources"></a>

```go
func PutComputeResources(value BatchComputeEnvironmentComputeResources)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.putComputeResources.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResources">BatchComputeEnvironmentComputeResources</a>

---

##### `PutEksConfiguration` <a name="PutEksConfiguration" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.putEksConfiguration"></a>

```go
func PutEksConfiguration(value BatchComputeEnvironmentEksConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.putEksConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfiguration">BatchComputeEnvironmentEksConfiguration</a>

---

##### `PutUpdatePolicy` <a name="PutUpdatePolicy" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.putUpdatePolicy"></a>

```go
func PutUpdatePolicy(value BatchComputeEnvironmentUpdatePolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.putUpdatePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicy">BatchComputeEnvironmentUpdatePolicy</a>

---

##### `ResetComputeResources` <a name="ResetComputeResources" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.resetComputeResources"></a>

```go
func ResetComputeResources()
```

##### `ResetEksConfiguration` <a name="ResetEksConfiguration" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.resetEksConfiguration"></a>

```go
func ResetEksConfiguration()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.resetName"></a>

```go
func ResetName()
```

##### `ResetNamePrefix` <a name="ResetNamePrefix" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.resetNamePrefix"></a>

```go
func ResetNamePrefix()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetServiceRole` <a name="ResetServiceRole" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.resetServiceRole"></a>

```go
func ResetServiceRole()
```

##### `ResetState` <a name="ResetState" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.resetState"></a>

```go
func ResetState()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetUpdatePolicy` <a name="ResetUpdatePolicy" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.resetUpdatePolicy"></a>

```go
func ResetUpdatePolicy()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BatchComputeEnvironment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/batchcomputeenvironment"

batchcomputeenvironment.BatchComputeEnvironment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/batchcomputeenvironment"

batchcomputeenvironment.BatchComputeEnvironment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/batchcomputeenvironment"

batchcomputeenvironment.BatchComputeEnvironment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/batchcomputeenvironment"

batchcomputeenvironment.BatchComputeEnvironment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a BatchComputeEnvironment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BatchComputeEnvironment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BatchComputeEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the BatchComputeEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.computeResources">ComputeResources</a></code> | <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference">BatchComputeEnvironmentComputeResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.ecsClusterArn">EcsClusterArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.eksConfiguration">EksConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference">BatchComputeEnvironmentEksConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.statusReason">StatusReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.updatePolicy">UpdatePolicy</a></code> | <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference">BatchComputeEnvironmentUpdatePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.computeResourcesInput">ComputeResourcesInput</a></code> | <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResources">BatchComputeEnvironmentComputeResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.eksConfigurationInput">EksConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfiguration">BatchComputeEnvironmentEksConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.namePrefixInput">NamePrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.serviceRoleInput">ServiceRoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.updatePolicyInput">UpdatePolicyInput</a></code> | <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicy">BatchComputeEnvironmentUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.namePrefix">NamePrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.serviceRole">ServiceRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `ComputeResources`<sup>Required</sup> <a name="ComputeResources" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.computeResources"></a>

```go
func ComputeResources() BatchComputeEnvironmentComputeResourcesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference">BatchComputeEnvironmentComputeResourcesOutputReference</a>

---

##### `EcsClusterArn`<sup>Required</sup> <a name="EcsClusterArn" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.ecsClusterArn"></a>

```go
func EcsClusterArn() *string
```

- *Type:* *string

---

##### `EksConfiguration`<sup>Required</sup> <a name="EksConfiguration" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.eksConfiguration"></a>

```go
func EksConfiguration() BatchComputeEnvironmentEksConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference">BatchComputeEnvironmentEksConfigurationOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StatusReason`<sup>Required</sup> <a name="StatusReason" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.statusReason"></a>

```go
func StatusReason() *string
```

- *Type:* *string

---

##### `UpdatePolicy`<sup>Required</sup> <a name="UpdatePolicy" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.updatePolicy"></a>

```go
func UpdatePolicy() BatchComputeEnvironmentUpdatePolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference">BatchComputeEnvironmentUpdatePolicyOutputReference</a>

---

##### `ComputeResourcesInput`<sup>Optional</sup> <a name="ComputeResourcesInput" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.computeResourcesInput"></a>

```go
func ComputeResourcesInput() BatchComputeEnvironmentComputeResources
```

- *Type:* <a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResources">BatchComputeEnvironmentComputeResources</a>

---

##### `EksConfigurationInput`<sup>Optional</sup> <a name="EksConfigurationInput" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.eksConfigurationInput"></a>

```go
func EksConfigurationInput() BatchComputeEnvironmentEksConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfiguration">BatchComputeEnvironmentEksConfiguration</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamePrefixInput`<sup>Optional</sup> <a name="NamePrefixInput" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.namePrefixInput"></a>

```go
func NamePrefixInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ServiceRoleInput`<sup>Optional</sup> <a name="ServiceRoleInput" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.serviceRoleInput"></a>

```go
func ServiceRoleInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `UpdatePolicyInput`<sup>Optional</sup> <a name="UpdatePolicyInput" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.updatePolicyInput"></a>

```go
func UpdatePolicyInput() BatchComputeEnvironmentUpdatePolicy
```

- *Type:* <a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicy">BatchComputeEnvironmentUpdatePolicy</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NamePrefix`<sup>Required</sup> <a name="NamePrefix" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.namePrefix"></a>

```go
func NamePrefix() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `ServiceRole`<sup>Required</sup> <a name="ServiceRole" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.serviceRole"></a>

```go
func ServiceRole() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BatchComputeEnvironmentComputeResources <a name="BatchComputeEnvironmentComputeResources" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/batchcomputeenvironment"

&batchcomputeenvironment.BatchComputeEnvironmentComputeResources {
	MaxVcpus: *f64,
	Subnets: *[]*string,
	Type: *string,
	AllocationStrategy: *string,
	BidPercentage: *f64,
	DesiredVcpus: *f64,
	Ec2Configuration: interface{},
	Ec2KeyPair: *string,
	ImageId: *string,
	InstanceRole: *string,
	InstanceType: *[]*string,
	LaunchTemplate: github.com/cdktf/cdktf-provider-aws-go/aws/v21.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate,
	MinVcpus: *f64,
	PlacementGroup: *string,
	SecurityGroupIds: *[]*string,
	SpotIamFleetRole: *string,
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.maxVcpus">MaxVcpus</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#max_vcpus BatchComputeEnvironment#max_vcpus}. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.subnets">Subnets</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#subnets BatchComputeEnvironment#subnets}. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#type BatchComputeEnvironment#type}. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.allocationStrategy">AllocationStrategy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#allocation_strategy BatchComputeEnvironment#allocation_strategy}. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.bidPercentage">BidPercentage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#bid_percentage BatchComputeEnvironment#bid_percentage}. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.desiredVcpus">DesiredVcpus</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#desired_vcpus BatchComputeEnvironment#desired_vcpus}. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.ec2Configuration">Ec2Configuration</a></code> | <code>interface{}</code> | ec2_configuration block. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.ec2KeyPair">Ec2KeyPair</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#ec2_key_pair BatchComputeEnvironment#ec2_key_pair}. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.imageId">ImageId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#image_id BatchComputeEnvironment#image_id}. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.instanceRole">InstanceRole</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#instance_role BatchComputeEnvironment#instance_role}. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.instanceType">InstanceType</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#instance_type BatchComputeEnvironment#instance_type}. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.launchTemplate">LaunchTemplate</a></code> | <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate">BatchComputeEnvironmentComputeResourcesLaunchTemplate</a></code> | launch_template block. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.minVcpus">MinVcpus</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#min_vcpus BatchComputeEnvironment#min_vcpus}. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.placementGroup">PlacementGroup</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#placement_group BatchComputeEnvironment#placement_group}. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#security_group_ids BatchComputeEnvironment#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.spotIamFleetRole">SpotIamFleetRole</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#spot_iam_fleet_role BatchComputeEnvironment#spot_iam_fleet_role}. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#tags BatchComputeEnvironment#tags}. |

---

##### `MaxVcpus`<sup>Required</sup> <a name="MaxVcpus" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.maxVcpus"></a>

```go
MaxVcpus *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#max_vcpus BatchComputeEnvironment#max_vcpus}.

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.subnets"></a>

```go
Subnets *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#subnets BatchComputeEnvironment#subnets}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#type BatchComputeEnvironment#type}.

---

##### `AllocationStrategy`<sup>Optional</sup> <a name="AllocationStrategy" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.allocationStrategy"></a>

```go
AllocationStrategy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#allocation_strategy BatchComputeEnvironment#allocation_strategy}.

---

##### `BidPercentage`<sup>Optional</sup> <a name="BidPercentage" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.bidPercentage"></a>

```go
BidPercentage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#bid_percentage BatchComputeEnvironment#bid_percentage}.

---

##### `DesiredVcpus`<sup>Optional</sup> <a name="DesiredVcpus" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.desiredVcpus"></a>

```go
DesiredVcpus *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#desired_vcpus BatchComputeEnvironment#desired_vcpus}.

---

##### `Ec2Configuration`<sup>Optional</sup> <a name="Ec2Configuration" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.ec2Configuration"></a>

```go
Ec2Configuration interface{}
```

- *Type:* interface{}

ec2_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#ec2_configuration BatchComputeEnvironment#ec2_configuration}

---

##### `Ec2KeyPair`<sup>Optional</sup> <a name="Ec2KeyPair" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.ec2KeyPair"></a>

```go
Ec2KeyPair *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#ec2_key_pair BatchComputeEnvironment#ec2_key_pair}.

---

##### `ImageId`<sup>Optional</sup> <a name="ImageId" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.imageId"></a>

```go
ImageId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#image_id BatchComputeEnvironment#image_id}.

---

##### `InstanceRole`<sup>Optional</sup> <a name="InstanceRole" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.instanceRole"></a>

```go
InstanceRole *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#instance_role BatchComputeEnvironment#instance_role}.

---

##### `InstanceType`<sup>Optional</sup> <a name="InstanceType" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.instanceType"></a>

```go
InstanceType *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#instance_type BatchComputeEnvironment#instance_type}.

---

##### `LaunchTemplate`<sup>Optional</sup> <a name="LaunchTemplate" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.launchTemplate"></a>

```go
LaunchTemplate BatchComputeEnvironmentComputeResourcesLaunchTemplate
```

- *Type:* <a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate">BatchComputeEnvironmentComputeResourcesLaunchTemplate</a>

launch_template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#launch_template BatchComputeEnvironment#launch_template}

---

##### `MinVcpus`<sup>Optional</sup> <a name="MinVcpus" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.minVcpus"></a>

```go
MinVcpus *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#min_vcpus BatchComputeEnvironment#min_vcpus}.

---

##### `PlacementGroup`<sup>Optional</sup> <a name="PlacementGroup" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.placementGroup"></a>

```go
PlacementGroup *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#placement_group BatchComputeEnvironment#placement_group}.

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.securityGroupIds"></a>

```go
SecurityGroupIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#security_group_ids BatchComputeEnvironment#security_group_ids}.

---

##### `SpotIamFleetRole`<sup>Optional</sup> <a name="SpotIamFleetRole" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.spotIamFleetRole"></a>

```go
SpotIamFleetRole *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#spot_iam_fleet_role BatchComputeEnvironment#spot_iam_fleet_role}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#tags BatchComputeEnvironment#tags}.

---

### BatchComputeEnvironmentComputeResourcesEc2Configuration <a name="BatchComputeEnvironmentComputeResourcesEc2Configuration" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2Configuration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/batchcomputeenvironment"

&batchcomputeenvironment.BatchComputeEnvironmentComputeResourcesEc2Configuration {
	ImageIdOverride: *string,
	ImageType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2Configuration.property.imageIdOverride">ImageIdOverride</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#image_id_override BatchComputeEnvironment#image_id_override}. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2Configuration.property.imageType">ImageType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#image_type BatchComputeEnvironment#image_type}. |

---

##### `ImageIdOverride`<sup>Optional</sup> <a name="ImageIdOverride" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2Configuration.property.imageIdOverride"></a>

```go
ImageIdOverride *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#image_id_override BatchComputeEnvironment#image_id_override}.

---

##### `ImageType`<sup>Optional</sup> <a name="ImageType" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2Configuration.property.imageType"></a>

```go
ImageType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#image_type BatchComputeEnvironment#image_type}.

---

### BatchComputeEnvironmentComputeResourcesLaunchTemplate <a name="BatchComputeEnvironmentComputeResourcesLaunchTemplate" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/batchcomputeenvironment"

&batchcomputeenvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate {
	LaunchTemplateId: *string,
	LaunchTemplateName: *string,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate.property.launchTemplateId">LaunchTemplateId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#launch_template_id BatchComputeEnvironment#launch_template_id}. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate.property.launchTemplateName">LaunchTemplateName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#launch_template_name BatchComputeEnvironment#launch_template_name}. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#version BatchComputeEnvironment#version}. |

---

##### `LaunchTemplateId`<sup>Optional</sup> <a name="LaunchTemplateId" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate.property.launchTemplateId"></a>

```go
LaunchTemplateId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#launch_template_id BatchComputeEnvironment#launch_template_id}.

---

##### `LaunchTemplateName`<sup>Optional</sup> <a name="LaunchTemplateName" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate.property.launchTemplateName"></a>

```go
LaunchTemplateName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#launch_template_name BatchComputeEnvironment#launch_template_name}.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#version BatchComputeEnvironment#version}.

---

### BatchComputeEnvironmentConfig <a name="BatchComputeEnvironmentConfig" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/batchcomputeenvironment"

&batchcomputeenvironment.BatchComputeEnvironmentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Type: *string,
	ComputeResources: github.com/cdktf/cdktf-provider-aws-go/aws/v21.batchComputeEnvironment.BatchComputeEnvironmentComputeResources,
	EksConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws/v21.batchComputeEnvironment.BatchComputeEnvironmentEksConfiguration,
	Id: *string,
	Name: *string,
	NamePrefix: *string,
	Region: *string,
	ServiceRole: *string,
	State: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	UpdatePolicy: github.com/cdktf/cdktf-provider-aws-go/aws/v21.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicy,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#type BatchComputeEnvironment#type}. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.computeResources">ComputeResources</a></code> | <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResources">BatchComputeEnvironmentComputeResources</a></code> | compute_resources block. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.eksConfiguration">EksConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfiguration">BatchComputeEnvironmentEksConfiguration</a></code> | eks_configuration block. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#id BatchComputeEnvironment#id}. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#name BatchComputeEnvironment#name}. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.namePrefix">NamePrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#name_prefix BatchComputeEnvironment#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.serviceRole">ServiceRole</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#service_role BatchComputeEnvironment#service_role}. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#state BatchComputeEnvironment#state}. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#tags BatchComputeEnvironment#tags}. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#tags_all BatchComputeEnvironment#tags_all}. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.updatePolicy">UpdatePolicy</a></code> | <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicy">BatchComputeEnvironmentUpdatePolicy</a></code> | update_policy block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#type BatchComputeEnvironment#type}.

---

##### `ComputeResources`<sup>Optional</sup> <a name="ComputeResources" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.computeResources"></a>

```go
ComputeResources BatchComputeEnvironmentComputeResources
```

- *Type:* <a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResources">BatchComputeEnvironmentComputeResources</a>

compute_resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#compute_resources BatchComputeEnvironment#compute_resources}

---

##### `EksConfiguration`<sup>Optional</sup> <a name="EksConfiguration" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.eksConfiguration"></a>

```go
EksConfiguration BatchComputeEnvironmentEksConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfiguration">BatchComputeEnvironmentEksConfiguration</a>

eks_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#eks_configuration BatchComputeEnvironment#eks_configuration}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#id BatchComputeEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#name BatchComputeEnvironment#name}.

---

##### `NamePrefix`<sup>Optional</sup> <a name="NamePrefix" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.namePrefix"></a>

```go
NamePrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#name_prefix BatchComputeEnvironment#name_prefix}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#region BatchComputeEnvironment#region}

---

##### `ServiceRole`<sup>Optional</sup> <a name="ServiceRole" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.serviceRole"></a>

```go
ServiceRole *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#service_role BatchComputeEnvironment#service_role}.

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#state BatchComputeEnvironment#state}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#tags BatchComputeEnvironment#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#tags_all BatchComputeEnvironment#tags_all}.

---

##### `UpdatePolicy`<sup>Optional</sup> <a name="UpdatePolicy" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.updatePolicy"></a>

```go
UpdatePolicy BatchComputeEnvironmentUpdatePolicy
```

- *Type:* <a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicy">BatchComputeEnvironmentUpdatePolicy</a>

update_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#update_policy BatchComputeEnvironment#update_policy}

---

### BatchComputeEnvironmentEksConfiguration <a name="BatchComputeEnvironmentEksConfiguration" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/batchcomputeenvironment"

&batchcomputeenvironment.BatchComputeEnvironmentEksConfiguration {
	EksClusterArn: *string,
	KubernetesNamespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfiguration.property.eksClusterArn">EksClusterArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#eks_cluster_arn BatchComputeEnvironment#eks_cluster_arn}. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfiguration.property.kubernetesNamespace">KubernetesNamespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#kubernetes_namespace BatchComputeEnvironment#kubernetes_namespace}. |

---

##### `EksClusterArn`<sup>Required</sup> <a name="EksClusterArn" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfiguration.property.eksClusterArn"></a>

```go
EksClusterArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#eks_cluster_arn BatchComputeEnvironment#eks_cluster_arn}.

---

##### `KubernetesNamespace`<sup>Required</sup> <a name="KubernetesNamespace" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfiguration.property.kubernetesNamespace"></a>

```go
KubernetesNamespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#kubernetes_namespace BatchComputeEnvironment#kubernetes_namespace}.

---

### BatchComputeEnvironmentUpdatePolicy <a name="BatchComputeEnvironmentUpdatePolicy" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/batchcomputeenvironment"

&batchcomputeenvironment.BatchComputeEnvironmentUpdatePolicy {
	JobExecutionTimeoutMinutes: *f64,
	TerminateJobsOnUpdate: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicy.property.jobExecutionTimeoutMinutes">JobExecutionTimeoutMinutes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#job_execution_timeout_minutes BatchComputeEnvironment#job_execution_timeout_minutes}. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicy.property.terminateJobsOnUpdate">TerminateJobsOnUpdate</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#terminate_jobs_on_update BatchComputeEnvironment#terminate_jobs_on_update}. |

---

##### `JobExecutionTimeoutMinutes`<sup>Required</sup> <a name="JobExecutionTimeoutMinutes" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicy.property.jobExecutionTimeoutMinutes"></a>

```go
JobExecutionTimeoutMinutes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#job_execution_timeout_minutes BatchComputeEnvironment#job_execution_timeout_minutes}.

---

##### `TerminateJobsOnUpdate`<sup>Required</sup> <a name="TerminateJobsOnUpdate" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicy.property.terminateJobsOnUpdate"></a>

```go
TerminateJobsOnUpdate interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#terminate_jobs_on_update BatchComputeEnvironment#terminate_jobs_on_update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BatchComputeEnvironmentComputeResourcesEc2ConfigurationList <a name="BatchComputeEnvironmentComputeResourcesEc2ConfigurationList" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/batchcomputeenvironment"

batchcomputeenvironment.NewBatchComputeEnvironmentComputeResourcesEc2ConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BatchComputeEnvironmentComputeResourcesEc2ConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.get"></a>

```go
func Get(index *f64) BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference <a name="BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/batchcomputeenvironment"

batchcomputeenvironment.NewBatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.resetImageIdOverride">ResetImageIdOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.resetImageType">ResetImageType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetImageIdOverride` <a name="ResetImageIdOverride" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.resetImageIdOverride"></a>

```go
func ResetImageIdOverride()
```

##### `ResetImageType` <a name="ResetImageType" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.resetImageType"></a>

```go
func ResetImageType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.imageIdOverrideInput">ImageIdOverrideInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.imageTypeInput">ImageTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.imageIdOverride">ImageIdOverride</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.imageType">ImageType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ImageIdOverrideInput`<sup>Optional</sup> <a name="ImageIdOverrideInput" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.imageIdOverrideInput"></a>

```go
func ImageIdOverrideInput() *string
```

- *Type:* *string

---

##### `ImageTypeInput`<sup>Optional</sup> <a name="ImageTypeInput" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.imageTypeInput"></a>

```go
func ImageTypeInput() *string
```

- *Type:* *string

---

##### `ImageIdOverride`<sup>Required</sup> <a name="ImageIdOverride" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.imageIdOverride"></a>

```go
func ImageIdOverride() *string
```

- *Type:* *string

---

##### `ImageType`<sup>Required</sup> <a name="ImageType" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.imageType"></a>

```go
func ImageType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference <a name="BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/batchcomputeenvironment"

batchcomputeenvironment.NewBatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.resetLaunchTemplateId">ResetLaunchTemplateId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.resetLaunchTemplateName">ResetLaunchTemplateName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLaunchTemplateId` <a name="ResetLaunchTemplateId" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.resetLaunchTemplateId"></a>

```go
func ResetLaunchTemplateId()
```

##### `ResetLaunchTemplateName` <a name="ResetLaunchTemplateName" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.resetLaunchTemplateName"></a>

```go
func ResetLaunchTemplateName()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.resetVersion"></a>

```go
func ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.launchTemplateIdInput">LaunchTemplateIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.launchTemplateNameInput">LaunchTemplateNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.launchTemplateId">LaunchTemplateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.launchTemplateName">LaunchTemplateName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate">BatchComputeEnvironmentComputeResourcesLaunchTemplate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LaunchTemplateIdInput`<sup>Optional</sup> <a name="LaunchTemplateIdInput" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.launchTemplateIdInput"></a>

```go
func LaunchTemplateIdInput() *string
```

- *Type:* *string

---

##### `LaunchTemplateNameInput`<sup>Optional</sup> <a name="LaunchTemplateNameInput" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.launchTemplateNameInput"></a>

```go
func LaunchTemplateNameInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `LaunchTemplateId`<sup>Required</sup> <a name="LaunchTemplateId" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.launchTemplateId"></a>

```go
func LaunchTemplateId() *string
```

- *Type:* *string

---

##### `LaunchTemplateName`<sup>Required</sup> <a name="LaunchTemplateName" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.launchTemplateName"></a>

```go
func LaunchTemplateName() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.internalValue"></a>

```go
func InternalValue() BatchComputeEnvironmentComputeResourcesLaunchTemplate
```

- *Type:* <a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate">BatchComputeEnvironmentComputeResourcesLaunchTemplate</a>

---


### BatchComputeEnvironmentComputeResourcesOutputReference <a name="BatchComputeEnvironmentComputeResourcesOutputReference" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/batchcomputeenvironment"

batchcomputeenvironment.NewBatchComputeEnvironmentComputeResourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BatchComputeEnvironmentComputeResourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.putEc2Configuration">PutEc2Configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.putLaunchTemplate">PutLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetAllocationStrategy">ResetAllocationStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetBidPercentage">ResetBidPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetDesiredVcpus">ResetDesiredVcpus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetEc2Configuration">ResetEc2Configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetEc2KeyPair">ResetEc2KeyPair</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetImageId">ResetImageId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetInstanceRole">ResetInstanceRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetInstanceType">ResetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetLaunchTemplate">ResetLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetMinVcpus">ResetMinVcpus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetPlacementGroup">ResetPlacementGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetSpotIamFleetRole">ResetSpotIamFleetRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEc2Configuration` <a name="PutEc2Configuration" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.putEc2Configuration"></a>

```go
func PutEc2Configuration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.putEc2Configuration.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLaunchTemplate` <a name="PutLaunchTemplate" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.putLaunchTemplate"></a>

```go
func PutLaunchTemplate(value BatchComputeEnvironmentComputeResourcesLaunchTemplate)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.putLaunchTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate">BatchComputeEnvironmentComputeResourcesLaunchTemplate</a>

---

##### `ResetAllocationStrategy` <a name="ResetAllocationStrategy" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetAllocationStrategy"></a>

```go
func ResetAllocationStrategy()
```

##### `ResetBidPercentage` <a name="ResetBidPercentage" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetBidPercentage"></a>

```go
func ResetBidPercentage()
```

##### `ResetDesiredVcpus` <a name="ResetDesiredVcpus" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetDesiredVcpus"></a>

```go
func ResetDesiredVcpus()
```

##### `ResetEc2Configuration` <a name="ResetEc2Configuration" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetEc2Configuration"></a>

```go
func ResetEc2Configuration()
```

##### `ResetEc2KeyPair` <a name="ResetEc2KeyPair" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetEc2KeyPair"></a>

```go
func ResetEc2KeyPair()
```

##### `ResetImageId` <a name="ResetImageId" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetImageId"></a>

```go
func ResetImageId()
```

##### `ResetInstanceRole` <a name="ResetInstanceRole" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetInstanceRole"></a>

```go
func ResetInstanceRole()
```

##### `ResetInstanceType` <a name="ResetInstanceType" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetInstanceType"></a>

```go
func ResetInstanceType()
```

##### `ResetLaunchTemplate` <a name="ResetLaunchTemplate" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetLaunchTemplate"></a>

```go
func ResetLaunchTemplate()
```

##### `ResetMinVcpus` <a name="ResetMinVcpus" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetMinVcpus"></a>

```go
func ResetMinVcpus()
```

##### `ResetPlacementGroup` <a name="ResetPlacementGroup" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetPlacementGroup"></a>

```go
func ResetPlacementGroup()
```

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetSecurityGroupIds"></a>

```go
func ResetSecurityGroupIds()
```

##### `ResetSpotIamFleetRole` <a name="ResetSpotIamFleetRole" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetSpotIamFleetRole"></a>

```go
func ResetSpotIamFleetRole()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetTags"></a>

```go
func ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.ec2Configuration">Ec2Configuration</a></code> | <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList">BatchComputeEnvironmentComputeResourcesEc2ConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.launchTemplate">LaunchTemplate</a></code> | <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference">BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.allocationStrategyInput">AllocationStrategyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.bidPercentageInput">BidPercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.desiredVcpusInput">DesiredVcpusInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.ec2ConfigurationInput">Ec2ConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.ec2KeyPairInput">Ec2KeyPairInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.imageIdInput">ImageIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.instanceRoleInput">InstanceRoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.launchTemplateInput">LaunchTemplateInput</a></code> | <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate">BatchComputeEnvironmentComputeResourcesLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.maxVcpusInput">MaxVcpusInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.minVcpusInput">MinVcpusInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.placementGroupInput">PlacementGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.spotIamFleetRoleInput">SpotIamFleetRoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.subnetsInput">SubnetsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.allocationStrategy">AllocationStrategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.bidPercentage">BidPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.desiredVcpus">DesiredVcpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.ec2KeyPair">Ec2KeyPair</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.imageId">ImageId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.instanceRole">InstanceRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.instanceType">InstanceType</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.maxVcpus">MaxVcpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.minVcpus">MinVcpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.placementGroup">PlacementGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.spotIamFleetRole">SpotIamFleetRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.subnets">Subnets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResources">BatchComputeEnvironmentComputeResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ec2Configuration`<sup>Required</sup> <a name="Ec2Configuration" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.ec2Configuration"></a>

```go
func Ec2Configuration() BatchComputeEnvironmentComputeResourcesEc2ConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList">BatchComputeEnvironmentComputeResourcesEc2ConfigurationList</a>

---

##### `LaunchTemplate`<sup>Required</sup> <a name="LaunchTemplate" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.launchTemplate"></a>

```go
func LaunchTemplate() BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference">BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference</a>

---

##### `AllocationStrategyInput`<sup>Optional</sup> <a name="AllocationStrategyInput" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.allocationStrategyInput"></a>

```go
func AllocationStrategyInput() *string
```

- *Type:* *string

---

##### `BidPercentageInput`<sup>Optional</sup> <a name="BidPercentageInput" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.bidPercentageInput"></a>

```go
func BidPercentageInput() *f64
```

- *Type:* *f64

---

##### `DesiredVcpusInput`<sup>Optional</sup> <a name="DesiredVcpusInput" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.desiredVcpusInput"></a>

```go
func DesiredVcpusInput() *f64
```

- *Type:* *f64

---

##### `Ec2ConfigurationInput`<sup>Optional</sup> <a name="Ec2ConfigurationInput" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.ec2ConfigurationInput"></a>

```go
func Ec2ConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `Ec2KeyPairInput`<sup>Optional</sup> <a name="Ec2KeyPairInput" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.ec2KeyPairInput"></a>

```go
func Ec2KeyPairInput() *string
```

- *Type:* *string

---

##### `ImageIdInput`<sup>Optional</sup> <a name="ImageIdInput" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.imageIdInput"></a>

```go
func ImageIdInput() *string
```

- *Type:* *string

---

##### `InstanceRoleInput`<sup>Optional</sup> <a name="InstanceRoleInput" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.instanceRoleInput"></a>

```go
func InstanceRoleInput() *string
```

- *Type:* *string

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.instanceTypeInput"></a>

```go
func InstanceTypeInput() *[]*string
```

- *Type:* *[]*string

---

##### `LaunchTemplateInput`<sup>Optional</sup> <a name="LaunchTemplateInput" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.launchTemplateInput"></a>

```go
func LaunchTemplateInput() BatchComputeEnvironmentComputeResourcesLaunchTemplate
```

- *Type:* <a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate">BatchComputeEnvironmentComputeResourcesLaunchTemplate</a>

---

##### `MaxVcpusInput`<sup>Optional</sup> <a name="MaxVcpusInput" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.maxVcpusInput"></a>

```go
func MaxVcpusInput() *f64
```

- *Type:* *f64

---

##### `MinVcpusInput`<sup>Optional</sup> <a name="MinVcpusInput" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.minVcpusInput"></a>

```go
func MinVcpusInput() *f64
```

- *Type:* *f64

---

##### `PlacementGroupInput`<sup>Optional</sup> <a name="PlacementGroupInput" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.placementGroupInput"></a>

```go
func PlacementGroupInput() *string
```

- *Type:* *string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.securityGroupIdsInput"></a>

```go
func SecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SpotIamFleetRoleInput`<sup>Optional</sup> <a name="SpotIamFleetRoleInput" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.spotIamFleetRoleInput"></a>

```go
func SpotIamFleetRoleInput() *string
```

- *Type:* *string

---

##### `SubnetsInput`<sup>Optional</sup> <a name="SubnetsInput" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.subnetsInput"></a>

```go
func SubnetsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `AllocationStrategy`<sup>Required</sup> <a name="AllocationStrategy" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.allocationStrategy"></a>

```go
func AllocationStrategy() *string
```

- *Type:* *string

---

##### `BidPercentage`<sup>Required</sup> <a name="BidPercentage" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.bidPercentage"></a>

```go
func BidPercentage() *f64
```

- *Type:* *f64

---

##### `DesiredVcpus`<sup>Required</sup> <a name="DesiredVcpus" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.desiredVcpus"></a>

```go
func DesiredVcpus() *f64
```

- *Type:* *f64

---

##### `Ec2KeyPair`<sup>Required</sup> <a name="Ec2KeyPair" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.ec2KeyPair"></a>

```go
func Ec2KeyPair() *string
```

- *Type:* *string

---

##### `ImageId`<sup>Required</sup> <a name="ImageId" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.imageId"></a>

```go
func ImageId() *string
```

- *Type:* *string

---

##### `InstanceRole`<sup>Required</sup> <a name="InstanceRole" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.instanceRole"></a>

```go
func InstanceRole() *string
```

- *Type:* *string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.instanceType"></a>

```go
func InstanceType() *[]*string
```

- *Type:* *[]*string

---

##### `MaxVcpus`<sup>Required</sup> <a name="MaxVcpus" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.maxVcpus"></a>

```go
func MaxVcpus() *f64
```

- *Type:* *f64

---

##### `MinVcpus`<sup>Required</sup> <a name="MinVcpus" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.minVcpus"></a>

```go
func MinVcpus() *f64
```

- *Type:* *f64

---

##### `PlacementGroup`<sup>Required</sup> <a name="PlacementGroup" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.placementGroup"></a>

```go
func PlacementGroup() *string
```

- *Type:* *string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `SpotIamFleetRole`<sup>Required</sup> <a name="SpotIamFleetRole" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.spotIamFleetRole"></a>

```go
func SpotIamFleetRole() *string
```

- *Type:* *string

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.subnets"></a>

```go
func Subnets() *[]*string
```

- *Type:* *[]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() BatchComputeEnvironmentComputeResources
```

- *Type:* <a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResources">BatchComputeEnvironmentComputeResources</a>

---


### BatchComputeEnvironmentEksConfigurationOutputReference <a name="BatchComputeEnvironmentEksConfigurationOutputReference" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/batchcomputeenvironment"

batchcomputeenvironment.NewBatchComputeEnvironmentEksConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BatchComputeEnvironmentEksConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.property.eksClusterArnInput">EksClusterArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.property.kubernetesNamespaceInput">KubernetesNamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.property.eksClusterArn">EksClusterArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.property.kubernetesNamespace">KubernetesNamespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfiguration">BatchComputeEnvironmentEksConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EksClusterArnInput`<sup>Optional</sup> <a name="EksClusterArnInput" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.property.eksClusterArnInput"></a>

```go
func EksClusterArnInput() *string
```

- *Type:* *string

---

##### `KubernetesNamespaceInput`<sup>Optional</sup> <a name="KubernetesNamespaceInput" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.property.kubernetesNamespaceInput"></a>

```go
func KubernetesNamespaceInput() *string
```

- *Type:* *string

---

##### `EksClusterArn`<sup>Required</sup> <a name="EksClusterArn" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.property.eksClusterArn"></a>

```go
func EksClusterArn() *string
```

- *Type:* *string

---

##### `KubernetesNamespace`<sup>Required</sup> <a name="KubernetesNamespace" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.property.kubernetesNamespace"></a>

```go
func KubernetesNamespace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() BatchComputeEnvironmentEksConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfiguration">BatchComputeEnvironmentEksConfiguration</a>

---


### BatchComputeEnvironmentUpdatePolicyOutputReference <a name="BatchComputeEnvironmentUpdatePolicyOutputReference" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/batchcomputeenvironment"

batchcomputeenvironment.NewBatchComputeEnvironmentUpdatePolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BatchComputeEnvironmentUpdatePolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.property.jobExecutionTimeoutMinutesInput">JobExecutionTimeoutMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.property.terminateJobsOnUpdateInput">TerminateJobsOnUpdateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.property.jobExecutionTimeoutMinutes">JobExecutionTimeoutMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.property.terminateJobsOnUpdate">TerminateJobsOnUpdate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicy">BatchComputeEnvironmentUpdatePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `JobExecutionTimeoutMinutesInput`<sup>Optional</sup> <a name="JobExecutionTimeoutMinutesInput" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.property.jobExecutionTimeoutMinutesInput"></a>

```go
func JobExecutionTimeoutMinutesInput() *f64
```

- *Type:* *f64

---

##### `TerminateJobsOnUpdateInput`<sup>Optional</sup> <a name="TerminateJobsOnUpdateInput" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.property.terminateJobsOnUpdateInput"></a>

```go
func TerminateJobsOnUpdateInput() interface{}
```

- *Type:* interface{}

---

##### `JobExecutionTimeoutMinutes`<sup>Required</sup> <a name="JobExecutionTimeoutMinutes" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.property.jobExecutionTimeoutMinutes"></a>

```go
func JobExecutionTimeoutMinutes() *f64
```

- *Type:* *f64

---

##### `TerminateJobsOnUpdate`<sup>Required</sup> <a name="TerminateJobsOnUpdate" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.property.terminateJobsOnUpdate"></a>

```go
func TerminateJobsOnUpdate() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() BatchComputeEnvironmentUpdatePolicy
```

- *Type:* <a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicy">BatchComputeEnvironmentUpdatePolicy</a>

---



