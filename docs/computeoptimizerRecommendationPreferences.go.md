# `computeoptimizerRecommendationPreferences` Submodule <a name="`computeoptimizerRecommendationPreferences` Submodule" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeoptimizerRecommendationPreferences <a name="ComputeoptimizerRecommendationPreferences" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/computeoptimizer_recommendation_preferences aws_computeoptimizer_recommendation_preferences}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v20/computeoptimizerrecommendationpreferences"

computeoptimizerrecommendationpreferences.NewComputeoptimizerRecommendationPreferences(scope Construct, id *string, config ComputeoptimizerRecommendationPreferencesConfig) ComputeoptimizerRecommendationPreferences
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig">ComputeoptimizerRecommendationPreferencesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig">ComputeoptimizerRecommendationPreferencesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.putExternalMetricsPreference">PutExternalMetricsPreference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.putPreferredResource">PutPreferredResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.putScope">PutScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.putUtilizationPreference">PutUtilizationPreference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.resetEnhancedInfrastructureMetrics">ResetEnhancedInfrastructureMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.resetExternalMetricsPreference">ResetExternalMetricsPreference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.resetInferredWorkloadTypes">ResetInferredWorkloadTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.resetLookBackPeriod">ResetLookBackPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.resetPreferredResource">ResetPreferredResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.resetSavingsEstimationMode">ResetSavingsEstimationMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.resetScope">ResetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.resetUtilizationPreference">ResetUtilizationPreference</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutExternalMetricsPreference` <a name="PutExternalMetricsPreference" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.putExternalMetricsPreference"></a>

```go
func PutExternalMetricsPreference(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.putExternalMetricsPreference.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPreferredResource` <a name="PutPreferredResource" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.putPreferredResource"></a>

```go
func PutPreferredResource(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.putPreferredResource.parameter.value"></a>

- *Type:* interface{}

---

##### `PutScope` <a name="PutScope" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.putScope"></a>

```go
func PutScope(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.putScope.parameter.value"></a>

- *Type:* interface{}

---

##### `PutUtilizationPreference` <a name="PutUtilizationPreference" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.putUtilizationPreference"></a>

```go
func PutUtilizationPreference(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.putUtilizationPreference.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetEnhancedInfrastructureMetrics` <a name="ResetEnhancedInfrastructureMetrics" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.resetEnhancedInfrastructureMetrics"></a>

```go
func ResetEnhancedInfrastructureMetrics()
```

##### `ResetExternalMetricsPreference` <a name="ResetExternalMetricsPreference" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.resetExternalMetricsPreference"></a>

```go
func ResetExternalMetricsPreference()
```

##### `ResetInferredWorkloadTypes` <a name="ResetInferredWorkloadTypes" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.resetInferredWorkloadTypes"></a>

```go
func ResetInferredWorkloadTypes()
```

##### `ResetLookBackPeriod` <a name="ResetLookBackPeriod" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.resetLookBackPeriod"></a>

```go
func ResetLookBackPeriod()
```

##### `ResetPreferredResource` <a name="ResetPreferredResource" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.resetPreferredResource"></a>

```go
func ResetPreferredResource()
```

##### `ResetSavingsEstimationMode` <a name="ResetSavingsEstimationMode" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.resetSavingsEstimationMode"></a>

```go
func ResetSavingsEstimationMode()
```

##### `ResetScope` <a name="ResetScope" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.resetScope"></a>

```go
func ResetScope()
```

##### `ResetUtilizationPreference` <a name="ResetUtilizationPreference" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.resetUtilizationPreference"></a>

```go
func ResetUtilizationPreference()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeoptimizerRecommendationPreferences resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v20/computeoptimizerrecommendationpreferences"

computeoptimizerrecommendationpreferences.ComputeoptimizerRecommendationPreferences_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v20/computeoptimizerrecommendationpreferences"

computeoptimizerrecommendationpreferences.ComputeoptimizerRecommendationPreferences_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v20/computeoptimizerrecommendationpreferences"

computeoptimizerrecommendationpreferences.ComputeoptimizerRecommendationPreferences_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v20/computeoptimizerrecommendationpreferences"

computeoptimizerrecommendationpreferences.ComputeoptimizerRecommendationPreferences_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ComputeoptimizerRecommendationPreferences resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ComputeoptimizerRecommendationPreferences to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ComputeoptimizerRecommendationPreferences that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/computeoptimizer_recommendation_preferences#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ComputeoptimizerRecommendationPreferences to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.externalMetricsPreference">ExternalMetricsPreference</a></code> | <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList">ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.preferredResource">PreferredResource</a></code> | <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList">ComputeoptimizerRecommendationPreferencesPreferredResourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.scope">Scope</a></code> | <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList">ComputeoptimizerRecommendationPreferencesScopeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.utilizationPreference">UtilizationPreference</a></code> | <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList">ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.enhancedInfrastructureMetricsInput">EnhancedInfrastructureMetricsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.externalMetricsPreferenceInput">ExternalMetricsPreferenceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.inferredWorkloadTypesInput">InferredWorkloadTypesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.lookBackPeriodInput">LookBackPeriodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.preferredResourceInput">PreferredResourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.savingsEstimationModeInput">SavingsEstimationModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.scopeInput">ScopeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.utilizationPreferenceInput">UtilizationPreferenceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.enhancedInfrastructureMetrics">EnhancedInfrastructureMetrics</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.inferredWorkloadTypes">InferredWorkloadTypes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.lookBackPeriod">LookBackPeriod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.savingsEstimationMode">SavingsEstimationMode</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ExternalMetricsPreference`<sup>Required</sup> <a name="ExternalMetricsPreference" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.externalMetricsPreference"></a>

```go
func ExternalMetricsPreference() ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList
```

- *Type:* <a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList">ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PreferredResource`<sup>Required</sup> <a name="PreferredResource" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.preferredResource"></a>

```go
func PreferredResource() ComputeoptimizerRecommendationPreferencesPreferredResourceList
```

- *Type:* <a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList">ComputeoptimizerRecommendationPreferencesPreferredResourceList</a>

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.scope"></a>

```go
func Scope() ComputeoptimizerRecommendationPreferencesScopeList
```

- *Type:* <a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList">ComputeoptimizerRecommendationPreferencesScopeList</a>

---

##### `UtilizationPreference`<sup>Required</sup> <a name="UtilizationPreference" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.utilizationPreference"></a>

```go
func UtilizationPreference() ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList
```

- *Type:* <a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList">ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList</a>

---

##### `EnhancedInfrastructureMetricsInput`<sup>Optional</sup> <a name="EnhancedInfrastructureMetricsInput" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.enhancedInfrastructureMetricsInput"></a>

```go
func EnhancedInfrastructureMetricsInput() *string
```

- *Type:* *string

---

##### `ExternalMetricsPreferenceInput`<sup>Optional</sup> <a name="ExternalMetricsPreferenceInput" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.externalMetricsPreferenceInput"></a>

```go
func ExternalMetricsPreferenceInput() interface{}
```

- *Type:* interface{}

---

##### `InferredWorkloadTypesInput`<sup>Optional</sup> <a name="InferredWorkloadTypesInput" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.inferredWorkloadTypesInput"></a>

```go
func InferredWorkloadTypesInput() *string
```

- *Type:* *string

---

##### `LookBackPeriodInput`<sup>Optional</sup> <a name="LookBackPeriodInput" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.lookBackPeriodInput"></a>

```go
func LookBackPeriodInput() *string
```

- *Type:* *string

---

##### `PreferredResourceInput`<sup>Optional</sup> <a name="PreferredResourceInput" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.preferredResourceInput"></a>

```go
func PreferredResourceInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.resourceTypeInput"></a>

```go
func ResourceTypeInput() *string
```

- *Type:* *string

---

##### `SavingsEstimationModeInput`<sup>Optional</sup> <a name="SavingsEstimationModeInput" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.savingsEstimationModeInput"></a>

```go
func SavingsEstimationModeInput() *string
```

- *Type:* *string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.scopeInput"></a>

```go
func ScopeInput() interface{}
```

- *Type:* interface{}

---

##### `UtilizationPreferenceInput`<sup>Optional</sup> <a name="UtilizationPreferenceInput" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.utilizationPreferenceInput"></a>

```go
func UtilizationPreferenceInput() interface{}
```

- *Type:* interface{}

---

##### `EnhancedInfrastructureMetrics`<sup>Required</sup> <a name="EnhancedInfrastructureMetrics" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.enhancedInfrastructureMetrics"></a>

```go
func EnhancedInfrastructureMetrics() *string
```

- *Type:* *string

---

##### `InferredWorkloadTypes`<sup>Required</sup> <a name="InferredWorkloadTypes" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.inferredWorkloadTypes"></a>

```go
func InferredWorkloadTypes() *string
```

- *Type:* *string

---

##### `LookBackPeriod`<sup>Required</sup> <a name="LookBackPeriod" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.lookBackPeriod"></a>

```go
func LookBackPeriod() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `SavingsEstimationMode`<sup>Required</sup> <a name="SavingsEstimationMode" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.savingsEstimationMode"></a>

```go
func SavingsEstimationMode() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferences.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeoptimizerRecommendationPreferencesConfig <a name="ComputeoptimizerRecommendationPreferencesConfig" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v20/computeoptimizerrecommendationpreferences"

&computeoptimizerrecommendationpreferences.ComputeoptimizerRecommendationPreferencesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ResourceType: *string,
	EnhancedInfrastructureMetrics: *string,
	ExternalMetricsPreference: interface{},
	InferredWorkloadTypes: *string,
	LookBackPeriod: *string,
	PreferredResource: interface{},
	SavingsEstimationMode: *string,
	Scope: interface{},
	UtilizationPreference: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.resourceType">ResourceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/computeoptimizer_recommendation_preferences#resource_type ComputeoptimizerRecommendationPreferences#resource_type}. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.enhancedInfrastructureMetrics">EnhancedInfrastructureMetrics</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/computeoptimizer_recommendation_preferences#enhanced_infrastructure_metrics ComputeoptimizerRecommendationPreferences#enhanced_infrastructure_metrics}. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.externalMetricsPreference">ExternalMetricsPreference</a></code> | <code>interface{}</code> | external_metrics_preference block. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.inferredWorkloadTypes">InferredWorkloadTypes</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/computeoptimizer_recommendation_preferences#inferred_workload_types ComputeoptimizerRecommendationPreferences#inferred_workload_types}. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.lookBackPeriod">LookBackPeriod</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/computeoptimizer_recommendation_preferences#look_back_period ComputeoptimizerRecommendationPreferences#look_back_period}. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.preferredResource">PreferredResource</a></code> | <code>interface{}</code> | preferred_resource block. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.savingsEstimationMode">SavingsEstimationMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/computeoptimizer_recommendation_preferences#savings_estimation_mode ComputeoptimizerRecommendationPreferences#savings_estimation_mode}. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.scope">Scope</a></code> | <code>interface{}</code> | scope block. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.utilizationPreference">UtilizationPreference</a></code> | <code>interface{}</code> | utilization_preference block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.resourceType"></a>

```go
ResourceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/computeoptimizer_recommendation_preferences#resource_type ComputeoptimizerRecommendationPreferences#resource_type}.

---

##### `EnhancedInfrastructureMetrics`<sup>Optional</sup> <a name="EnhancedInfrastructureMetrics" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.enhancedInfrastructureMetrics"></a>

```go
EnhancedInfrastructureMetrics *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/computeoptimizer_recommendation_preferences#enhanced_infrastructure_metrics ComputeoptimizerRecommendationPreferences#enhanced_infrastructure_metrics}.

---

##### `ExternalMetricsPreference`<sup>Optional</sup> <a name="ExternalMetricsPreference" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.externalMetricsPreference"></a>

```go
ExternalMetricsPreference interface{}
```

- *Type:* interface{}

external_metrics_preference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/computeoptimizer_recommendation_preferences#external_metrics_preference ComputeoptimizerRecommendationPreferences#external_metrics_preference}

---

##### `InferredWorkloadTypes`<sup>Optional</sup> <a name="InferredWorkloadTypes" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.inferredWorkloadTypes"></a>

```go
InferredWorkloadTypes *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/computeoptimizer_recommendation_preferences#inferred_workload_types ComputeoptimizerRecommendationPreferences#inferred_workload_types}.

---

##### `LookBackPeriod`<sup>Optional</sup> <a name="LookBackPeriod" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.lookBackPeriod"></a>

```go
LookBackPeriod *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/computeoptimizer_recommendation_preferences#look_back_period ComputeoptimizerRecommendationPreferences#look_back_period}.

---

##### `PreferredResource`<sup>Optional</sup> <a name="PreferredResource" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.preferredResource"></a>

```go
PreferredResource interface{}
```

- *Type:* interface{}

preferred_resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/computeoptimizer_recommendation_preferences#preferred_resource ComputeoptimizerRecommendationPreferences#preferred_resource}

---

##### `SavingsEstimationMode`<sup>Optional</sup> <a name="SavingsEstimationMode" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.savingsEstimationMode"></a>

```go
SavingsEstimationMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/computeoptimizer_recommendation_preferences#savings_estimation_mode ComputeoptimizerRecommendationPreferences#savings_estimation_mode}.

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.scope"></a>

```go
Scope interface{}
```

- *Type:* interface{}

scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/computeoptimizer_recommendation_preferences#scope ComputeoptimizerRecommendationPreferences#scope}

---

##### `UtilizationPreference`<sup>Optional</sup> <a name="UtilizationPreference" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesConfig.property.utilizationPreference"></a>

```go
UtilizationPreference interface{}
```

- *Type:* interface{}

utilization_preference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/computeoptimizer_recommendation_preferences#utilization_preference ComputeoptimizerRecommendationPreferences#utilization_preference}

---

### ComputeoptimizerRecommendationPreferencesExternalMetricsPreference <a name="ComputeoptimizerRecommendationPreferencesExternalMetricsPreference" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v20/computeoptimizerrecommendationpreferences"

&computeoptimizerrecommendationpreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreference {
	Source: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreference.property.source">Source</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/computeoptimizer_recommendation_preferences#source ComputeoptimizerRecommendationPreferences#source}. |

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreference.property.source"></a>

```go
Source *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/computeoptimizer_recommendation_preferences#source ComputeoptimizerRecommendationPreferences#source}.

---

### ComputeoptimizerRecommendationPreferencesPreferredResource <a name="ComputeoptimizerRecommendationPreferencesPreferredResource" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v20/computeoptimizerrecommendationpreferences"

&computeoptimizerrecommendationpreferences.ComputeoptimizerRecommendationPreferencesPreferredResource {
	Name: *string,
	ExcludeList: *[]*string,
	IncludeList: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResource.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/computeoptimizer_recommendation_preferences#name ComputeoptimizerRecommendationPreferences#name}. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResource.property.excludeList">ExcludeList</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/computeoptimizer_recommendation_preferences#exclude_list ComputeoptimizerRecommendationPreferences#exclude_list}. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResource.property.includeList">IncludeList</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/computeoptimizer_recommendation_preferences#include_list ComputeoptimizerRecommendationPreferences#include_list}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResource.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/computeoptimizer_recommendation_preferences#name ComputeoptimizerRecommendationPreferences#name}.

---

##### `ExcludeList`<sup>Optional</sup> <a name="ExcludeList" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResource.property.excludeList"></a>

```go
ExcludeList *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/computeoptimizer_recommendation_preferences#exclude_list ComputeoptimizerRecommendationPreferences#exclude_list}.

---

##### `IncludeList`<sup>Optional</sup> <a name="IncludeList" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResource.property.includeList"></a>

```go
IncludeList *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/computeoptimizer_recommendation_preferences#include_list ComputeoptimizerRecommendationPreferences#include_list}.

---

### ComputeoptimizerRecommendationPreferencesScope <a name="ComputeoptimizerRecommendationPreferencesScope" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScope"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScope.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v20/computeoptimizerrecommendationpreferences"

&computeoptimizerrecommendationpreferences.ComputeoptimizerRecommendationPreferencesScope {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScope.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/computeoptimizer_recommendation_preferences#name ComputeoptimizerRecommendationPreferences#name}. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScope.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/computeoptimizer_recommendation_preferences#value ComputeoptimizerRecommendationPreferences#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScope.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/computeoptimizer_recommendation_preferences#name ComputeoptimizerRecommendationPreferences#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScope.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/computeoptimizer_recommendation_preferences#value ComputeoptimizerRecommendationPreferences#value}.

---

### ComputeoptimizerRecommendationPreferencesUtilizationPreference <a name="ComputeoptimizerRecommendationPreferencesUtilizationPreference" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v20/computeoptimizerrecommendationpreferences"

&computeoptimizerrecommendationpreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreference {
	MetricName: *string,
	MetricParameters: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreference.property.metricName">MetricName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/computeoptimizer_recommendation_preferences#metric_name ComputeoptimizerRecommendationPreferences#metric_name}. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreference.property.metricParameters">MetricParameters</a></code> | <code>interface{}</code> | metric_parameters block. |

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreference.property.metricName"></a>

```go
MetricName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/computeoptimizer_recommendation_preferences#metric_name ComputeoptimizerRecommendationPreferences#metric_name}.

---

##### `MetricParameters`<sup>Optional</sup> <a name="MetricParameters" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreference.property.metricParameters"></a>

```go
MetricParameters interface{}
```

- *Type:* interface{}

metric_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/computeoptimizer_recommendation_preferences#metric_parameters ComputeoptimizerRecommendationPreferences#metric_parameters}

---

### ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters <a name="ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v20/computeoptimizerrecommendationpreferences"

&computeoptimizerrecommendationpreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters {
	Headroom: *string,
	Threshold: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters.property.headroom">Headroom</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/computeoptimizer_recommendation_preferences#headroom ComputeoptimizerRecommendationPreferences#headroom}. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters.property.threshold">Threshold</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/computeoptimizer_recommendation_preferences#threshold ComputeoptimizerRecommendationPreferences#threshold}. |

---

##### `Headroom`<sup>Required</sup> <a name="Headroom" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters.property.headroom"></a>

```go
Headroom *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/computeoptimizer_recommendation_preferences#headroom ComputeoptimizerRecommendationPreferences#headroom}.

---

##### `Threshold`<sup>Optional</sup> <a name="Threshold" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters.property.threshold"></a>

```go
Threshold *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/computeoptimizer_recommendation_preferences#threshold ComputeoptimizerRecommendationPreferences#threshold}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList <a name="ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v20/computeoptimizerrecommendationpreferences"

computeoptimizerrecommendationpreferences.NewComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList.get"></a>

```go
func Get(index *f64) ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference <a name="ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v20/computeoptimizerrecommendationpreferences"

computeoptimizerrecommendationpreferences.NewComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.property.sourceInput">SourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.property.sourceInput"></a>

```go
func SourceInput() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeoptimizerRecommendationPreferencesPreferredResourceList <a name="ComputeoptimizerRecommendationPreferencesPreferredResourceList" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v20/computeoptimizerrecommendationpreferences"

computeoptimizerrecommendationpreferences.NewComputeoptimizerRecommendationPreferencesPreferredResourceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeoptimizerRecommendationPreferencesPreferredResourceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList.get"></a>

```go
func Get(index *f64) ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference <a name="ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v20/computeoptimizerrecommendationpreferences"

computeoptimizerrecommendationpreferences.NewComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.resetExcludeList">ResetExcludeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.resetIncludeList">ResetIncludeList</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExcludeList` <a name="ResetExcludeList" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.resetExcludeList"></a>

```go
func ResetExcludeList()
```

##### `ResetIncludeList` <a name="ResetIncludeList" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.resetIncludeList"></a>

```go
func ResetIncludeList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.property.excludeListInput">ExcludeListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.property.includeListInput">IncludeListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.property.excludeList">ExcludeList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.property.includeList">IncludeList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExcludeListInput`<sup>Optional</sup> <a name="ExcludeListInput" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.property.excludeListInput"></a>

```go
func ExcludeListInput() *[]*string
```

- *Type:* *[]*string

---

##### `IncludeListInput`<sup>Optional</sup> <a name="IncludeListInput" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.property.includeListInput"></a>

```go
func IncludeListInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ExcludeList`<sup>Required</sup> <a name="ExcludeList" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.property.excludeList"></a>

```go
func ExcludeList() *[]*string
```

- *Type:* *[]*string

---

##### `IncludeList`<sup>Required</sup> <a name="IncludeList" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.property.includeList"></a>

```go
func IncludeList() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeoptimizerRecommendationPreferencesScopeList <a name="ComputeoptimizerRecommendationPreferencesScopeList" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v20/computeoptimizerrecommendationpreferences"

computeoptimizerrecommendationpreferences.NewComputeoptimizerRecommendationPreferencesScopeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeoptimizerRecommendationPreferencesScopeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList.get"></a>

```go
func Get(index *f64) ComputeoptimizerRecommendationPreferencesScopeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeoptimizerRecommendationPreferencesScopeOutputReference <a name="ComputeoptimizerRecommendationPreferencesScopeOutputReference" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v20/computeoptimizerrecommendationpreferences"

computeoptimizerrecommendationpreferences.NewComputeoptimizerRecommendationPreferencesScopeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeoptimizerRecommendationPreferencesScopeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesScopeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList <a name="ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v20/computeoptimizerrecommendationpreferences"

computeoptimizerrecommendationpreferences.NewComputeoptimizerRecommendationPreferencesUtilizationPreferenceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList.get"></a>

```go
func Get(index *f64) ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList <a name="ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v20/computeoptimizerrecommendationpreferences"

computeoptimizerrecommendationpreferences.NewComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList.get"></a>

```go
func Get(index *f64) ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference <a name="ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v20/computeoptimizerrecommendationpreferences"

computeoptimizerrecommendationpreferences.NewComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.resetThreshold">ResetThreshold</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetThreshold` <a name="ResetThreshold" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.resetThreshold"></a>

```go
func ResetThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.property.headroomInput">HeadroomInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.property.thresholdInput">ThresholdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.property.headroom">Headroom</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.property.threshold">Threshold</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HeadroomInput`<sup>Optional</sup> <a name="HeadroomInput" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.property.headroomInput"></a>

```go
func HeadroomInput() *string
```

- *Type:* *string

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.property.thresholdInput"></a>

```go
func ThresholdInput() *string
```

- *Type:* *string

---

##### `Headroom`<sup>Required</sup> <a name="Headroom" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.property.headroom"></a>

```go
func Headroom() *string
```

- *Type:* *string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.property.threshold"></a>

```go
func Threshold() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference <a name="ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v20/computeoptimizerrecommendationpreferences"

computeoptimizerrecommendationpreferences.NewComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.putMetricParameters">PutMetricParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.resetMetricParameters">ResetMetricParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMetricParameters` <a name="PutMetricParameters" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.putMetricParameters"></a>

```go
func PutMetricParameters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.putMetricParameters.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetMetricParameters` <a name="ResetMetricParameters" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.resetMetricParameters"></a>

```go
func ResetMetricParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.property.metricParameters">MetricParameters</a></code> | <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList">ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.property.metricNameInput">MetricNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.property.metricParametersInput">MetricParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.property.metricName">MetricName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricParameters`<sup>Required</sup> <a name="MetricParameters" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.property.metricParameters"></a>

```go
func MetricParameters() ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList
```

- *Type:* <a href="#@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList">ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList</a>

---

##### `MetricNameInput`<sup>Optional</sup> <a name="MetricNameInput" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.property.metricNameInput"></a>

```go
func MetricNameInput() *string
```

- *Type:* *string

---

##### `MetricParametersInput`<sup>Optional</sup> <a name="MetricParametersInput" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.property.metricParametersInput"></a>

```go
func MetricParametersInput() interface{}
```

- *Type:* interface{}

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.property.metricName"></a>

```go
func MetricName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.computeoptimizerRecommendationPreferences.ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



