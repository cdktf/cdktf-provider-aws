# `sagemakerDataQualityJobDefinition` Submodule <a name="`sagemakerDataQualityJobDefinition` Submodule" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerDataQualityJobDefinition <a name="SagemakerDataQualityJobDefinition" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition aws_sagemaker_data_quality_job_definition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/sagemakerdataqualityjobdefinition"

sagemakerdataqualityjobdefinition.NewSagemakerDataQualityJobDefinition(scope Construct, id *string, config SagemakerDataQualityJobDefinitionConfig) SagemakerDataQualityJobDefinition
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig">SagemakerDataQualityJobDefinitionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig">SagemakerDataQualityJobDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putDataQualityAppSpecification">PutDataQualityAppSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putDataQualityBaselineConfig">PutDataQualityBaselineConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putDataQualityJobInput">PutDataQualityJobInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putDataQualityJobOutputConfig">PutDataQualityJobOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putJobResources">PutJobResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putNetworkConfig">PutNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putStoppingCondition">PutStoppingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.resetDataQualityBaselineConfig">ResetDataQualityBaselineConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.resetNetworkConfig">ResetNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.resetStoppingCondition">ResetStoppingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDataQualityAppSpecification` <a name="PutDataQualityAppSpecification" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putDataQualityAppSpecification"></a>

```go
func PutDataQualityAppSpecification(value SagemakerDataQualityJobDefinitionDataQualityAppSpecification)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putDataQualityAppSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecification">SagemakerDataQualityJobDefinitionDataQualityAppSpecification</a>

---

##### `PutDataQualityBaselineConfig` <a name="PutDataQualityBaselineConfig" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putDataQualityBaselineConfig"></a>

```go
func PutDataQualityBaselineConfig(value SagemakerDataQualityJobDefinitionDataQualityBaselineConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putDataQualityBaselineConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfig">SagemakerDataQualityJobDefinitionDataQualityBaselineConfig</a>

---

##### `PutDataQualityJobInput` <a name="PutDataQualityJobInput" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putDataQualityJobInput"></a>

```go
func PutDataQualityJobInput(value SagemakerDataQualityJobDefinitionDataQualityJobInput)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putDataQualityJobInput.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInput">SagemakerDataQualityJobDefinitionDataQualityJobInput</a>

---

##### `PutDataQualityJobOutputConfig` <a name="PutDataQualityJobOutputConfig" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putDataQualityJobOutputConfig"></a>

```go
func PutDataQualityJobOutputConfig(value SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putDataQualityJobOutputConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig</a>

---

##### `PutJobResources` <a name="PutJobResources" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putJobResources"></a>

```go
func PutJobResources(value SagemakerDataQualityJobDefinitionJobResources)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putJobResources.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResources">SagemakerDataQualityJobDefinitionJobResources</a>

---

##### `PutNetworkConfig` <a name="PutNetworkConfig" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putNetworkConfig"></a>

```go
func PutNetworkConfig(value SagemakerDataQualityJobDefinitionNetworkConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putNetworkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfig">SagemakerDataQualityJobDefinitionNetworkConfig</a>

---

##### `PutStoppingCondition` <a name="PutStoppingCondition" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putStoppingCondition"></a>

```go
func PutStoppingCondition(value SagemakerDataQualityJobDefinitionStoppingCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.putStoppingCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingCondition">SagemakerDataQualityJobDefinitionStoppingCondition</a>

---

##### `ResetDataQualityBaselineConfig` <a name="ResetDataQualityBaselineConfig" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.resetDataQualityBaselineConfig"></a>

```go
func ResetDataQualityBaselineConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.resetName"></a>

```go
func ResetName()
```

##### `ResetNetworkConfig` <a name="ResetNetworkConfig" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.resetNetworkConfig"></a>

```go
func ResetNetworkConfig()
```

##### `ResetStoppingCondition` <a name="ResetStoppingCondition" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.resetStoppingCondition"></a>

```go
func ResetStoppingCondition()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.resetTagsAll"></a>

```go
func ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SagemakerDataQualityJobDefinition resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/sagemakerdataqualityjobdefinition"

sagemakerdataqualityjobdefinition.SagemakerDataQualityJobDefinition_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/sagemakerdataqualityjobdefinition"

sagemakerdataqualityjobdefinition.SagemakerDataQualityJobDefinition_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/sagemakerdataqualityjobdefinition"

sagemakerdataqualityjobdefinition.SagemakerDataQualityJobDefinition_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/sagemakerdataqualityjobdefinition"

sagemakerdataqualityjobdefinition.SagemakerDataQualityJobDefinition_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SagemakerDataQualityJobDefinition resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SagemakerDataQualityJobDefinition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SagemakerDataQualityJobDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SagemakerDataQualityJobDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.dataQualityAppSpecification">DataQualityAppSpecification</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference">SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.dataQualityBaselineConfig">DataQualityBaselineConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference">SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.dataQualityJobInput">DataQualityJobInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference">SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.dataQualityJobOutputConfig">DataQualityJobOutputConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.jobResources">JobResources</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference">SagemakerDataQualityJobDefinitionJobResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.networkConfig">NetworkConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference">SagemakerDataQualityJobDefinitionNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.stoppingCondition">StoppingCondition</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference">SagemakerDataQualityJobDefinitionStoppingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.dataQualityAppSpecificationInput">DataQualityAppSpecificationInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecification">SagemakerDataQualityJobDefinitionDataQualityAppSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.dataQualityBaselineConfigInput">DataQualityBaselineConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfig">SagemakerDataQualityJobDefinitionDataQualityBaselineConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.dataQualityJobInputInput">DataQualityJobInputInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInput">SagemakerDataQualityJobDefinitionDataQualityJobInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.dataQualityJobOutputConfigInput">DataQualityJobOutputConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.jobResourcesInput">JobResourcesInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResources">SagemakerDataQualityJobDefinitionJobResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.networkConfigInput">NetworkConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfig">SagemakerDataQualityJobDefinitionNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.stoppingConditionInput">StoppingConditionInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingCondition">SagemakerDataQualityJobDefinitionStoppingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `DataQualityAppSpecification`<sup>Required</sup> <a name="DataQualityAppSpecification" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.dataQualityAppSpecification"></a>

```go
func DataQualityAppSpecification() SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference">SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference</a>

---

##### `DataQualityBaselineConfig`<sup>Required</sup> <a name="DataQualityBaselineConfig" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.dataQualityBaselineConfig"></a>

```go
func DataQualityBaselineConfig() SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference">SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference</a>

---

##### `DataQualityJobInput`<sup>Required</sup> <a name="DataQualityJobInput" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.dataQualityJobInput"></a>

```go
func DataQualityJobInput() SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference">SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference</a>

---

##### `DataQualityJobOutputConfig`<sup>Required</sup> <a name="DataQualityJobOutputConfig" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.dataQualityJobOutputConfig"></a>

```go
func DataQualityJobOutputConfig() SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference</a>

---

##### `JobResources`<sup>Required</sup> <a name="JobResources" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.jobResources"></a>

```go
func JobResources() SagemakerDataQualityJobDefinitionJobResourcesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference">SagemakerDataQualityJobDefinitionJobResourcesOutputReference</a>

---

##### `NetworkConfig`<sup>Required</sup> <a name="NetworkConfig" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.networkConfig"></a>

```go
func NetworkConfig() SagemakerDataQualityJobDefinitionNetworkConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference">SagemakerDataQualityJobDefinitionNetworkConfigOutputReference</a>

---

##### `StoppingCondition`<sup>Required</sup> <a name="StoppingCondition" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.stoppingCondition"></a>

```go
func StoppingCondition() SagemakerDataQualityJobDefinitionStoppingConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference">SagemakerDataQualityJobDefinitionStoppingConditionOutputReference</a>

---

##### `DataQualityAppSpecificationInput`<sup>Optional</sup> <a name="DataQualityAppSpecificationInput" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.dataQualityAppSpecificationInput"></a>

```go
func DataQualityAppSpecificationInput() SagemakerDataQualityJobDefinitionDataQualityAppSpecification
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecification">SagemakerDataQualityJobDefinitionDataQualityAppSpecification</a>

---

##### `DataQualityBaselineConfigInput`<sup>Optional</sup> <a name="DataQualityBaselineConfigInput" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.dataQualityBaselineConfigInput"></a>

```go
func DataQualityBaselineConfigInput() SagemakerDataQualityJobDefinitionDataQualityBaselineConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfig">SagemakerDataQualityJobDefinitionDataQualityBaselineConfig</a>

---

##### `DataQualityJobInputInput`<sup>Optional</sup> <a name="DataQualityJobInputInput" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.dataQualityJobInputInput"></a>

```go
func DataQualityJobInputInput() SagemakerDataQualityJobDefinitionDataQualityJobInput
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInput">SagemakerDataQualityJobDefinitionDataQualityJobInput</a>

---

##### `DataQualityJobOutputConfigInput`<sup>Optional</sup> <a name="DataQualityJobOutputConfigInput" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.dataQualityJobOutputConfigInput"></a>

```go
func DataQualityJobOutputConfigInput() SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `JobResourcesInput`<sup>Optional</sup> <a name="JobResourcesInput" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.jobResourcesInput"></a>

```go
func JobResourcesInput() SagemakerDataQualityJobDefinitionJobResources
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResources">SagemakerDataQualityJobDefinitionJobResources</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkConfigInput`<sup>Optional</sup> <a name="NetworkConfigInput" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.networkConfigInput"></a>

```go
func NetworkConfigInput() SagemakerDataQualityJobDefinitionNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfig">SagemakerDataQualityJobDefinitionNetworkConfig</a>

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `StoppingConditionInput`<sup>Optional</sup> <a name="StoppingConditionInput" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.stoppingConditionInput"></a>

```go
func StoppingConditionInput() SagemakerDataQualityJobDefinitionStoppingCondition
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingCondition">SagemakerDataQualityJobDefinitionStoppingCondition</a>

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinition.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerDataQualityJobDefinitionConfig <a name="SagemakerDataQualityJobDefinitionConfig" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/sagemakerdataqualityjobdefinition"

&sagemakerdataqualityjobdefinition.SagemakerDataQualityJobDefinitionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DataQualityAppSpecification: github.com/cdktf/cdktf-provider-aws-go/aws/v19.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecification,
	DataQualityJobInput: github.com/cdktf/cdktf-provider-aws-go/aws/v19.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInput,
	DataQualityJobOutputConfig: github.com/cdktf/cdktf-provider-aws-go/aws/v19.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig,
	JobResources: github.com/cdktf/cdktf-provider-aws-go/aws/v19.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResources,
	RoleArn: *string,
	DataQualityBaselineConfig: github.com/cdktf/cdktf-provider-aws-go/aws/v19.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfig,
	Id: *string,
	Name: *string,
	NetworkConfig: github.com/cdktf/cdktf-provider-aws-go/aws/v19.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfig,
	StoppingCondition: github.com/cdktf/cdktf-provider-aws-go/aws/v19.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingCondition,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.dataQualityAppSpecification">DataQualityAppSpecification</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecification">SagemakerDataQualityJobDefinitionDataQualityAppSpecification</a></code> | data_quality_app_specification block. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.dataQualityJobInput">DataQualityJobInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInput">SagemakerDataQualityJobDefinitionDataQualityJobInput</a></code> | data_quality_job_input block. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.dataQualityJobOutputConfig">DataQualityJobOutputConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig</a></code> | data_quality_job_output_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.jobResources">JobResources</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResources">SagemakerDataQualityJobDefinitionJobResources</a></code> | job_resources block. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.roleArn">RoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#role_arn SagemakerDataQualityJobDefinition#role_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.dataQualityBaselineConfig">DataQualityBaselineConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfig">SagemakerDataQualityJobDefinitionDataQualityBaselineConfig</a></code> | data_quality_baseline_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#id SagemakerDataQualityJobDefinition#id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#name SagemakerDataQualityJobDefinition#name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.networkConfig">NetworkConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfig">SagemakerDataQualityJobDefinitionNetworkConfig</a></code> | network_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.stoppingCondition">StoppingCondition</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingCondition">SagemakerDataQualityJobDefinitionStoppingCondition</a></code> | stopping_condition block. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#tags SagemakerDataQualityJobDefinition#tags}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#tags_all SagemakerDataQualityJobDefinition#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataQualityAppSpecification`<sup>Required</sup> <a name="DataQualityAppSpecification" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.dataQualityAppSpecification"></a>

```go
DataQualityAppSpecification SagemakerDataQualityJobDefinitionDataQualityAppSpecification
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecification">SagemakerDataQualityJobDefinitionDataQualityAppSpecification</a>

data_quality_app_specification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#data_quality_app_specification SagemakerDataQualityJobDefinition#data_quality_app_specification}

---

##### `DataQualityJobInput`<sup>Required</sup> <a name="DataQualityJobInput" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.dataQualityJobInput"></a>

```go
DataQualityJobInput SagemakerDataQualityJobDefinitionDataQualityJobInput
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInput">SagemakerDataQualityJobDefinitionDataQualityJobInput</a>

data_quality_job_input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#data_quality_job_input SagemakerDataQualityJobDefinition#data_quality_job_input}

---

##### `DataQualityJobOutputConfig`<sup>Required</sup> <a name="DataQualityJobOutputConfig" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.dataQualityJobOutputConfig"></a>

```go
DataQualityJobOutputConfig SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig</a>

data_quality_job_output_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#data_quality_job_output_config SagemakerDataQualityJobDefinition#data_quality_job_output_config}

---

##### `JobResources`<sup>Required</sup> <a name="JobResources" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.jobResources"></a>

```go
JobResources SagemakerDataQualityJobDefinitionJobResources
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResources">SagemakerDataQualityJobDefinitionJobResources</a>

job_resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#job_resources SagemakerDataQualityJobDefinition#job_resources}

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#role_arn SagemakerDataQualityJobDefinition#role_arn}.

---

##### `DataQualityBaselineConfig`<sup>Optional</sup> <a name="DataQualityBaselineConfig" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.dataQualityBaselineConfig"></a>

```go
DataQualityBaselineConfig SagemakerDataQualityJobDefinitionDataQualityBaselineConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfig">SagemakerDataQualityJobDefinitionDataQualityBaselineConfig</a>

data_quality_baseline_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#data_quality_baseline_config SagemakerDataQualityJobDefinition#data_quality_baseline_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#id SagemakerDataQualityJobDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#name SagemakerDataQualityJobDefinition#name}.

---

##### `NetworkConfig`<sup>Optional</sup> <a name="NetworkConfig" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.networkConfig"></a>

```go
NetworkConfig SagemakerDataQualityJobDefinitionNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfig">SagemakerDataQualityJobDefinitionNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#network_config SagemakerDataQualityJobDefinition#network_config}

---

##### `StoppingCondition`<sup>Optional</sup> <a name="StoppingCondition" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.stoppingCondition"></a>

```go
StoppingCondition SagemakerDataQualityJobDefinitionStoppingCondition
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingCondition">SagemakerDataQualityJobDefinitionStoppingCondition</a>

stopping_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#stopping_condition SagemakerDataQualityJobDefinition#stopping_condition}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#tags SagemakerDataQualityJobDefinition#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#tags_all SagemakerDataQualityJobDefinition#tags_all}.

---

### SagemakerDataQualityJobDefinitionDataQualityAppSpecification <a name="SagemakerDataQualityJobDefinitionDataQualityAppSpecification" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecification.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/sagemakerdataqualityjobdefinition"

&sagemakerdataqualityjobdefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecification {
	ImageUri: *string,
	Environment: *map[string]*string,
	PostAnalyticsProcessorSourceUri: *string,
	RecordPreprocessorSourceUri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecification.property.imageUri">ImageUri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#image_uri SagemakerDataQualityJobDefinition#image_uri}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecification.property.environment">Environment</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#environment SagemakerDataQualityJobDefinition#environment}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecification.property.postAnalyticsProcessorSourceUri">PostAnalyticsProcessorSourceUri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#post_analytics_processor_source_uri SagemakerDataQualityJobDefinition#post_analytics_processor_source_uri}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecification.property.recordPreprocessorSourceUri">RecordPreprocessorSourceUri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#record_preprocessor_source_uri SagemakerDataQualityJobDefinition#record_preprocessor_source_uri}. |

---

##### `ImageUri`<sup>Required</sup> <a name="ImageUri" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecification.property.imageUri"></a>

```go
ImageUri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#image_uri SagemakerDataQualityJobDefinition#image_uri}.

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecification.property.environment"></a>

```go
Environment *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#environment SagemakerDataQualityJobDefinition#environment}.

---

##### `PostAnalyticsProcessorSourceUri`<sup>Optional</sup> <a name="PostAnalyticsProcessorSourceUri" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecification.property.postAnalyticsProcessorSourceUri"></a>

```go
PostAnalyticsProcessorSourceUri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#post_analytics_processor_source_uri SagemakerDataQualityJobDefinition#post_analytics_processor_source_uri}.

---

##### `RecordPreprocessorSourceUri`<sup>Optional</sup> <a name="RecordPreprocessorSourceUri" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecification.property.recordPreprocessorSourceUri"></a>

```go
RecordPreprocessorSourceUri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#record_preprocessor_source_uri SagemakerDataQualityJobDefinition#record_preprocessor_source_uri}.

---

### SagemakerDataQualityJobDefinitionDataQualityBaselineConfig <a name="SagemakerDataQualityJobDefinitionDataQualityBaselineConfig" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/sagemakerdataqualityjobdefinition"

&sagemakerdataqualityjobdefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfig {
	ConstraintsResource: github.com/cdktf/cdktf-provider-aws-go/aws/v19.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource,
	StatisticsResource: github.com/cdktf/cdktf-provider-aws-go/aws/v19.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfig.property.constraintsResource">ConstraintsResource</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource">SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource</a></code> | constraints_resource block. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfig.property.statisticsResource">StatisticsResource</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource">SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource</a></code> | statistics_resource block. |

---

##### `ConstraintsResource`<sup>Optional</sup> <a name="ConstraintsResource" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfig.property.constraintsResource"></a>

```go
ConstraintsResource SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource">SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource</a>

constraints_resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#constraints_resource SagemakerDataQualityJobDefinition#constraints_resource}

---

##### `StatisticsResource`<sup>Optional</sup> <a name="StatisticsResource" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfig.property.statisticsResource"></a>

```go
StatisticsResource SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource">SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource</a>

statistics_resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#statistics_resource SagemakerDataQualityJobDefinition#statistics_resource}

---

### SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource <a name="SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/sagemakerdataqualityjobdefinition"

&sagemakerdataqualityjobdefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource {
	S3Uri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource.property.s3Uri">S3Uri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#s3_uri SagemakerDataQualityJobDefinition#s3_uri}. |

---

##### `S3Uri`<sup>Optional</sup> <a name="S3Uri" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource.property.s3Uri"></a>

```go
S3Uri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#s3_uri SagemakerDataQualityJobDefinition#s3_uri}.

---

### SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource <a name="SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/sagemakerdataqualityjobdefinition"

&sagemakerdataqualityjobdefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource {
	S3Uri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource.property.s3Uri">S3Uri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#s3_uri SagemakerDataQualityJobDefinition#s3_uri}. |

---

##### `S3Uri`<sup>Optional</sup> <a name="S3Uri" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource.property.s3Uri"></a>

```go
S3Uri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#s3_uri SagemakerDataQualityJobDefinition#s3_uri}.

---

### SagemakerDataQualityJobDefinitionDataQualityJobInput <a name="SagemakerDataQualityJobDefinitionDataQualityJobInput" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInput.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/sagemakerdataqualityjobdefinition"

&sagemakerdataqualityjobdefinition.SagemakerDataQualityJobDefinitionDataQualityJobInput {
	BatchTransformInput: github.com/cdktf/cdktf-provider-aws-go/aws/v19.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput,
	EndpointInput: github.com/cdktf/cdktf-provider-aws-go/aws/v19.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInput.property.batchTransformInput">BatchTransformInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput</a></code> | batch_transform_input block. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInput.property.endpointInput">EndpointInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput">SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput</a></code> | endpoint_input block. |

---

##### `BatchTransformInput`<sup>Optional</sup> <a name="BatchTransformInput" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInput.property.batchTransformInput"></a>

```go
BatchTransformInput SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput</a>

batch_transform_input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#batch_transform_input SagemakerDataQualityJobDefinition#batch_transform_input}

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInput.property.endpointInput"></a>

```go
EndpointInput SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput">SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput</a>

endpoint_input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#endpoint_input SagemakerDataQualityJobDefinition#endpoint_input}

---

### SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput <a name="SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/sagemakerdataqualityjobdefinition"

&sagemakerdataqualityjobdefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput {
	DataCapturedDestinationS3Uri: *string,
	DatasetFormat: github.com/cdktf/cdktf-provider-aws-go/aws/v19.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat,
	LocalPath: *string,
	S3DataDistributionType: *string,
	S3InputMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput.property.dataCapturedDestinationS3Uri">DataCapturedDestinationS3Uri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#data_captured_destination_s3_uri SagemakerDataQualityJobDefinition#data_captured_destination_s3_uri}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput.property.datasetFormat">DatasetFormat</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat</a></code> | dataset_format block. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput.property.localPath">LocalPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#local_path SagemakerDataQualityJobDefinition#local_path}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput.property.s3DataDistributionType">S3DataDistributionType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#s3_data_distribution_type SagemakerDataQualityJobDefinition#s3_data_distribution_type}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput.property.s3InputMode">S3InputMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#s3_input_mode SagemakerDataQualityJobDefinition#s3_input_mode}. |

---

##### `DataCapturedDestinationS3Uri`<sup>Required</sup> <a name="DataCapturedDestinationS3Uri" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput.property.dataCapturedDestinationS3Uri"></a>

```go
DataCapturedDestinationS3Uri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#data_captured_destination_s3_uri SagemakerDataQualityJobDefinition#data_captured_destination_s3_uri}.

---

##### `DatasetFormat`<sup>Required</sup> <a name="DatasetFormat" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput.property.datasetFormat"></a>

```go
DatasetFormat SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat</a>

dataset_format block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#dataset_format SagemakerDataQualityJobDefinition#dataset_format}

---

##### `LocalPath`<sup>Optional</sup> <a name="LocalPath" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput.property.localPath"></a>

```go
LocalPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#local_path SagemakerDataQualityJobDefinition#local_path}.

---

##### `S3DataDistributionType`<sup>Optional</sup> <a name="S3DataDistributionType" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput.property.s3DataDistributionType"></a>

```go
S3DataDistributionType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#s3_data_distribution_type SagemakerDataQualityJobDefinition#s3_data_distribution_type}.

---

##### `S3InputMode`<sup>Optional</sup> <a name="S3InputMode" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput.property.s3InputMode"></a>

```go
S3InputMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#s3_input_mode SagemakerDataQualityJobDefinition#s3_input_mode}.

---

### SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat <a name="SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/sagemakerdataqualityjobdefinition"

&sagemakerdataqualityjobdefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat {
	Csv: github.com/cdktf/cdktf-provider-aws-go/aws/v19.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv,
	Json: github.com/cdktf/cdktf-provider-aws-go/aws/v19.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat.property.csv">Csv</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv</a></code> | csv block. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat.property.json">Json</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson</a></code> | json block. |

---

##### `Csv`<sup>Optional</sup> <a name="Csv" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat.property.csv"></a>

```go
Csv SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv</a>

csv block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#csv SagemakerDataQualityJobDefinition#csv}

---

##### `Json`<sup>Optional</sup> <a name="Json" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat.property.json"></a>

```go
Json SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson</a>

json block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#json SagemakerDataQualityJobDefinition#json}

---

### SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv <a name="SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/sagemakerdataqualityjobdefinition"

&sagemakerdataqualityjobdefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv {
	Header: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv.property.header">Header</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#header SagemakerDataQualityJobDefinition#header}. |

---

##### `Header`<sup>Optional</sup> <a name="Header" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv.property.header"></a>

```go
Header interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#header SagemakerDataQualityJobDefinition#header}.

---

### SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson <a name="SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/sagemakerdataqualityjobdefinition"

&sagemakerdataqualityjobdefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson {
	Line: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson.property.line">Line</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#line SagemakerDataQualityJobDefinition#line}. |

---

##### `Line`<sup>Optional</sup> <a name="Line" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson.property.line"></a>

```go
Line interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#line SagemakerDataQualityJobDefinition#line}.

---

### SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput <a name="SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/sagemakerdataqualityjobdefinition"

&sagemakerdataqualityjobdefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput {
	EndpointName: *string,
	LocalPath: *string,
	S3DataDistributionType: *string,
	S3InputMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput.property.endpointName">EndpointName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#endpoint_name SagemakerDataQualityJobDefinition#endpoint_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput.property.localPath">LocalPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#local_path SagemakerDataQualityJobDefinition#local_path}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput.property.s3DataDistributionType">S3DataDistributionType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#s3_data_distribution_type SagemakerDataQualityJobDefinition#s3_data_distribution_type}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput.property.s3InputMode">S3InputMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#s3_input_mode SagemakerDataQualityJobDefinition#s3_input_mode}. |

---

##### `EndpointName`<sup>Required</sup> <a name="EndpointName" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput.property.endpointName"></a>

```go
EndpointName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#endpoint_name SagemakerDataQualityJobDefinition#endpoint_name}.

---

##### `LocalPath`<sup>Optional</sup> <a name="LocalPath" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput.property.localPath"></a>

```go
LocalPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#local_path SagemakerDataQualityJobDefinition#local_path}.

---

##### `S3DataDistributionType`<sup>Optional</sup> <a name="S3DataDistributionType" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput.property.s3DataDistributionType"></a>

```go
S3DataDistributionType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#s3_data_distribution_type SagemakerDataQualityJobDefinition#s3_data_distribution_type}.

---

##### `S3InputMode`<sup>Optional</sup> <a name="S3InputMode" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput.property.s3InputMode"></a>

```go
S3InputMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#s3_input_mode SagemakerDataQualityJobDefinition#s3_input_mode}.

---

### SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig <a name="SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/sagemakerdataqualityjobdefinition"

&sagemakerdataqualityjobdefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig {
	MonitoringOutputs: github.com/cdktf/cdktf-provider-aws-go/aws/v19.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs,
	KmsKeyId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig.property.monitoringOutputs">MonitoringOutputs</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs</a></code> | monitoring_outputs block. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#kms_key_id SagemakerDataQualityJobDefinition#kms_key_id}. |

---

##### `MonitoringOutputs`<sup>Required</sup> <a name="MonitoringOutputs" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig.property.monitoringOutputs"></a>

```go
MonitoringOutputs SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs</a>

monitoring_outputs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#monitoring_outputs SagemakerDataQualityJobDefinition#monitoring_outputs}

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#kms_key_id SagemakerDataQualityJobDefinition#kms_key_id}.

---

### SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs <a name="SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/sagemakerdataqualityjobdefinition"

&sagemakerdataqualityjobdefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs {
	S3Output: github.com/cdktf/cdktf-provider-aws-go/aws/v19.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs.property.s3Output">S3Output</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output</a></code> | s3_output block. |

---

##### `S3Output`<sup>Required</sup> <a name="S3Output" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs.property.s3Output"></a>

```go
S3Output SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output</a>

s3_output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#s3_output SagemakerDataQualityJobDefinition#s3_output}

---

### SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output <a name="SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/sagemakerdataqualityjobdefinition"

&sagemakerdataqualityjobdefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output {
	S3Uri: *string,
	LocalPath: *string,
	S3UploadMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output.property.s3Uri">S3Uri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#s3_uri SagemakerDataQualityJobDefinition#s3_uri}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output.property.localPath">LocalPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#local_path SagemakerDataQualityJobDefinition#local_path}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output.property.s3UploadMode">S3UploadMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#s3_upload_mode SagemakerDataQualityJobDefinition#s3_upload_mode}. |

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output.property.s3Uri"></a>

```go
S3Uri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#s3_uri SagemakerDataQualityJobDefinition#s3_uri}.

---

##### `LocalPath`<sup>Optional</sup> <a name="LocalPath" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output.property.localPath"></a>

```go
LocalPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#local_path SagemakerDataQualityJobDefinition#local_path}.

---

##### `S3UploadMode`<sup>Optional</sup> <a name="S3UploadMode" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output.property.s3UploadMode"></a>

```go
S3UploadMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#s3_upload_mode SagemakerDataQualityJobDefinition#s3_upload_mode}.

---

### SagemakerDataQualityJobDefinitionJobResources <a name="SagemakerDataQualityJobDefinitionJobResources" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResources.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/sagemakerdataqualityjobdefinition"

&sagemakerdataqualityjobdefinition.SagemakerDataQualityJobDefinitionJobResources {
	ClusterConfig: github.com/cdktf/cdktf-provider-aws-go/aws/v19.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResources.property.clusterConfig">ClusterConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfig">SagemakerDataQualityJobDefinitionJobResourcesClusterConfig</a></code> | cluster_config block. |

---

##### `ClusterConfig`<sup>Required</sup> <a name="ClusterConfig" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResources.property.clusterConfig"></a>

```go
ClusterConfig SagemakerDataQualityJobDefinitionJobResourcesClusterConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfig">SagemakerDataQualityJobDefinitionJobResourcesClusterConfig</a>

cluster_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#cluster_config SagemakerDataQualityJobDefinition#cluster_config}

---

### SagemakerDataQualityJobDefinitionJobResourcesClusterConfig <a name="SagemakerDataQualityJobDefinitionJobResourcesClusterConfig" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/sagemakerdataqualityjobdefinition"

&sagemakerdataqualityjobdefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfig {
	InstanceCount: *f64,
	InstanceType: *string,
	VolumeSizeInGb: *f64,
	VolumeKmsKeyId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfig.property.instanceCount">InstanceCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#instance_count SagemakerDataQualityJobDefinition#instance_count}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfig.property.instanceType">InstanceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#instance_type SagemakerDataQualityJobDefinition#instance_type}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfig.property.volumeSizeInGb">VolumeSizeInGb</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#volume_size_in_gb SagemakerDataQualityJobDefinition#volume_size_in_gb}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfig.property.volumeKmsKeyId">VolumeKmsKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#volume_kms_key_id SagemakerDataQualityJobDefinition#volume_kms_key_id}. |

---

##### `InstanceCount`<sup>Required</sup> <a name="InstanceCount" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfig.property.instanceCount"></a>

```go
InstanceCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#instance_count SagemakerDataQualityJobDefinition#instance_count}.

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfig.property.instanceType"></a>

```go
InstanceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#instance_type SagemakerDataQualityJobDefinition#instance_type}.

---

##### `VolumeSizeInGb`<sup>Required</sup> <a name="VolumeSizeInGb" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfig.property.volumeSizeInGb"></a>

```go
VolumeSizeInGb *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#volume_size_in_gb SagemakerDataQualityJobDefinition#volume_size_in_gb}.

---

##### `VolumeKmsKeyId`<sup>Optional</sup> <a name="VolumeKmsKeyId" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfig.property.volumeKmsKeyId"></a>

```go
VolumeKmsKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#volume_kms_key_id SagemakerDataQualityJobDefinition#volume_kms_key_id}.

---

### SagemakerDataQualityJobDefinitionNetworkConfig <a name="SagemakerDataQualityJobDefinitionNetworkConfig" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/sagemakerdataqualityjobdefinition"

&sagemakerdataqualityjobdefinition.SagemakerDataQualityJobDefinitionNetworkConfig {
	EnableInterContainerTrafficEncryption: interface{},
	EnableNetworkIsolation: interface{},
	VpcConfig: github.com/cdktf/cdktf-provider-aws-go/aws/v19.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfig.property.enableInterContainerTrafficEncryption">EnableInterContainerTrafficEncryption</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#enable_inter_container_traffic_encryption SagemakerDataQualityJobDefinition#enable_inter_container_traffic_encryption}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfig.property.enableNetworkIsolation">EnableNetworkIsolation</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#enable_network_isolation SagemakerDataQualityJobDefinition#enable_network_isolation}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfig.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig">SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig</a></code> | vpc_config block. |

---

##### `EnableInterContainerTrafficEncryption`<sup>Optional</sup> <a name="EnableInterContainerTrafficEncryption" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfig.property.enableInterContainerTrafficEncryption"></a>

```go
EnableInterContainerTrafficEncryption interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#enable_inter_container_traffic_encryption SagemakerDataQualityJobDefinition#enable_inter_container_traffic_encryption}.

---

##### `EnableNetworkIsolation`<sup>Optional</sup> <a name="EnableNetworkIsolation" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfig.property.enableNetworkIsolation"></a>

```go
EnableNetworkIsolation interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#enable_network_isolation SagemakerDataQualityJobDefinition#enable_network_isolation}.

---

##### `VpcConfig`<sup>Optional</sup> <a name="VpcConfig" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfig.property.vpcConfig"></a>

```go
VpcConfig SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig">SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig</a>

vpc_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#vpc_config SagemakerDataQualityJobDefinition#vpc_config}

---

### SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig <a name="SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/sagemakerdataqualityjobdefinition"

&sagemakerdataqualityjobdefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig {
	SecurityGroupIds: *[]*string,
	Subnets: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#security_group_ids SagemakerDataQualityJobDefinition#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig.property.subnets">Subnets</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#subnets SagemakerDataQualityJobDefinition#subnets}. |

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig.property.securityGroupIds"></a>

```go
SecurityGroupIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#security_group_ids SagemakerDataQualityJobDefinition#security_group_ids}.

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig.property.subnets"></a>

```go
Subnets *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#subnets SagemakerDataQualityJobDefinition#subnets}.

---

### SagemakerDataQualityJobDefinitionStoppingCondition <a name="SagemakerDataQualityJobDefinitionStoppingCondition" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/sagemakerdataqualityjobdefinition"

&sagemakerdataqualityjobdefinition.SagemakerDataQualityJobDefinitionStoppingCondition {
	MaxRuntimeInSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingCondition.property.maxRuntimeInSeconds">MaxRuntimeInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#max_runtime_in_seconds SagemakerDataQualityJobDefinition#max_runtime_in_seconds}. |

---

##### `MaxRuntimeInSeconds`<sup>Optional</sup> <a name="MaxRuntimeInSeconds" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingCondition.property.maxRuntimeInSeconds"></a>

```go
MaxRuntimeInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/sagemaker_data_quality_job_definition#max_runtime_in_seconds SagemakerDataQualityJobDefinition#max_runtime_in_seconds}.

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference <a name="SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/sagemakerdataqualityjobdefinition"

sagemakerdataqualityjobdefinition.NewSagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.resetPostAnalyticsProcessorSourceUri">ResetPostAnalyticsProcessorSourceUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.resetRecordPreprocessorSourceUri">ResetRecordPreprocessorSourceUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.resetEnvironment"></a>

```go
func ResetEnvironment()
```

##### `ResetPostAnalyticsProcessorSourceUri` <a name="ResetPostAnalyticsProcessorSourceUri" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.resetPostAnalyticsProcessorSourceUri"></a>

```go
func ResetPostAnalyticsProcessorSourceUri()
```

##### `ResetRecordPreprocessorSourceUri` <a name="ResetRecordPreprocessorSourceUri" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.resetRecordPreprocessorSourceUri"></a>

```go
func ResetRecordPreprocessorSourceUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.environmentInput">EnvironmentInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.imageUriInput">ImageUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.postAnalyticsProcessorSourceUriInput">PostAnalyticsProcessorSourceUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.recordPreprocessorSourceUriInput">RecordPreprocessorSourceUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.environment">Environment</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.imageUri">ImageUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.postAnalyticsProcessorSourceUri">PostAnalyticsProcessorSourceUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.recordPreprocessorSourceUri">RecordPreprocessorSourceUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecification">SagemakerDataQualityJobDefinitionDataQualityAppSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.environmentInput"></a>

```go
func EnvironmentInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ImageUriInput`<sup>Optional</sup> <a name="ImageUriInput" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.imageUriInput"></a>

```go
func ImageUriInput() *string
```

- *Type:* *string

---

##### `PostAnalyticsProcessorSourceUriInput`<sup>Optional</sup> <a name="PostAnalyticsProcessorSourceUriInput" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.postAnalyticsProcessorSourceUriInput"></a>

```go
func PostAnalyticsProcessorSourceUriInput() *string
```

- *Type:* *string

---

##### `RecordPreprocessorSourceUriInput`<sup>Optional</sup> <a name="RecordPreprocessorSourceUriInput" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.recordPreprocessorSourceUriInput"></a>

```go
func RecordPreprocessorSourceUriInput() *string
```

- *Type:* *string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.environment"></a>

```go
func Environment() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ImageUri`<sup>Required</sup> <a name="ImageUri" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.imageUri"></a>

```go
func ImageUri() *string
```

- *Type:* *string

---

##### `PostAnalyticsProcessorSourceUri`<sup>Required</sup> <a name="PostAnalyticsProcessorSourceUri" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.postAnalyticsProcessorSourceUri"></a>

```go
func PostAnalyticsProcessorSourceUri() *string
```

- *Type:* *string

---

##### `RecordPreprocessorSourceUri`<sup>Required</sup> <a name="RecordPreprocessorSourceUri" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.recordPreprocessorSourceUri"></a>

```go
func RecordPreprocessorSourceUri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() SagemakerDataQualityJobDefinitionDataQualityAppSpecification
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityAppSpecification">SagemakerDataQualityJobDefinitionDataQualityAppSpecification</a>

---


### SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference <a name="SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/sagemakerdataqualityjobdefinition"

sagemakerdataqualityjobdefinition.NewSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.resetS3Uri">ResetS3Uri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetS3Uri` <a name="ResetS3Uri" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.resetS3Uri"></a>

```go
func ResetS3Uri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.property.s3UriInput">S3UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.property.s3Uri">S3Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource">SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3UriInput`<sup>Optional</sup> <a name="S3UriInput" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.property.s3UriInput"></a>

```go
func S3UriInput() *string
```

- *Type:* *string

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.property.s3Uri"></a>

```go
func S3Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.property.internalValue"></a>

```go
func InternalValue() SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource">SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource</a>

---


### SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference <a name="SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/sagemakerdataqualityjobdefinition"

sagemakerdataqualityjobdefinition.NewSagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.putConstraintsResource">PutConstraintsResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.putStatisticsResource">PutStatisticsResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.resetConstraintsResource">ResetConstraintsResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.resetStatisticsResource">ResetStatisticsResource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConstraintsResource` <a name="PutConstraintsResource" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.putConstraintsResource"></a>

```go
func PutConstraintsResource(value SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.putConstraintsResource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource">SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource</a>

---

##### `PutStatisticsResource` <a name="PutStatisticsResource" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.putStatisticsResource"></a>

```go
func PutStatisticsResource(value SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.putStatisticsResource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource">SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource</a>

---

##### `ResetConstraintsResource` <a name="ResetConstraintsResource" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.resetConstraintsResource"></a>

```go
func ResetConstraintsResource()
```

##### `ResetStatisticsResource` <a name="ResetStatisticsResource" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.resetStatisticsResource"></a>

```go
func ResetStatisticsResource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.property.constraintsResource">ConstraintsResource</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference">SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.property.statisticsResource">StatisticsResource</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference">SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.property.constraintsResourceInput">ConstraintsResourceInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource">SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.property.statisticsResourceInput">StatisticsResourceInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource">SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfig">SagemakerDataQualityJobDefinitionDataQualityBaselineConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConstraintsResource`<sup>Required</sup> <a name="ConstraintsResource" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.property.constraintsResource"></a>

```go
func ConstraintsResource() SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference">SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference</a>

---

##### `StatisticsResource`<sup>Required</sup> <a name="StatisticsResource" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.property.statisticsResource"></a>

```go
func StatisticsResource() SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference">SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference</a>

---

##### `ConstraintsResourceInput`<sup>Optional</sup> <a name="ConstraintsResourceInput" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.property.constraintsResourceInput"></a>

```go
func ConstraintsResourceInput() SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource">SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource</a>

---

##### `StatisticsResourceInput`<sup>Optional</sup> <a name="StatisticsResourceInput" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.property.statisticsResourceInput"></a>

```go
func StatisticsResourceInput() SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource">SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() SagemakerDataQualityJobDefinitionDataQualityBaselineConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfig">SagemakerDataQualityJobDefinitionDataQualityBaselineConfig</a>

---


### SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference <a name="SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/sagemakerdataqualityjobdefinition"

sagemakerdataqualityjobdefinition.NewSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.resetS3Uri">ResetS3Uri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetS3Uri` <a name="ResetS3Uri" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.resetS3Uri"></a>

```go
func ResetS3Uri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.property.s3UriInput">S3UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.property.s3Uri">S3Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource">SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3UriInput`<sup>Optional</sup> <a name="S3UriInput" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.property.s3UriInput"></a>

```go
func S3UriInput() *string
```

- *Type:* *string

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.property.s3Uri"></a>

```go
func S3Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.property.internalValue"></a>

```go
func InternalValue() SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource">SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource</a>

---


### SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference <a name="SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/sagemakerdataqualityjobdefinition"

sagemakerdataqualityjobdefinition.NewSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.resetHeader">ResetHeader</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHeader` <a name="ResetHeader" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.resetHeader"></a>

```go
func ResetHeader()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.headerInput">HeaderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.header">Header</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HeaderInput`<sup>Optional</sup> <a name="HeaderInput" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.headerInput"></a>

```go
func HeaderInput() interface{}
```

- *Type:* interface{}

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.header"></a>

```go
func Header() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.internalValue"></a>

```go
func InternalValue() SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv</a>

---


### SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference <a name="SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/sagemakerdataqualityjobdefinition"

sagemakerdataqualityjobdefinition.NewSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.resetLine">ResetLine</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLine` <a name="ResetLine" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.resetLine"></a>

```go
func ResetLine()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.lineInput">LineInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.line">Line</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LineInput`<sup>Optional</sup> <a name="LineInput" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.lineInput"></a>

```go
func LineInput() interface{}
```

- *Type:* interface{}

---

##### `Line`<sup>Required</sup> <a name="Line" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.line"></a>

```go
func Line() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.internalValue"></a>

```go
func InternalValue() SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson</a>

---


### SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference <a name="SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/sagemakerdataqualityjobdefinition"

sagemakerdataqualityjobdefinition.NewSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.putCsv">PutCsv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.putJson">PutJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.resetCsv">ResetCsv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.resetJson">ResetJson</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCsv` <a name="PutCsv" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.putCsv"></a>

```go
func PutCsv(value SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.putCsv.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv</a>

---

##### `PutJson` <a name="PutJson" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.putJson"></a>

```go
func PutJson(value SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.putJson.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson</a>

---

##### `ResetCsv` <a name="ResetCsv" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.resetCsv"></a>

```go
func ResetCsv()
```

##### `ResetJson` <a name="ResetJson" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.resetJson"></a>

```go
func ResetJson()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.csv">Csv</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.json">Json</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.csvInput">CsvInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.jsonInput">JsonInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Csv`<sup>Required</sup> <a name="Csv" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.csv"></a>

```go
func Csv() SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference</a>

---

##### `Json`<sup>Required</sup> <a name="Json" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.json"></a>

```go
func Json() SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference</a>

---

##### `CsvInput`<sup>Optional</sup> <a name="CsvInput" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.csvInput"></a>

```go
func CsvInput() SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv</a>

---

##### `JsonInput`<sup>Optional</sup> <a name="JsonInput" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.jsonInput"></a>

```go
func JsonInput() SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.internalValue"></a>

```go
func InternalValue() SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat</a>

---


### SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference <a name="SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/sagemakerdataqualityjobdefinition"

sagemakerdataqualityjobdefinition.NewSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.putDatasetFormat">PutDatasetFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.resetLocalPath">ResetLocalPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.resetS3DataDistributionType">ResetS3DataDistributionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.resetS3InputMode">ResetS3InputMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDatasetFormat` <a name="PutDatasetFormat" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.putDatasetFormat"></a>

```go
func PutDatasetFormat(value SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.putDatasetFormat.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat</a>

---

##### `ResetLocalPath` <a name="ResetLocalPath" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.resetLocalPath"></a>

```go
func ResetLocalPath()
```

##### `ResetS3DataDistributionType` <a name="ResetS3DataDistributionType" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.resetS3DataDistributionType"></a>

```go
func ResetS3DataDistributionType()
```

##### `ResetS3InputMode` <a name="ResetS3InputMode" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.resetS3InputMode"></a>

```go
func ResetS3InputMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.datasetFormat">DatasetFormat</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.dataCapturedDestinationS3UriInput">DataCapturedDestinationS3UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.datasetFormatInput">DatasetFormatInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.localPathInput">LocalPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.s3DataDistributionTypeInput">S3DataDistributionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.s3InputModeInput">S3InputModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.dataCapturedDestinationS3Uri">DataCapturedDestinationS3Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.localPath">LocalPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.s3DataDistributionType">S3DataDistributionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.s3InputMode">S3InputMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatasetFormat`<sup>Required</sup> <a name="DatasetFormat" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.datasetFormat"></a>

```go
func DatasetFormat() SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference</a>

---

##### `DataCapturedDestinationS3UriInput`<sup>Optional</sup> <a name="DataCapturedDestinationS3UriInput" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.dataCapturedDestinationS3UriInput"></a>

```go
func DataCapturedDestinationS3UriInput() *string
```

- *Type:* *string

---

##### `DatasetFormatInput`<sup>Optional</sup> <a name="DatasetFormatInput" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.datasetFormatInput"></a>

```go
func DatasetFormatInput() SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat</a>

---

##### `LocalPathInput`<sup>Optional</sup> <a name="LocalPathInput" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.localPathInput"></a>

```go
func LocalPathInput() *string
```

- *Type:* *string

---

##### `S3DataDistributionTypeInput`<sup>Optional</sup> <a name="S3DataDistributionTypeInput" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.s3DataDistributionTypeInput"></a>

```go
func S3DataDistributionTypeInput() *string
```

- *Type:* *string

---

##### `S3InputModeInput`<sup>Optional</sup> <a name="S3InputModeInput" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.s3InputModeInput"></a>

```go
func S3InputModeInput() *string
```

- *Type:* *string

---

##### `DataCapturedDestinationS3Uri`<sup>Required</sup> <a name="DataCapturedDestinationS3Uri" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.dataCapturedDestinationS3Uri"></a>

```go
func DataCapturedDestinationS3Uri() *string
```

- *Type:* *string

---

##### `LocalPath`<sup>Required</sup> <a name="LocalPath" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.localPath"></a>

```go
func LocalPath() *string
```

- *Type:* *string

---

##### `S3DataDistributionType`<sup>Required</sup> <a name="S3DataDistributionType" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.s3DataDistributionType"></a>

```go
func S3DataDistributionType() *string
```

- *Type:* *string

---

##### `S3InputMode`<sup>Required</sup> <a name="S3InputMode" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.s3InputMode"></a>

```go
func S3InputMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.internalValue"></a>

```go
func InternalValue() SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput</a>

---


### SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference <a name="SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/sagemakerdataqualityjobdefinition"

sagemakerdataqualityjobdefinition.NewSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.resetLocalPath">ResetLocalPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.resetS3DataDistributionType">ResetS3DataDistributionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.resetS3InputMode">ResetS3InputMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLocalPath` <a name="ResetLocalPath" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.resetLocalPath"></a>

```go
func ResetLocalPath()
```

##### `ResetS3DataDistributionType` <a name="ResetS3DataDistributionType" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.resetS3DataDistributionType"></a>

```go
func ResetS3DataDistributionType()
```

##### `ResetS3InputMode` <a name="ResetS3InputMode" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.resetS3InputMode"></a>

```go
func ResetS3InputMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.endpointNameInput">EndpointNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.localPathInput">LocalPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.s3DataDistributionTypeInput">S3DataDistributionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.s3InputModeInput">S3InputModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.endpointName">EndpointName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.localPath">LocalPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.s3DataDistributionType">S3DataDistributionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.s3InputMode">S3InputMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput">SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndpointNameInput`<sup>Optional</sup> <a name="EndpointNameInput" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.endpointNameInput"></a>

```go
func EndpointNameInput() *string
```

- *Type:* *string

---

##### `LocalPathInput`<sup>Optional</sup> <a name="LocalPathInput" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.localPathInput"></a>

```go
func LocalPathInput() *string
```

- *Type:* *string

---

##### `S3DataDistributionTypeInput`<sup>Optional</sup> <a name="S3DataDistributionTypeInput" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.s3DataDistributionTypeInput"></a>

```go
func S3DataDistributionTypeInput() *string
```

- *Type:* *string

---

##### `S3InputModeInput`<sup>Optional</sup> <a name="S3InputModeInput" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.s3InputModeInput"></a>

```go
func S3InputModeInput() *string
```

- *Type:* *string

---

##### `EndpointName`<sup>Required</sup> <a name="EndpointName" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.endpointName"></a>

```go
func EndpointName() *string
```

- *Type:* *string

---

##### `LocalPath`<sup>Required</sup> <a name="LocalPath" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.localPath"></a>

```go
func LocalPath() *string
```

- *Type:* *string

---

##### `S3DataDistributionType`<sup>Required</sup> <a name="S3DataDistributionType" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.s3DataDistributionType"></a>

```go
func S3DataDistributionType() *string
```

- *Type:* *string

---

##### `S3InputMode`<sup>Required</sup> <a name="S3InputMode" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.s3InputMode"></a>

```go
func S3InputMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.internalValue"></a>

```go
func InternalValue() SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput">SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput</a>

---


### SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference <a name="SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/sagemakerdataqualityjobdefinition"

sagemakerdataqualityjobdefinition.NewSagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.putBatchTransformInput">PutBatchTransformInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.putEndpointInput">PutEndpointInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.resetBatchTransformInput">ResetBatchTransformInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.resetEndpointInput">ResetEndpointInput</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBatchTransformInput` <a name="PutBatchTransformInput" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.putBatchTransformInput"></a>

```go
func PutBatchTransformInput(value SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.putBatchTransformInput.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput</a>

---

##### `PutEndpointInput` <a name="PutEndpointInput" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.putEndpointInput"></a>

```go
func PutEndpointInput(value SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.putEndpointInput.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput">SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput</a>

---

##### `ResetBatchTransformInput` <a name="ResetBatchTransformInput" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.resetBatchTransformInput"></a>

```go
func ResetBatchTransformInput()
```

##### `ResetEndpointInput` <a name="ResetEndpointInput" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.resetEndpointInput"></a>

```go
func ResetEndpointInput()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.property.batchTransformInput">BatchTransformInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.property.endpointInput">EndpointInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference">SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.property.batchTransformInputInput">BatchTransformInputInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.property.endpointInputInput">EndpointInputInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput">SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInput">SagemakerDataQualityJobDefinitionDataQualityJobInput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BatchTransformInput`<sup>Required</sup> <a name="BatchTransformInput" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.property.batchTransformInput"></a>

```go
func BatchTransformInput() SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference</a>

---

##### `EndpointInput`<sup>Required</sup> <a name="EndpointInput" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.property.endpointInput"></a>

```go
func EndpointInput() SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference">SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference</a>

---

##### `BatchTransformInputInput`<sup>Optional</sup> <a name="BatchTransformInputInput" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.property.batchTransformInputInput"></a>

```go
func BatchTransformInputInput() SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput">SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput</a>

---

##### `EndpointInputInput`<sup>Optional</sup> <a name="EndpointInputInput" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.property.endpointInputInput"></a>

```go
func EndpointInputInput() SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput">SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.property.internalValue"></a>

```go
func InternalValue() SagemakerDataQualityJobDefinitionDataQualityJobInput
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobInput">SagemakerDataQualityJobDefinitionDataQualityJobInput</a>

---


### SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference <a name="SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/sagemakerdataqualityjobdefinition"

sagemakerdataqualityjobdefinition.NewSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.putS3Output">PutS3Output</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3Output` <a name="PutS3Output" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.putS3Output"></a>

```go
func PutS3Output(value SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.putS3Output.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.property.s3Output">S3Output</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.property.s3OutputInput">S3OutputInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3Output`<sup>Required</sup> <a name="S3Output" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.property.s3Output"></a>

```go
func S3Output() SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference</a>

---

##### `S3OutputInput`<sup>Optional</sup> <a name="S3OutputInput" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.property.s3OutputInput"></a>

```go
func S3OutputInput() SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.property.internalValue"></a>

```go
func InternalValue() SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs</a>

---


### SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference <a name="SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/sagemakerdataqualityjobdefinition"

sagemakerdataqualityjobdefinition.NewSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.resetLocalPath">ResetLocalPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.resetS3UploadMode">ResetS3UploadMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLocalPath` <a name="ResetLocalPath" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.resetLocalPath"></a>

```go
func ResetLocalPath()
```

##### `ResetS3UploadMode` <a name="ResetS3UploadMode" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.resetS3UploadMode"></a>

```go
func ResetS3UploadMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.localPathInput">LocalPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3UploadModeInput">S3UploadModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3UriInput">S3UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.localPath">LocalPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3UploadMode">S3UploadMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3Uri">S3Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LocalPathInput`<sup>Optional</sup> <a name="LocalPathInput" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.localPathInput"></a>

```go
func LocalPathInput() *string
```

- *Type:* *string

---

##### `S3UploadModeInput`<sup>Optional</sup> <a name="S3UploadModeInput" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3UploadModeInput"></a>

```go
func S3UploadModeInput() *string
```

- *Type:* *string

---

##### `S3UriInput`<sup>Optional</sup> <a name="S3UriInput" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3UriInput"></a>

```go
func S3UriInput() *string
```

- *Type:* *string

---

##### `LocalPath`<sup>Required</sup> <a name="LocalPath" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.localPath"></a>

```go
func LocalPath() *string
```

- *Type:* *string

---

##### `S3UploadMode`<sup>Required</sup> <a name="S3UploadMode" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3UploadMode"></a>

```go
func S3UploadMode() *string
```

- *Type:* *string

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3Uri"></a>

```go
func S3Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.internalValue"></a>

```go
func InternalValue() SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output</a>

---


### SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference <a name="SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/sagemakerdataqualityjobdefinition"

sagemakerdataqualityjobdefinition.NewSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.putMonitoringOutputs">PutMonitoringOutputs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMonitoringOutputs` <a name="PutMonitoringOutputs" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.putMonitoringOutputs"></a>

```go
func PutMonitoringOutputs(value SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.putMonitoringOutputs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs</a>

---

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.property.monitoringOutputs">MonitoringOutputs</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.property.monitoringOutputsInput">MonitoringOutputsInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MonitoringOutputs`<sup>Required</sup> <a name="MonitoringOutputs" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.property.monitoringOutputs"></a>

```go
func MonitoringOutputs() SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference</a>

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `MonitoringOutputsInput`<sup>Optional</sup> <a name="MonitoringOutputsInput" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.property.monitoringOutputsInput"></a>

```go
func MonitoringOutputsInput() SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs</a>

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig">SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig</a>

---


### SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference <a name="SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/sagemakerdataqualityjobdefinition"

sagemakerdataqualityjobdefinition.NewSagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.resetVolumeKmsKeyId">ResetVolumeKmsKeyId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVolumeKmsKeyId` <a name="ResetVolumeKmsKeyId" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.resetVolumeKmsKeyId"></a>

```go
func ResetVolumeKmsKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceCountInput">InstanceCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeKmsKeyIdInput">VolumeKmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeSizeInGbInput">VolumeSizeInGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceCount">InstanceCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceType">InstanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeKmsKeyId">VolumeKmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeSizeInGb">VolumeSizeInGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfig">SagemakerDataQualityJobDefinitionJobResourcesClusterConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InstanceCountInput`<sup>Optional</sup> <a name="InstanceCountInput" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceCountInput"></a>

```go
func InstanceCountInput() *f64
```

- *Type:* *f64

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceTypeInput"></a>

```go
func InstanceTypeInput() *string
```

- *Type:* *string

---

##### `VolumeKmsKeyIdInput`<sup>Optional</sup> <a name="VolumeKmsKeyIdInput" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeKmsKeyIdInput"></a>

```go
func VolumeKmsKeyIdInput() *string
```

- *Type:* *string

---

##### `VolumeSizeInGbInput`<sup>Optional</sup> <a name="VolumeSizeInGbInput" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeSizeInGbInput"></a>

```go
func VolumeSizeInGbInput() *f64
```

- *Type:* *f64

---

##### `InstanceCount`<sup>Required</sup> <a name="InstanceCount" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceCount"></a>

```go
func InstanceCount() *f64
```

- *Type:* *f64

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceType"></a>

```go
func InstanceType() *string
```

- *Type:* *string

---

##### `VolumeKmsKeyId`<sup>Required</sup> <a name="VolumeKmsKeyId" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeKmsKeyId"></a>

```go
func VolumeKmsKeyId() *string
```

- *Type:* *string

---

##### `VolumeSizeInGb`<sup>Required</sup> <a name="VolumeSizeInGb" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeSizeInGb"></a>

```go
func VolumeSizeInGb() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() SagemakerDataQualityJobDefinitionJobResourcesClusterConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfig">SagemakerDataQualityJobDefinitionJobResourcesClusterConfig</a>

---


### SagemakerDataQualityJobDefinitionJobResourcesOutputReference <a name="SagemakerDataQualityJobDefinitionJobResourcesOutputReference" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/sagemakerdataqualityjobdefinition"

sagemakerdataqualityjobdefinition.NewSagemakerDataQualityJobDefinitionJobResourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerDataQualityJobDefinitionJobResourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.putClusterConfig">PutClusterConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClusterConfig` <a name="PutClusterConfig" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.putClusterConfig"></a>

```go
func PutClusterConfig(value SagemakerDataQualityJobDefinitionJobResourcesClusterConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.putClusterConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfig">SagemakerDataQualityJobDefinitionJobResourcesClusterConfig</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.property.clusterConfig">ClusterConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference">SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.property.clusterConfigInput">ClusterConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfig">SagemakerDataQualityJobDefinitionJobResourcesClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResources">SagemakerDataQualityJobDefinitionJobResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClusterConfig`<sup>Required</sup> <a name="ClusterConfig" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.property.clusterConfig"></a>

```go
func ClusterConfig() SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference">SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference</a>

---

##### `ClusterConfigInput`<sup>Optional</sup> <a name="ClusterConfigInput" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.property.clusterConfigInput"></a>

```go
func ClusterConfigInput() SagemakerDataQualityJobDefinitionJobResourcesClusterConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesClusterConfig">SagemakerDataQualityJobDefinitionJobResourcesClusterConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() SagemakerDataQualityJobDefinitionJobResources
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionJobResources">SagemakerDataQualityJobDefinitionJobResources</a>

---


### SagemakerDataQualityJobDefinitionNetworkConfigOutputReference <a name="SagemakerDataQualityJobDefinitionNetworkConfigOutputReference" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/sagemakerdataqualityjobdefinition"

sagemakerdataqualityjobdefinition.NewSagemakerDataQualityJobDefinitionNetworkConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerDataQualityJobDefinitionNetworkConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.putVpcConfig">PutVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.resetEnableInterContainerTrafficEncryption">ResetEnableInterContainerTrafficEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.resetEnableNetworkIsolation">ResetEnableNetworkIsolation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.resetVpcConfig">ResetVpcConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutVpcConfig` <a name="PutVpcConfig" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.putVpcConfig"></a>

```go
func PutVpcConfig(value SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.putVpcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig">SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig</a>

---

##### `ResetEnableInterContainerTrafficEncryption` <a name="ResetEnableInterContainerTrafficEncryption" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.resetEnableInterContainerTrafficEncryption"></a>

```go
func ResetEnableInterContainerTrafficEncryption()
```

##### `ResetEnableNetworkIsolation` <a name="ResetEnableNetworkIsolation" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.resetEnableNetworkIsolation"></a>

```go
func ResetEnableNetworkIsolation()
```

##### `ResetVpcConfig` <a name="ResetVpcConfig" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.resetVpcConfig"></a>

```go
func ResetVpcConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference">SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.property.enableInterContainerTrafficEncryptionInput">EnableInterContainerTrafficEncryptionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.property.enableNetworkIsolationInput">EnableNetworkIsolationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.property.vpcConfigInput">VpcConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig">SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.property.enableInterContainerTrafficEncryption">EnableInterContainerTrafficEncryption</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.property.enableNetworkIsolation">EnableNetworkIsolation</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfig">SagemakerDataQualityJobDefinitionNetworkConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `VpcConfig`<sup>Required</sup> <a name="VpcConfig" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.property.vpcConfig"></a>

```go
func VpcConfig() SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference">SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference</a>

---

##### `EnableInterContainerTrafficEncryptionInput`<sup>Optional</sup> <a name="EnableInterContainerTrafficEncryptionInput" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.property.enableInterContainerTrafficEncryptionInput"></a>

```go
func EnableInterContainerTrafficEncryptionInput() interface{}
```

- *Type:* interface{}

---

##### `EnableNetworkIsolationInput`<sup>Optional</sup> <a name="EnableNetworkIsolationInput" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.property.enableNetworkIsolationInput"></a>

```go
func EnableNetworkIsolationInput() interface{}
```

- *Type:* interface{}

---

##### `VpcConfigInput`<sup>Optional</sup> <a name="VpcConfigInput" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.property.vpcConfigInput"></a>

```go
func VpcConfigInput() SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig">SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig</a>

---

##### `EnableInterContainerTrafficEncryption`<sup>Required</sup> <a name="EnableInterContainerTrafficEncryption" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.property.enableInterContainerTrafficEncryption"></a>

```go
func EnableInterContainerTrafficEncryption() interface{}
```

- *Type:* interface{}

---

##### `EnableNetworkIsolation`<sup>Required</sup> <a name="EnableNetworkIsolation" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.property.enableNetworkIsolation"></a>

```go
func EnableNetworkIsolation() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() SagemakerDataQualityJobDefinitionNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfig">SagemakerDataQualityJobDefinitionNetworkConfig</a>

---


### SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference <a name="SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/sagemakerdataqualityjobdefinition"

sagemakerdataqualityjobdefinition.NewSagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.subnetsInput">SubnetsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.subnets">Subnets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig">SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```go
func SecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetsInput`<sup>Optional</sup> <a name="SubnetsInput" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.subnetsInput"></a>

```go
func SubnetsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.subnets"></a>

```go
func Subnets() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig">SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig</a>

---


### SagemakerDataQualityJobDefinitionStoppingConditionOutputReference <a name="SagemakerDataQualityJobDefinitionStoppingConditionOutputReference" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/sagemakerdataqualityjobdefinition"

sagemakerdataqualityjobdefinition.NewSagemakerDataQualityJobDefinitionStoppingConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerDataQualityJobDefinitionStoppingConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.resetMaxRuntimeInSeconds">ResetMaxRuntimeInSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxRuntimeInSeconds` <a name="ResetMaxRuntimeInSeconds" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.resetMaxRuntimeInSeconds"></a>

```go
func ResetMaxRuntimeInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.property.maxRuntimeInSecondsInput">MaxRuntimeInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.property.maxRuntimeInSeconds">MaxRuntimeInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingCondition">SagemakerDataQualityJobDefinitionStoppingCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxRuntimeInSecondsInput`<sup>Optional</sup> <a name="MaxRuntimeInSecondsInput" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.property.maxRuntimeInSecondsInput"></a>

```go
func MaxRuntimeInSecondsInput() *f64
```

- *Type:* *f64

---

##### `MaxRuntimeInSeconds`<sup>Required</sup> <a name="MaxRuntimeInSeconds" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.property.maxRuntimeInSeconds"></a>

```go
func MaxRuntimeInSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() SagemakerDataQualityJobDefinitionStoppingCondition
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerDataQualityJobDefinition.SagemakerDataQualityJobDefinitionStoppingCondition">SagemakerDataQualityJobDefinitionStoppingCondition</a>

---



