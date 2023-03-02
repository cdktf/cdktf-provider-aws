# `evidentlyFeature` Submodule <a name="`evidentlyFeature` Submodule" id="@cdktf/provider-aws.evidentlyFeature"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EvidentlyFeature <a name="EvidentlyFeature" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature aws_evidently_feature}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/evidentlyfeature"

evidentlyfeature.NewEvidentlyFeature(scope Construct, id *string, config EvidentlyFeatureConfig) EvidentlyFeature
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig">EvidentlyFeatureConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig">EvidentlyFeatureConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.putVariations">PutVariations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.resetDefaultVariation">ResetDefaultVariation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.resetEntityOverrides">ResetEntityOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.resetEvaluationStrategy">ResetEvaluationStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.putTimeouts"></a>

```go
func PutTimeouts(value EvidentlyFeatureTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeouts">EvidentlyFeatureTimeouts</a>

---

##### `PutVariations` <a name="PutVariations" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.putVariations"></a>

```go
func PutVariations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.putVariations.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDefaultVariation` <a name="ResetDefaultVariation" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.resetDefaultVariation"></a>

```go
func ResetDefaultVariation()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEntityOverrides` <a name="ResetEntityOverrides" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.resetEntityOverrides"></a>

```go
func ResetEntityOverrides()
```

##### `ResetEvaluationStrategy` <a name="ResetEvaluationStrategy" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.resetEvaluationStrategy"></a>

```go
func ResetEvaluationStrategy()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/evidentlyfeature"

evidentlyfeature.EvidentlyFeature_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/evidentlyfeature"

evidentlyfeature.EvidentlyFeature_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/evidentlyfeature"

evidentlyfeature.EvidentlyFeature_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.createdTime">CreatedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.evaluationRules">EvaluationRules</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesList">EvidentlyFeatureEvaluationRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.lastUpdatedTime">LastUpdatedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference">EvidentlyFeatureTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.valueType">ValueType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.variations">Variations</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsList">EvidentlyFeatureVariationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.defaultVariationInput">DefaultVariationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.entityOverridesInput">EntityOverridesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.evaluationStrategyInput">EvaluationStrategyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.variationsInput">VariationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.defaultVariation">DefaultVariation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.entityOverrides">EntityOverrides</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.evaluationStrategy">EvaluationStrategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreatedTime`<sup>Required</sup> <a name="CreatedTime" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.createdTime"></a>

```go
func CreatedTime() *string
```

- *Type:* *string

---

##### `EvaluationRules`<sup>Required</sup> <a name="EvaluationRules" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.evaluationRules"></a>

```go
func EvaluationRules() EvidentlyFeatureEvaluationRulesList
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesList">EvidentlyFeatureEvaluationRulesList</a>

---

##### `LastUpdatedTime`<sup>Required</sup> <a name="LastUpdatedTime" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.lastUpdatedTime"></a>

```go
func LastUpdatedTime() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.timeouts"></a>

```go
func Timeouts() EvidentlyFeatureTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference">EvidentlyFeatureTimeoutsOutputReference</a>

---

##### `ValueType`<sup>Required</sup> <a name="ValueType" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.valueType"></a>

```go
func ValueType() *string
```

- *Type:* *string

---

##### `Variations`<sup>Required</sup> <a name="Variations" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.variations"></a>

```go
func Variations() EvidentlyFeatureVariationsList
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsList">EvidentlyFeatureVariationsList</a>

---

##### `DefaultVariationInput`<sup>Optional</sup> <a name="DefaultVariationInput" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.defaultVariationInput"></a>

```go
func DefaultVariationInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EntityOverridesInput`<sup>Optional</sup> <a name="EntityOverridesInput" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.entityOverridesInput"></a>

```go
func EntityOverridesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `EvaluationStrategyInput`<sup>Optional</sup> <a name="EvaluationStrategyInput" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.evaluationStrategyInput"></a>

```go
func EvaluationStrategyInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VariationsInput`<sup>Optional</sup> <a name="VariationsInput" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.variationsInput"></a>

```go
func VariationsInput() interface{}
```

- *Type:* interface{}

---

##### `DefaultVariation`<sup>Required</sup> <a name="DefaultVariation" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.defaultVariation"></a>

```go
func DefaultVariation() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EntityOverrides`<sup>Required</sup> <a name="EntityOverrides" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.entityOverrides"></a>

```go
func EntityOverrides() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `EvaluationStrategy`<sup>Required</sup> <a name="EvaluationStrategy" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.evaluationStrategy"></a>

```go
func EvaluationStrategy() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeature.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EvidentlyFeatureConfig <a name="EvidentlyFeatureConfig" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/evidentlyfeature"

&evidentlyfeature.EvidentlyFeatureConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Project: *string,
	Variations: interface{},
	DefaultVariation: *string,
	Description: *string,
	EntityOverrides: *map[string]*string,
	EvaluationStrategy: *string,
	Id: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.evidentlyFeature.EvidentlyFeatureTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#name EvidentlyFeature#name}. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#project EvidentlyFeature#project}. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.variations">Variations</a></code> | <code>interface{}</code> | variations block. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.defaultVariation">DefaultVariation</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#default_variation EvidentlyFeature#default_variation}. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#description EvidentlyFeature#description}. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.entityOverrides">EntityOverrides</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#entity_overrides EvidentlyFeature#entity_overrides}. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.evaluationStrategy">EvaluationStrategy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#evaluation_strategy EvidentlyFeature#evaluation_strategy}. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#id EvidentlyFeature#id}. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#tags EvidentlyFeature#tags}. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#tags_all EvidentlyFeature#tags_all}. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeouts">EvidentlyFeatureTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#name EvidentlyFeature#name}.

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#project EvidentlyFeature#project}.

---

##### `Variations`<sup>Required</sup> <a name="Variations" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.variations"></a>

```go
Variations interface{}
```

- *Type:* interface{}

variations block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#variations EvidentlyFeature#variations}

---

##### `DefaultVariation`<sup>Optional</sup> <a name="DefaultVariation" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.defaultVariation"></a>

```go
DefaultVariation *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#default_variation EvidentlyFeature#default_variation}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#description EvidentlyFeature#description}.

---

##### `EntityOverrides`<sup>Optional</sup> <a name="EntityOverrides" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.entityOverrides"></a>

```go
EntityOverrides *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#entity_overrides EvidentlyFeature#entity_overrides}.

---

##### `EvaluationStrategy`<sup>Optional</sup> <a name="EvaluationStrategy" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.evaluationStrategy"></a>

```go
EvaluationStrategy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#evaluation_strategy EvidentlyFeature#evaluation_strategy}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#id EvidentlyFeature#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#tags EvidentlyFeature#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#tags_all EvidentlyFeature#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureConfig.property.timeouts"></a>

```go
Timeouts EvidentlyFeatureTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeouts">EvidentlyFeatureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#timeouts EvidentlyFeature#timeouts}

---

### EvidentlyFeatureEvaluationRules <a name="EvidentlyFeatureEvaluationRules" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/evidentlyfeature"

&evidentlyfeature.EvidentlyFeatureEvaluationRules {

}
```


### EvidentlyFeatureTimeouts <a name="EvidentlyFeatureTimeouts" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/evidentlyfeature"

&evidentlyfeature.EvidentlyFeatureTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#create EvidentlyFeature#create}. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#delete EvidentlyFeature#delete}. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#update EvidentlyFeature#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#create EvidentlyFeature#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#delete EvidentlyFeature#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#update EvidentlyFeature#update}.

---

### EvidentlyFeatureVariations <a name="EvidentlyFeatureVariations" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/evidentlyfeature"

&evidentlyfeature.EvidentlyFeatureVariations {
	Name: *string,
	Value: github.com/cdktf/cdktf-provider-aws-go/aws.evidentlyFeature.EvidentlyFeatureVariationsValue,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariations.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#name EvidentlyFeature#name}. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariations.property.value">Value</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValue">EvidentlyFeatureVariationsValue</a></code> | value block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariations.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#name EvidentlyFeature#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariations.property.value"></a>

```go
Value EvidentlyFeatureVariationsValue
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValue">EvidentlyFeatureVariationsValue</a>

value block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#value EvidentlyFeature#value}

---

### EvidentlyFeatureVariationsValue <a name="EvidentlyFeatureVariationsValue" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValue.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/evidentlyfeature"

&evidentlyfeature.EvidentlyFeatureVariationsValue {
	BoolValue: *string,
	DoubleValue: *string,
	LongValue: *string,
	StringValue: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValue.property.boolValue">BoolValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#bool_value EvidentlyFeature#bool_value}. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValue.property.doubleValue">DoubleValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#double_value EvidentlyFeature#double_value}. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValue.property.longValue">LongValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#long_value EvidentlyFeature#long_value}. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValue.property.stringValue">StringValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#string_value EvidentlyFeature#string_value}. |

---

##### `BoolValue`<sup>Optional</sup> <a name="BoolValue" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValue.property.boolValue"></a>

```go
BoolValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#bool_value EvidentlyFeature#bool_value}.

---

##### `DoubleValue`<sup>Optional</sup> <a name="DoubleValue" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValue.property.doubleValue"></a>

```go
DoubleValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#double_value EvidentlyFeature#double_value}.

---

##### `LongValue`<sup>Optional</sup> <a name="LongValue" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValue.property.longValue"></a>

```go
LongValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#long_value EvidentlyFeature#long_value}.

---

##### `StringValue`<sup>Optional</sup> <a name="StringValue" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValue.property.stringValue"></a>

```go
StringValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/evidently_feature#string_value EvidentlyFeature#string_value}.

---

## Classes <a name="Classes" id="Classes"></a>

### EvidentlyFeatureEvaluationRulesList <a name="EvidentlyFeatureEvaluationRulesList" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/evidentlyfeature"

evidentlyfeature.NewEvidentlyFeatureEvaluationRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EvidentlyFeatureEvaluationRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesList.get"></a>

```go
func Get(index *f64) EvidentlyFeatureEvaluationRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### EvidentlyFeatureEvaluationRulesOutputReference <a name="EvidentlyFeatureEvaluationRulesOutputReference" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/evidentlyfeature"

evidentlyfeature.NewEvidentlyFeatureEvaluationRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EvidentlyFeatureEvaluationRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRules">EvidentlyFeatureEvaluationRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() EvidentlyFeatureEvaluationRules
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureEvaluationRules">EvidentlyFeatureEvaluationRules</a>

---


### EvidentlyFeatureTimeoutsOutputReference <a name="EvidentlyFeatureTimeoutsOutputReference" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/evidentlyfeature"

evidentlyfeature.NewEvidentlyFeatureTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EvidentlyFeatureTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EvidentlyFeatureVariationsList <a name="EvidentlyFeatureVariationsList" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/evidentlyfeature"

evidentlyfeature.NewEvidentlyFeatureVariationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EvidentlyFeatureVariationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsList.get"></a>

```go
func Get(index *f64) EvidentlyFeatureVariationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EvidentlyFeatureVariationsOutputReference <a name="EvidentlyFeatureVariationsOutputReference" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/evidentlyfeature"

evidentlyfeature.NewEvidentlyFeatureVariationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EvidentlyFeatureVariationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.putValue">PutValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutValue` <a name="PutValue" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.putValue"></a>

```go
func PutValue(value EvidentlyFeatureVariationsValue)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.putValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValue">EvidentlyFeatureVariationsValue</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.value">Value</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference">EvidentlyFeatureVariationsValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.valueInput">ValueInput</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValue">EvidentlyFeatureVariationsValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.value"></a>

```go
func Value() EvidentlyFeatureVariationsValueOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference">EvidentlyFeatureVariationsValueOutputReference</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.valueInput"></a>

```go
func ValueInput() EvidentlyFeatureVariationsValue
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValue">EvidentlyFeatureVariationsValue</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EvidentlyFeatureVariationsValueOutputReference <a name="EvidentlyFeatureVariationsValueOutputReference" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/evidentlyfeature"

evidentlyfeature.NewEvidentlyFeatureVariationsValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EvidentlyFeatureVariationsValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.resetBoolValue">ResetBoolValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.resetDoubleValue">ResetDoubleValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.resetLongValue">ResetLongValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.resetStringValue">ResetStringValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBoolValue` <a name="ResetBoolValue" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.resetBoolValue"></a>

```go
func ResetBoolValue()
```

##### `ResetDoubleValue` <a name="ResetDoubleValue" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.resetDoubleValue"></a>

```go
func ResetDoubleValue()
```

##### `ResetLongValue` <a name="ResetLongValue" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.resetLongValue"></a>

```go
func ResetLongValue()
```

##### `ResetStringValue` <a name="ResetStringValue" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.resetStringValue"></a>

```go
func ResetStringValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.property.boolValueInput">BoolValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.property.doubleValueInput">DoubleValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.property.longValueInput">LongValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.property.stringValueInput">StringValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.property.boolValue">BoolValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.property.doubleValue">DoubleValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.property.longValue">LongValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.property.stringValue">StringValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValue">EvidentlyFeatureVariationsValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BoolValueInput`<sup>Optional</sup> <a name="BoolValueInput" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.property.boolValueInput"></a>

```go
func BoolValueInput() *string
```

- *Type:* *string

---

##### `DoubleValueInput`<sup>Optional</sup> <a name="DoubleValueInput" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.property.doubleValueInput"></a>

```go
func DoubleValueInput() *string
```

- *Type:* *string

---

##### `LongValueInput`<sup>Optional</sup> <a name="LongValueInput" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.property.longValueInput"></a>

```go
func LongValueInput() *string
```

- *Type:* *string

---

##### `StringValueInput`<sup>Optional</sup> <a name="StringValueInput" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.property.stringValueInput"></a>

```go
func StringValueInput() *string
```

- *Type:* *string

---

##### `BoolValue`<sup>Required</sup> <a name="BoolValue" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.property.boolValue"></a>

```go
func BoolValue() *string
```

- *Type:* *string

---

##### `DoubleValue`<sup>Required</sup> <a name="DoubleValue" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.property.doubleValue"></a>

```go
func DoubleValue() *string
```

- *Type:* *string

---

##### `LongValue`<sup>Required</sup> <a name="LongValue" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.property.longValue"></a>

```go
func LongValue() *string
```

- *Type:* *string

---

##### `StringValue`<sup>Required</sup> <a name="StringValue" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.property.stringValue"></a>

```go
func StringValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValueOutputReference.property.internalValue"></a>

```go
func InternalValue() EvidentlyFeatureVariationsValue
```

- *Type:* <a href="#@cdktf/provider-aws.evidentlyFeature.EvidentlyFeatureVariationsValue">EvidentlyFeatureVariationsValue</a>

---



