# `devopsguruServiceIntegration` Submodule <a name="`devopsguruServiceIntegration` Submodule" id="@cdktf/provider-aws.devopsguruServiceIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevopsguruServiceIntegration <a name="DevopsguruServiceIntegration" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/devopsguru_service_integration aws_devopsguru_service_integration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/devopsguruserviceintegration"

devopsguruserviceintegration.NewDevopsguruServiceIntegration(scope Construct, id *string, config DevopsguruServiceIntegrationConfig) DevopsguruServiceIntegration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationConfig">DevopsguruServiceIntegrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationConfig">DevopsguruServiceIntegrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.putKmsServerSideEncryption">PutKmsServerSideEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.putLogsAnomalyDetection">PutLogsAnomalyDetection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.putOpsCenter">PutOpsCenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.resetKmsServerSideEncryption">ResetKmsServerSideEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.resetLogsAnomalyDetection">ResetLogsAnomalyDetection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.resetOpsCenter">ResetOpsCenter</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutKmsServerSideEncryption` <a name="PutKmsServerSideEncryption" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.putKmsServerSideEncryption"></a>

```go
func PutKmsServerSideEncryption(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.putKmsServerSideEncryption.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLogsAnomalyDetection` <a name="PutLogsAnomalyDetection" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.putLogsAnomalyDetection"></a>

```go
func PutLogsAnomalyDetection(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.putLogsAnomalyDetection.parameter.value"></a>

- *Type:* interface{}

---

##### `PutOpsCenter` <a name="PutOpsCenter" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.putOpsCenter"></a>

```go
func PutOpsCenter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.putOpsCenter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetKmsServerSideEncryption` <a name="ResetKmsServerSideEncryption" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.resetKmsServerSideEncryption"></a>

```go
func ResetKmsServerSideEncryption()
```

##### `ResetLogsAnomalyDetection` <a name="ResetLogsAnomalyDetection" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.resetLogsAnomalyDetection"></a>

```go
func ResetLogsAnomalyDetection()
```

##### `ResetOpsCenter` <a name="ResetOpsCenter" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.resetOpsCenter"></a>

```go
func ResetOpsCenter()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DevopsguruServiceIntegration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/devopsguruserviceintegration"

devopsguruserviceintegration.DevopsguruServiceIntegration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/devopsguruserviceintegration"

devopsguruserviceintegration.DevopsguruServiceIntegration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/devopsguruserviceintegration"

devopsguruserviceintegration.DevopsguruServiceIntegration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/devopsguruserviceintegration"

devopsguruserviceintegration.DevopsguruServiceIntegration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DevopsguruServiceIntegration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DevopsguruServiceIntegration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DevopsguruServiceIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/devopsguru_service_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DevopsguruServiceIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.kmsServerSideEncryption">KmsServerSideEncryption</a></code> | <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList">DevopsguruServiceIntegrationKmsServerSideEncryptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.logsAnomalyDetection">LogsAnomalyDetection</a></code> | <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList">DevopsguruServiceIntegrationLogsAnomalyDetectionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.opsCenter">OpsCenter</a></code> | <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList">DevopsguruServiceIntegrationOpsCenterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.kmsServerSideEncryptionInput">KmsServerSideEncryptionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.logsAnomalyDetectionInput">LogsAnomalyDetectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.opsCenterInput">OpsCenterInput</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KmsServerSideEncryption`<sup>Required</sup> <a name="KmsServerSideEncryption" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.kmsServerSideEncryption"></a>

```go
func KmsServerSideEncryption() DevopsguruServiceIntegrationKmsServerSideEncryptionList
```

- *Type:* <a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList">DevopsguruServiceIntegrationKmsServerSideEncryptionList</a>

---

##### `LogsAnomalyDetection`<sup>Required</sup> <a name="LogsAnomalyDetection" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.logsAnomalyDetection"></a>

```go
func LogsAnomalyDetection() DevopsguruServiceIntegrationLogsAnomalyDetectionList
```

- *Type:* <a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList">DevopsguruServiceIntegrationLogsAnomalyDetectionList</a>

---

##### `OpsCenter`<sup>Required</sup> <a name="OpsCenter" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.opsCenter"></a>

```go
func OpsCenter() DevopsguruServiceIntegrationOpsCenterList
```

- *Type:* <a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList">DevopsguruServiceIntegrationOpsCenterList</a>

---

##### `KmsServerSideEncryptionInput`<sup>Optional</sup> <a name="KmsServerSideEncryptionInput" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.kmsServerSideEncryptionInput"></a>

```go
func KmsServerSideEncryptionInput() interface{}
```

- *Type:* interface{}

---

##### `LogsAnomalyDetectionInput`<sup>Optional</sup> <a name="LogsAnomalyDetectionInput" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.logsAnomalyDetectionInput"></a>

```go
func LogsAnomalyDetectionInput() interface{}
```

- *Type:* interface{}

---

##### `OpsCenterInput`<sup>Optional</sup> <a name="OpsCenterInput" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.opsCenterInput"></a>

```go
func OpsCenterInput() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DevopsguruServiceIntegrationConfig <a name="DevopsguruServiceIntegrationConfig" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/devopsguruserviceintegration"

&devopsguruserviceintegration.DevopsguruServiceIntegrationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	KmsServerSideEncryption: interface{},
	LogsAnomalyDetection: interface{},
	OpsCenter: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationConfig.property.kmsServerSideEncryption">KmsServerSideEncryption</a></code> | <code>interface{}</code> | kms_server_side_encryption block. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationConfig.property.logsAnomalyDetection">LogsAnomalyDetection</a></code> | <code>interface{}</code> | logs_anomaly_detection block. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationConfig.property.opsCenter">OpsCenter</a></code> | <code>interface{}</code> | ops_center block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `KmsServerSideEncryption`<sup>Optional</sup> <a name="KmsServerSideEncryption" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationConfig.property.kmsServerSideEncryption"></a>

```go
KmsServerSideEncryption interface{}
```

- *Type:* interface{}

kms_server_side_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/devopsguru_service_integration#kms_server_side_encryption DevopsguruServiceIntegration#kms_server_side_encryption}

---

##### `LogsAnomalyDetection`<sup>Optional</sup> <a name="LogsAnomalyDetection" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationConfig.property.logsAnomalyDetection"></a>

```go
LogsAnomalyDetection interface{}
```

- *Type:* interface{}

logs_anomaly_detection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/devopsguru_service_integration#logs_anomaly_detection DevopsguruServiceIntegration#logs_anomaly_detection}

---

##### `OpsCenter`<sup>Optional</sup> <a name="OpsCenter" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationConfig.property.opsCenter"></a>

```go
OpsCenter interface{}
```

- *Type:* interface{}

ops_center block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/devopsguru_service_integration#ops_center DevopsguruServiceIntegration#ops_center}

---

### DevopsguruServiceIntegrationKmsServerSideEncryption <a name="DevopsguruServiceIntegrationKmsServerSideEncryption" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryption.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/devopsguruserviceintegration"

&devopsguruserviceintegration.DevopsguruServiceIntegrationKmsServerSideEncryption {
	KmsKeyId: *string,
	OptInStatus: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryption.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/devopsguru_service_integration#kms_key_id DevopsguruServiceIntegration#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryption.property.optInStatus">OptInStatus</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/devopsguru_service_integration#opt_in_status DevopsguruServiceIntegration#opt_in_status}. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryption.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/devopsguru_service_integration#type DevopsguruServiceIntegration#type}. |

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryption.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/devopsguru_service_integration#kms_key_id DevopsguruServiceIntegration#kms_key_id}.

---

##### `OptInStatus`<sup>Optional</sup> <a name="OptInStatus" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryption.property.optInStatus"></a>

```go
OptInStatus *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/devopsguru_service_integration#opt_in_status DevopsguruServiceIntegration#opt_in_status}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryption.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/devopsguru_service_integration#type DevopsguruServiceIntegration#type}.

---

### DevopsguruServiceIntegrationLogsAnomalyDetection <a name="DevopsguruServiceIntegrationLogsAnomalyDetection" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetection.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/devopsguruserviceintegration"

&devopsguruserviceintegration.DevopsguruServiceIntegrationLogsAnomalyDetection {
	OptInStatus: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetection.property.optInStatus">OptInStatus</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/devopsguru_service_integration#opt_in_status DevopsguruServiceIntegration#opt_in_status}. |

---

##### `OptInStatus`<sup>Optional</sup> <a name="OptInStatus" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetection.property.optInStatus"></a>

```go
OptInStatus *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/devopsguru_service_integration#opt_in_status DevopsguruServiceIntegration#opt_in_status}.

---

### DevopsguruServiceIntegrationOpsCenter <a name="DevopsguruServiceIntegrationOpsCenter" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/devopsguruserviceintegration"

&devopsguruserviceintegration.DevopsguruServiceIntegrationOpsCenter {
	OptInStatus: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenter.property.optInStatus">OptInStatus</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/devopsguru_service_integration#opt_in_status DevopsguruServiceIntegration#opt_in_status}. |

---

##### `OptInStatus`<sup>Optional</sup> <a name="OptInStatus" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenter.property.optInStatus"></a>

```go
OptInStatus *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.79.0/docs/resources/devopsguru_service_integration#opt_in_status DevopsguruServiceIntegration#opt_in_status}.

---

## Classes <a name="Classes" id="Classes"></a>

### DevopsguruServiceIntegrationKmsServerSideEncryptionList <a name="DevopsguruServiceIntegrationKmsServerSideEncryptionList" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/devopsguruserviceintegration"

devopsguruserviceintegration.NewDevopsguruServiceIntegrationKmsServerSideEncryptionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DevopsguruServiceIntegrationKmsServerSideEncryptionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList.get"></a>

```go
func Get(index *f64) DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference <a name="DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/devopsguruserviceintegration"

devopsguruserviceintegration.NewDevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.resetOptInStatus">ResetOptInStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```

##### `ResetOptInStatus` <a name="ResetOptInStatus" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.resetOptInStatus"></a>

```go
func ResetOptInStatus()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.property.optInStatusInput">OptInStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.property.optInStatus">OptInStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `OptInStatusInput`<sup>Optional</sup> <a name="OptInStatusInput" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.property.optInStatusInput"></a>

```go
func OptInStatusInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `OptInStatus`<sup>Required</sup> <a name="OptInStatus" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.property.optInStatus"></a>

```go
func OptInStatus() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsguruServiceIntegrationLogsAnomalyDetectionList <a name="DevopsguruServiceIntegrationLogsAnomalyDetectionList" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/devopsguruserviceintegration"

devopsguruserviceintegration.NewDevopsguruServiceIntegrationLogsAnomalyDetectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DevopsguruServiceIntegrationLogsAnomalyDetectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList.get"></a>

```go
func Get(index *f64) DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference <a name="DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/devopsguruserviceintegration"

devopsguruserviceintegration.NewDevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.resetOptInStatus">ResetOptInStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOptInStatus` <a name="ResetOptInStatus" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.resetOptInStatus"></a>

```go
func ResetOptInStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.property.optInStatusInput">OptInStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.property.optInStatus">OptInStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OptInStatusInput`<sup>Optional</sup> <a name="OptInStatusInput" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.property.optInStatusInput"></a>

```go
func OptInStatusInput() *string
```

- *Type:* *string

---

##### `OptInStatus`<sup>Required</sup> <a name="OptInStatus" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.property.optInStatus"></a>

```go
func OptInStatus() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsguruServiceIntegrationOpsCenterList <a name="DevopsguruServiceIntegrationOpsCenterList" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/devopsguruserviceintegration"

devopsguruserviceintegration.NewDevopsguruServiceIntegrationOpsCenterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DevopsguruServiceIntegrationOpsCenterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList.get"></a>

```go
func Get(index *f64) DevopsguruServiceIntegrationOpsCenterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsguruServiceIntegrationOpsCenterOutputReference <a name="DevopsguruServiceIntegrationOpsCenterOutputReference" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/devopsguruserviceintegration"

devopsguruserviceintegration.NewDevopsguruServiceIntegrationOpsCenterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DevopsguruServiceIntegrationOpsCenterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.resetOptInStatus">ResetOptInStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOptInStatus` <a name="ResetOptInStatus" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.resetOptInStatus"></a>

```go
func ResetOptInStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.property.optInStatusInput">OptInStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.property.optInStatus">OptInStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OptInStatusInput`<sup>Optional</sup> <a name="OptInStatusInput" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.property.optInStatusInput"></a>

```go
func OptInStatusInput() *string
```

- *Type:* *string

---

##### `OptInStatus`<sup>Required</sup> <a name="OptInStatus" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.property.optInStatus"></a>

```go
func OptInStatus() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.devopsguruServiceIntegration.DevopsguruServiceIntegrationOpsCenterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



