# `cloudwatchLogAnomalyDetector` Submodule <a name="`cloudwatchLogAnomalyDetector` Submodule" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchLogAnomalyDetector <a name="CloudwatchLogAnomalyDetector" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/cloudwatch_log_anomaly_detector aws_cloudwatch_log_anomaly_detector}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/cloudwatchloganomalydetector"

cloudwatchloganomalydetector.NewCloudwatchLogAnomalyDetector(scope Construct, id *string, config CloudwatchLogAnomalyDetectorConfig) CloudwatchLogAnomalyDetector
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig">CloudwatchLogAnomalyDetectorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig">CloudwatchLogAnomalyDetectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.resetAnomalyVisibilityTime">ResetAnomalyVisibilityTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.resetDetectorName">ResetDetectorName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.resetEvaluationFrequency">ResetEvaluationFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.resetFilterPattern">ResetFilterPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAnomalyVisibilityTime` <a name="ResetAnomalyVisibilityTime" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.resetAnomalyVisibilityTime"></a>

```go
func ResetAnomalyVisibilityTime()
```

##### `ResetDetectorName` <a name="ResetDetectorName" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.resetDetectorName"></a>

```go
func ResetDetectorName()
```

##### `ResetEvaluationFrequency` <a name="ResetEvaluationFrequency" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.resetEvaluationFrequency"></a>

```go
func ResetEvaluationFrequency()
```

##### `ResetFilterPattern` <a name="ResetFilterPattern" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.resetFilterPattern"></a>

```go
func ResetFilterPattern()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CloudwatchLogAnomalyDetector resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/cloudwatchloganomalydetector"

cloudwatchloganomalydetector.CloudwatchLogAnomalyDetector_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/cloudwatchloganomalydetector"

cloudwatchloganomalydetector.CloudwatchLogAnomalyDetector_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/cloudwatchloganomalydetector"

cloudwatchloganomalydetector.CloudwatchLogAnomalyDetector_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/cloudwatchloganomalydetector"

cloudwatchloganomalydetector.CloudwatchLogAnomalyDetector_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a CloudwatchLogAnomalyDetector resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CloudwatchLogAnomalyDetector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CloudwatchLogAnomalyDetector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/cloudwatch_log_anomaly_detector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the CloudwatchLogAnomalyDetector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.tagsAll">TagsAll</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.anomalyVisibilityTimeInput">AnomalyVisibilityTimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.detectorNameInput">DetectorNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.evaluationFrequencyInput">EvaluationFrequencyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.filterPatternInput">FilterPatternInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.logGroupArnListInput">LogGroupArnListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.anomalyVisibilityTime">AnomalyVisibilityTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.detectorName">DetectorName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.evaluationFrequency">EvaluationFrequency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.filterPattern">FilterPattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.logGroupArnList">LogGroupArnList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.tagsAll"></a>

```go
func TagsAll() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `AnomalyVisibilityTimeInput`<sup>Optional</sup> <a name="AnomalyVisibilityTimeInput" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.anomalyVisibilityTimeInput"></a>

```go
func AnomalyVisibilityTimeInput() *f64
```

- *Type:* *f64

---

##### `DetectorNameInput`<sup>Optional</sup> <a name="DetectorNameInput" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.detectorNameInput"></a>

```go
func DetectorNameInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `EvaluationFrequencyInput`<sup>Optional</sup> <a name="EvaluationFrequencyInput" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.evaluationFrequencyInput"></a>

```go
func EvaluationFrequencyInput() *string
```

- *Type:* *string

---

##### `FilterPatternInput`<sup>Optional</sup> <a name="FilterPatternInput" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.filterPatternInput"></a>

```go
func FilterPatternInput() *string
```

- *Type:* *string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `LogGroupArnListInput`<sup>Optional</sup> <a name="LogGroupArnListInput" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.logGroupArnListInput"></a>

```go
func LogGroupArnListInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AnomalyVisibilityTime`<sup>Required</sup> <a name="AnomalyVisibilityTime" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.anomalyVisibilityTime"></a>

```go
func AnomalyVisibilityTime() *f64
```

- *Type:* *f64

---

##### `DetectorName`<sup>Required</sup> <a name="DetectorName" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.detectorName"></a>

```go
func DetectorName() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `EvaluationFrequency`<sup>Required</sup> <a name="EvaluationFrequency" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.evaluationFrequency"></a>

```go
func EvaluationFrequency() *string
```

- *Type:* *string

---

##### `FilterPattern`<sup>Required</sup> <a name="FilterPattern" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.filterPattern"></a>

```go
func FilterPattern() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `LogGroupArnList`<sup>Required</sup> <a name="LogGroupArnList" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.logGroupArnList"></a>

```go
func LogGroupArnList() *[]*string
```

- *Type:* *[]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetector.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchLogAnomalyDetectorConfig <a name="CloudwatchLogAnomalyDetectorConfig" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/cloudwatchloganomalydetector"

&cloudwatchloganomalydetector.CloudwatchLogAnomalyDetectorConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Enabled: interface{},
	LogGroupArnList: *[]*string,
	AnomalyVisibilityTime: *f64,
	DetectorName: *string,
	EvaluationFrequency: *string,
	FilterPattern: *string,
	KmsKeyId: *string,
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/cloudwatch_log_anomaly_detector#enabled CloudwatchLogAnomalyDetector#enabled}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.logGroupArnList">LogGroupArnList</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/cloudwatch_log_anomaly_detector#log_group_arn_list CloudwatchLogAnomalyDetector#log_group_arn_list}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.anomalyVisibilityTime">AnomalyVisibilityTime</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/cloudwatch_log_anomaly_detector#anomaly_visibility_time CloudwatchLogAnomalyDetector#anomaly_visibility_time}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.detectorName">DetectorName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/cloudwatch_log_anomaly_detector#detector_name CloudwatchLogAnomalyDetector#detector_name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.evaluationFrequency">EvaluationFrequency</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/cloudwatch_log_anomaly_detector#evaluation_frequency CloudwatchLogAnomalyDetector#evaluation_frequency}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.filterPattern">FilterPattern</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/cloudwatch_log_anomaly_detector#filter_pattern CloudwatchLogAnomalyDetector#filter_pattern}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/cloudwatch_log_anomaly_detector#kms_key_id CloudwatchLogAnomalyDetector#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/cloudwatch_log_anomaly_detector#tags CloudwatchLogAnomalyDetector#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/cloudwatch_log_anomaly_detector#enabled CloudwatchLogAnomalyDetector#enabled}.

---

##### `LogGroupArnList`<sup>Required</sup> <a name="LogGroupArnList" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.logGroupArnList"></a>

```go
LogGroupArnList *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/cloudwatch_log_anomaly_detector#log_group_arn_list CloudwatchLogAnomalyDetector#log_group_arn_list}.

---

##### `AnomalyVisibilityTime`<sup>Optional</sup> <a name="AnomalyVisibilityTime" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.anomalyVisibilityTime"></a>

```go
AnomalyVisibilityTime *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/cloudwatch_log_anomaly_detector#anomaly_visibility_time CloudwatchLogAnomalyDetector#anomaly_visibility_time}.

---

##### `DetectorName`<sup>Optional</sup> <a name="DetectorName" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.detectorName"></a>

```go
DetectorName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/cloudwatch_log_anomaly_detector#detector_name CloudwatchLogAnomalyDetector#detector_name}.

---

##### `EvaluationFrequency`<sup>Optional</sup> <a name="EvaluationFrequency" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.evaluationFrequency"></a>

```go
EvaluationFrequency *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/cloudwatch_log_anomaly_detector#evaluation_frequency CloudwatchLogAnomalyDetector#evaluation_frequency}.

---

##### `FilterPattern`<sup>Optional</sup> <a name="FilterPattern" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.filterPattern"></a>

```go
FilterPattern *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/cloudwatch_log_anomaly_detector#filter_pattern CloudwatchLogAnomalyDetector#filter_pattern}.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/cloudwatch_log_anomaly_detector#kms_key_id CloudwatchLogAnomalyDetector#kms_key_id}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.cloudwatchLogAnomalyDetector.CloudwatchLogAnomalyDetectorConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/cloudwatch_log_anomaly_detector#tags CloudwatchLogAnomalyDetector#tags}.

---



