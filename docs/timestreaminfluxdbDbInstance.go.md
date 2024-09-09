# `timestreaminfluxdbDbInstance` Submodule <a name="`timestreaminfluxdbDbInstance` Submodule" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TimestreaminfluxdbDbInstance <a name="TimestreaminfluxdbDbInstance" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/timestreaminfluxdb_db_instance aws_timestreaminfluxdb_db_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/timestreaminfluxdbdbinstance"

timestreaminfluxdbdbinstance.NewTimestreaminfluxdbDbInstance(scope Construct, id *string, config TimestreaminfluxdbDbInstanceConfig) TimestreaminfluxdbDbInstance
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig">TimestreaminfluxdbDbInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig">TimestreaminfluxdbDbInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.putLogDeliveryConfiguration">PutLogDeliveryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.resetDbParameterGroupIdentifier">ResetDbParameterGroupIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.resetDbStorageType">ResetDbStorageType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.resetDeploymentType">ResetDeploymentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.resetLogDeliveryConfiguration">ResetLogDeliveryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.resetPubliclyAccessible">ResetPubliclyAccessible</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLogDeliveryConfiguration` <a name="PutLogDeliveryConfiguration" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.putLogDeliveryConfiguration"></a>

```go
func PutLogDeliveryConfiguration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.putLogDeliveryConfiguration.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.putTimeouts"></a>

```go
func PutTimeouts(value TimestreaminfluxdbDbInstanceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeouts">TimestreaminfluxdbDbInstanceTimeouts</a>

---

##### `ResetDbParameterGroupIdentifier` <a name="ResetDbParameterGroupIdentifier" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.resetDbParameterGroupIdentifier"></a>

```go
func ResetDbParameterGroupIdentifier()
```

##### `ResetDbStorageType` <a name="ResetDbStorageType" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.resetDbStorageType"></a>

```go
func ResetDbStorageType()
```

##### `ResetDeploymentType` <a name="ResetDeploymentType" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.resetDeploymentType"></a>

```go
func ResetDeploymentType()
```

##### `ResetLogDeliveryConfiguration` <a name="ResetLogDeliveryConfiguration" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.resetLogDeliveryConfiguration"></a>

```go
func ResetLogDeliveryConfiguration()
```

##### `ResetPubliclyAccessible` <a name="ResetPubliclyAccessible" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.resetPubliclyAccessible"></a>

```go
func ResetPubliclyAccessible()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a TimestreaminfluxdbDbInstance resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/timestreaminfluxdbdbinstance"

timestreaminfluxdbdbinstance.TimestreaminfluxdbDbInstance_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/timestreaminfluxdbdbinstance"

timestreaminfluxdbdbinstance.TimestreaminfluxdbDbInstance_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/timestreaminfluxdbdbinstance"

timestreaminfluxdbdbinstance.TimestreaminfluxdbDbInstance_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/timestreaminfluxdbdbinstance"

timestreaminfluxdbdbinstance.TimestreaminfluxdbDbInstance_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a TimestreaminfluxdbDbInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the TimestreaminfluxdbDbInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing TimestreaminfluxdbDbInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/timestreaminfluxdb_db_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the TimestreaminfluxdbDbInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.influxAuthParametersSecretArn">InfluxAuthParametersSecretArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.logDeliveryConfiguration">LogDeliveryConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList">TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.secondaryAvailabilityZone">SecondaryAvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.tagsAll">TagsAll</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference">TimestreaminfluxdbDbInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.allocatedStorageInput">AllocatedStorageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.dbInstanceTypeInput">DbInstanceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.dbParameterGroupIdentifierInput">DbParameterGroupIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.dbStorageTypeInput">DbStorageTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.deploymentTypeInput">DeploymentTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.logDeliveryConfigurationInput">LogDeliveryConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.organizationInput">OrganizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.publiclyAccessibleInput">PubliclyAccessibleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.vpcSecurityGroupIdsInput">VpcSecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.vpcSubnetIdsInput">VpcSubnetIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.allocatedStorage">AllocatedStorage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.dbInstanceType">DbInstanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.dbParameterGroupIdentifier">DbParameterGroupIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.dbStorageType">DbStorageType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.deploymentType">DeploymentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.organization">Organization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.publiclyAccessible">PubliclyAccessible</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.vpcSecurityGroupIds">VpcSecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.vpcSubnetIds">VpcSubnetIds</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.availabilityZone"></a>

```go
func AvailabilityZone() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InfluxAuthParametersSecretArn`<sup>Required</sup> <a name="InfluxAuthParametersSecretArn" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.influxAuthParametersSecretArn"></a>

```go
func InfluxAuthParametersSecretArn() *string
```

- *Type:* *string

---

##### `LogDeliveryConfiguration`<sup>Required</sup> <a name="LogDeliveryConfiguration" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.logDeliveryConfiguration"></a>

```go
func LogDeliveryConfiguration() TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList">TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList</a>

---

##### `SecondaryAvailabilityZone`<sup>Required</sup> <a name="SecondaryAvailabilityZone" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.secondaryAvailabilityZone"></a>

```go
func SecondaryAvailabilityZone() *string
```

- *Type:* *string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.tagsAll"></a>

```go
func TagsAll() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.timeouts"></a>

```go
func Timeouts() TimestreaminfluxdbDbInstanceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference">TimestreaminfluxdbDbInstanceTimeoutsOutputReference</a>

---

##### `AllocatedStorageInput`<sup>Optional</sup> <a name="AllocatedStorageInput" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.allocatedStorageInput"></a>

```go
func AllocatedStorageInput() *f64
```

- *Type:* *f64

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `DbInstanceTypeInput`<sup>Optional</sup> <a name="DbInstanceTypeInput" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.dbInstanceTypeInput"></a>

```go
func DbInstanceTypeInput() *string
```

- *Type:* *string

---

##### `DbParameterGroupIdentifierInput`<sup>Optional</sup> <a name="DbParameterGroupIdentifierInput" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.dbParameterGroupIdentifierInput"></a>

```go
func DbParameterGroupIdentifierInput() *string
```

- *Type:* *string

---

##### `DbStorageTypeInput`<sup>Optional</sup> <a name="DbStorageTypeInput" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.dbStorageTypeInput"></a>

```go
func DbStorageTypeInput() *string
```

- *Type:* *string

---

##### `DeploymentTypeInput`<sup>Optional</sup> <a name="DeploymentTypeInput" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.deploymentTypeInput"></a>

```go
func DeploymentTypeInput() *string
```

- *Type:* *string

---

##### `LogDeliveryConfigurationInput`<sup>Optional</sup> <a name="LogDeliveryConfigurationInput" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.logDeliveryConfigurationInput"></a>

```go
func LogDeliveryConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.organizationInput"></a>

```go
func OrganizationInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `PubliclyAccessibleInput`<sup>Optional</sup> <a name="PubliclyAccessibleInput" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.publiclyAccessibleInput"></a>

```go
func PubliclyAccessibleInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `VpcSecurityGroupIdsInput`<sup>Optional</sup> <a name="VpcSecurityGroupIdsInput" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.vpcSecurityGroupIdsInput"></a>

```go
func VpcSecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `VpcSubnetIdsInput`<sup>Optional</sup> <a name="VpcSubnetIdsInput" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.vpcSubnetIdsInput"></a>

```go
func VpcSubnetIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllocatedStorage`<sup>Required</sup> <a name="AllocatedStorage" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.allocatedStorage"></a>

```go
func AllocatedStorage() *f64
```

- *Type:* *f64

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `DbInstanceType`<sup>Required</sup> <a name="DbInstanceType" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.dbInstanceType"></a>

```go
func DbInstanceType() *string
```

- *Type:* *string

---

##### `DbParameterGroupIdentifier`<sup>Required</sup> <a name="DbParameterGroupIdentifier" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.dbParameterGroupIdentifier"></a>

```go
func DbParameterGroupIdentifier() *string
```

- *Type:* *string

---

##### `DbStorageType`<sup>Required</sup> <a name="DbStorageType" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.dbStorageType"></a>

```go
func DbStorageType() *string
```

- *Type:* *string

---

##### `DeploymentType`<sup>Required</sup> <a name="DeploymentType" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.deploymentType"></a>

```go
func DeploymentType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.organization"></a>

```go
func Organization() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `PubliclyAccessible`<sup>Required</sup> <a name="PubliclyAccessible" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.publiclyAccessible"></a>

```go
func PubliclyAccessible() interface{}
```

- *Type:* interface{}

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `VpcSecurityGroupIds`<sup>Required</sup> <a name="VpcSecurityGroupIds" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.vpcSecurityGroupIds"></a>

```go
func VpcSecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `VpcSubnetIds`<sup>Required</sup> <a name="VpcSubnetIds" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.vpcSubnetIds"></a>

```go
func VpcSubnetIds() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstance.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### TimestreaminfluxdbDbInstanceConfig <a name="TimestreaminfluxdbDbInstanceConfig" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/timestreaminfluxdbdbinstance"

&timestreaminfluxdbdbinstance.TimestreaminfluxdbDbInstanceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AllocatedStorage: *f64,
	Bucket: *string,
	DbInstanceType: *string,
	Name: *string,
	Organization: *string,
	Password: *string,
	Username: *string,
	VpcSecurityGroupIds: *[]*string,
	VpcSubnetIds: *[]*string,
	DbParameterGroupIdentifier: *string,
	DbStorageType: *string,
	DeploymentType: *string,
	LogDeliveryConfiguration: interface{},
	PubliclyAccessible: interface{},
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.allocatedStorage">AllocatedStorage</a></code> | <code>*f64</code> | The amount of storage to allocate for your DB storage type in GiB (gibibytes). |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.bucket">Bucket</a></code> | <code>*string</code> | The name of the initial InfluxDB bucket. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.dbInstanceType">DbInstanceType</a></code> | <code>*string</code> | The Timestream for InfluxDB DB instance type to run InfluxDB on. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.name">Name</a></code> | <code>*string</code> | The name that uniquely identifies the DB instance when interacting with the  					Amazon Timestream for InfluxDB API and CLI commands. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.organization">Organization</a></code> | <code>*string</code> | The name of the initial organization for the initial admin user in InfluxDB. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.password">Password</a></code> | <code>*string</code> | The password of the initial admin user created in InfluxDB. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.username">Username</a></code> | <code>*string</code> | The username of the initial admin user created in InfluxDB. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.vpcSecurityGroupIds">VpcSecurityGroupIds</a></code> | <code>*[]*string</code> | A list of VPC security group IDs to associate with the DB instance. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.vpcSubnetIds">VpcSubnetIds</a></code> | <code>*[]*string</code> | A list of VPC subnet IDs to associate with the DB instance. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.dbParameterGroupIdentifier">DbParameterGroupIdentifier</a></code> | <code>*string</code> | The id of the DB parameter group assigned to your DB instance. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.dbStorageType">DbStorageType</a></code> | <code>*string</code> | The Timestream for InfluxDB DB storage type to read and write InfluxDB data. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.deploymentType">DeploymentType</a></code> | <code>*string</code> | Specifies whether the DB instance will be deployed as a standalone instance or  					with a Multi-AZ standby for high availability. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.logDeliveryConfiguration">LogDeliveryConfiguration</a></code> | <code>interface{}</code> | log_delivery_configuration block. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.publiclyAccessible">PubliclyAccessible</a></code> | <code>interface{}</code> | Configures the DB instance with a public IP to facilitate access. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/timestreaminfluxdb_db_instance#tags TimestreaminfluxdbDbInstance#tags}. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeouts">TimestreaminfluxdbDbInstanceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AllocatedStorage`<sup>Required</sup> <a name="AllocatedStorage" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.allocatedStorage"></a>

```go
AllocatedStorage *f64
```

- *Type:* *f64

The amount of storage to allocate for your DB storage type in GiB (gibibytes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/timestreaminfluxdb_db_instance#allocated_storage TimestreaminfluxdbDbInstance#allocated_storage}

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

The name of the initial InfluxDB bucket.

All InfluxDB data is stored in a bucket.
A bucket combines the concept of a database and a retention period (the duration of time
that each data point persists). A bucket belongs to an organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/timestreaminfluxdb_db_instance#bucket TimestreaminfluxdbDbInstance#bucket}

---

##### `DbInstanceType`<sup>Required</sup> <a name="DbInstanceType" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.dbInstanceType"></a>

```go
DbInstanceType *string
```

- *Type:* *string

The Timestream for InfluxDB DB instance type to run InfluxDB on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/timestreaminfluxdb_db_instance#db_instance_type TimestreaminfluxdbDbInstance#db_instance_type}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name that uniquely identifies the DB instance when interacting with the  					Amazon Timestream for InfluxDB API and CLI commands.

This name will also be a
prefix included in the endpoint. DB instance names must be unique per customer
and per region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/timestreaminfluxdb_db_instance#name TimestreaminfluxdbDbInstance#name}

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.organization"></a>

```go
Organization *string
```

- *Type:* *string

The name of the initial organization for the initial admin user in InfluxDB.

An
InfluxDB organization is a workspace for a group of users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/timestreaminfluxdb_db_instance#organization TimestreaminfluxdbDbInstance#organization}

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.password"></a>

```go
Password *string
```

- *Type:* *string

The password of the initial admin user created in InfluxDB.

This password will
allow you to access the InfluxDB UI to perform various administrative tasks and
also use the InfluxDB CLI to create an operator token. These attributes will be
stored in a Secret created in AWS SecretManager in your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/timestreaminfluxdb_db_instance#password TimestreaminfluxdbDbInstance#password}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.username"></a>

```go
Username *string
```

- *Type:* *string

The username of the initial admin user created in InfluxDB.

Must start with a letter and can't end with a hyphen or contain two
consecutive hyphens. For example, my-user1. This username will allow
you to access the InfluxDB UI to perform various administrative tasks
and also use the InfluxDB CLI to create an operator token. These
attributes will be stored in a Secret created in Amazon Secrets
Manager in your account

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/timestreaminfluxdb_db_instance#username TimestreaminfluxdbDbInstance#username}

---

##### `VpcSecurityGroupIds`<sup>Required</sup> <a name="VpcSecurityGroupIds" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.vpcSecurityGroupIds"></a>

```go
VpcSecurityGroupIds *[]*string
```

- *Type:* *[]*string

A list of VPC security group IDs to associate with the DB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/timestreaminfluxdb_db_instance#vpc_security_group_ids TimestreaminfluxdbDbInstance#vpc_security_group_ids}

---

##### `VpcSubnetIds`<sup>Required</sup> <a name="VpcSubnetIds" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.vpcSubnetIds"></a>

```go
VpcSubnetIds *[]*string
```

- *Type:* *[]*string

A list of VPC subnet IDs to associate with the DB instance.

Provide at least
two VPC subnet IDs in different availability zones when deploying with a Multi-AZ standby.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/timestreaminfluxdb_db_instance#vpc_subnet_ids TimestreaminfluxdbDbInstance#vpc_subnet_ids}

---

##### `DbParameterGroupIdentifier`<sup>Optional</sup> <a name="DbParameterGroupIdentifier" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.dbParameterGroupIdentifier"></a>

```go
DbParameterGroupIdentifier *string
```

- *Type:* *string

The id of the DB parameter group assigned to your DB instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/timestreaminfluxdb_db_instance#db_parameter_group_identifier TimestreaminfluxdbDbInstance#db_parameter_group_identifier}

---

##### `DbStorageType`<sup>Optional</sup> <a name="DbStorageType" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.dbStorageType"></a>

```go
DbStorageType *string
```

- *Type:* *string

The Timestream for InfluxDB DB storage type to read and write InfluxDB data.

You can choose between 3 different types of provisioned Influx IOPS included storage according
to your workloads requirements: Influx IO Included 3000 IOPS, Influx IO Included 12000 IOPS,
Influx IO Included 16000 IOPS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/timestreaminfluxdb_db_instance#db_storage_type TimestreaminfluxdbDbInstance#db_storage_type}

---

##### `DeploymentType`<sup>Optional</sup> <a name="DeploymentType" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.deploymentType"></a>

```go
DeploymentType *string
```

- *Type:* *string

Specifies whether the DB instance will be deployed as a standalone instance or  					with a Multi-AZ standby for high availability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/timestreaminfluxdb_db_instance#deployment_type TimestreaminfluxdbDbInstance#deployment_type}

---

##### `LogDeliveryConfiguration`<sup>Optional</sup> <a name="LogDeliveryConfiguration" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.logDeliveryConfiguration"></a>

```go
LogDeliveryConfiguration interface{}
```

- *Type:* interface{}

log_delivery_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/timestreaminfluxdb_db_instance#log_delivery_configuration TimestreaminfluxdbDbInstance#log_delivery_configuration}

---

##### `PubliclyAccessible`<sup>Optional</sup> <a name="PubliclyAccessible" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.publiclyAccessible"></a>

```go
PubliclyAccessible interface{}
```

- *Type:* interface{}

Configures the DB instance with a public IP to facilitate access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/timestreaminfluxdb_db_instance#publicly_accessible TimestreaminfluxdbDbInstance#publicly_accessible}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/timestreaminfluxdb_db_instance#tags TimestreaminfluxdbDbInstance#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceConfig.property.timeouts"></a>

```go
Timeouts TimestreaminfluxdbDbInstanceTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeouts">TimestreaminfluxdbDbInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/timestreaminfluxdb_db_instance#timeouts TimestreaminfluxdbDbInstance#timeouts}

---

### TimestreaminfluxdbDbInstanceLogDeliveryConfiguration <a name="TimestreaminfluxdbDbInstanceLogDeliveryConfiguration" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/timestreaminfluxdbdbinstance"

&timestreaminfluxdbdbinstance.TimestreaminfluxdbDbInstanceLogDeliveryConfiguration {
	S3Configuration: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfiguration.property.s3Configuration">S3Configuration</a></code> | <code>interface{}</code> | s3_configuration block. |

---

##### `S3Configuration`<sup>Optional</sup> <a name="S3Configuration" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfiguration.property.s3Configuration"></a>

```go
S3Configuration interface{}
```

- *Type:* interface{}

s3_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/timestreaminfluxdb_db_instance#s3_configuration TimestreaminfluxdbDbInstance#s3_configuration}

---

### TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration <a name="TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/timestreaminfluxdbdbinstance"

&timestreaminfluxdbdbinstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration {
	BucketName: *string,
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration.property.bucketName">BucketName</a></code> | <code>*string</code> | The name of the S3 bucket to deliver logs to. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration.property.enabled">Enabled</a></code> | <code>interface{}</code> | Indicates whether log delivery to the S3 bucket is enabled. |

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration.property.bucketName"></a>

```go
BucketName *string
```

- *Type:* *string

The name of the S3 bucket to deliver logs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/timestreaminfluxdb_db_instance#bucket_name TimestreaminfluxdbDbInstance#bucket_name}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Indicates whether log delivery to the S3 bucket is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/timestreaminfluxdb_db_instance#enabled TimestreaminfluxdbDbInstance#enabled}

---

### TimestreaminfluxdbDbInstanceTimeouts <a name="TimestreaminfluxdbDbInstanceTimeouts" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/timestreaminfluxdbdbinstance"

&timestreaminfluxdbdbinstance.TimestreaminfluxdbDbInstanceTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeouts.property.create">Create</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeouts.property.update">Update</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/timestreaminfluxdb_db_instance#create TimestreaminfluxdbDbInstance#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/timestreaminfluxdb_db_instance#delete TimestreaminfluxdbDbInstance#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/timestreaminfluxdb_db_instance#update TimestreaminfluxdbDbInstance#update}

---

## Classes <a name="Classes" id="Classes"></a>

### TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList <a name="TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/timestreaminfluxdbdbinstance"

timestreaminfluxdbdbinstance.NewTimestreaminfluxdbDbInstanceLogDeliveryConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList.get"></a>

```go
func Get(index *f64) TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference <a name="TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/timestreaminfluxdbdbinstance"

timestreaminfluxdbdbinstance.NewTimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.putS3Configuration">PutS3Configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.resetS3Configuration">ResetS3Configuration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3Configuration` <a name="PutS3Configuration" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.putS3Configuration"></a>

```go
func PutS3Configuration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.putS3Configuration.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetS3Configuration` <a name="ResetS3Configuration" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.resetS3Configuration"></a>

```go
func ResetS3Configuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.property.s3Configuration">S3Configuration</a></code> | <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList">TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.property.s3ConfigurationInput">S3ConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3Configuration`<sup>Required</sup> <a name="S3Configuration" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.property.s3Configuration"></a>

```go
func S3Configuration() TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList">TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList</a>

---

##### `S3ConfigurationInput`<sup>Optional</sup> <a name="S3ConfigurationInput" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.property.s3ConfigurationInput"></a>

```go
func S3ConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList <a name="TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/timestreaminfluxdbdbinstance"

timestreaminfluxdbdbinstance.NewTimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList.get"></a>

```go
func Get(index *f64) TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference <a name="TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/timestreaminfluxdbdbinstance"

timestreaminfluxdbdbinstance.NewTimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.bucketNameInput"></a>

```go
func BucketNameInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TimestreaminfluxdbDbInstanceTimeoutsOutputReference <a name="TimestreaminfluxdbDbInstanceTimeoutsOutputReference" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/timestreaminfluxdbdbinstance"

timestreaminfluxdbdbinstance.NewTimestreaminfluxdbDbInstanceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TimestreaminfluxdbDbInstanceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.timestreaminfluxdbDbInstance.TimestreaminfluxdbDbInstanceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



