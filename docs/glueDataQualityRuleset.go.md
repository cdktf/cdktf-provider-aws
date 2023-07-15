# `aws_glue_data_quality_ruleset`

Refer to the Terraform Registory for docs: [`aws_glue_data_quality_ruleset`](https://registry.terraform.io/providers/hashicorp/aws/5.8.0/docs/resources/glue_data_quality_ruleset).

# `glueDataQualityRuleset` Submodule <a name="`glueDataQualityRuleset` Submodule" id="@cdktf/provider-aws.glueDataQualityRuleset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueDataQualityRuleset <a name="GlueDataQualityRuleset" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.8.0/docs/resources/glue_data_quality_ruleset aws_glue_data_quality_ruleset}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluedataqualityruleset"

gluedataqualityruleset.NewGlueDataQualityRuleset(scope Construct, id *string, config GlueDataQualityRulesetConfig) GlueDataQualityRuleset
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetConfig">GlueDataQualityRulesetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetConfig">GlueDataQualityRulesetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.putTargetTable">PutTargetTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.resetTargetTable">ResetTargetTable</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTargetTable` <a name="PutTargetTable" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.putTargetTable"></a>

```go
func PutTargetTable(value GlueDataQualityRulesetTargetTable)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.putTargetTable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTable">GlueDataQualityRulesetTargetTable</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTargetTable` <a name="ResetTargetTable" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.resetTargetTable"></a>

```go
func ResetTargetTable()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluedataqualityruleset"

gluedataqualityruleset.GlueDataQualityRuleset_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluedataqualityruleset"

gluedataqualityruleset.GlueDataQualityRuleset_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluedataqualityruleset"

gluedataqualityruleset.GlueDataQualityRuleset_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.lastModifiedOn">LastModifiedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.recommendationRunId">RecommendationRunId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.targetTable">TargetTable</a></code> | <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference">GlueDataQualityRulesetTargetTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.rulesetInput">RulesetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.targetTableInput">TargetTableInput</a></code> | <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTable">GlueDataQualityRulesetTargetTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.ruleset">Ruleset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `LastModifiedOn`<sup>Required</sup> <a name="LastModifiedOn" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.lastModifiedOn"></a>

```go
func LastModifiedOn() *string
```

- *Type:* *string

---

##### `RecommendationRunId`<sup>Required</sup> <a name="RecommendationRunId" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.recommendationRunId"></a>

```go
func RecommendationRunId() *string
```

- *Type:* *string

---

##### `TargetTable`<sup>Required</sup> <a name="TargetTable" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.targetTable"></a>

```go
func TargetTable() GlueDataQualityRulesetTargetTableOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference">GlueDataQualityRulesetTargetTableOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RulesetInput`<sup>Optional</sup> <a name="RulesetInput" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.rulesetInput"></a>

```go
func RulesetInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TargetTableInput`<sup>Optional</sup> <a name="TargetTableInput" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.targetTableInput"></a>

```go
func TargetTableInput() GlueDataQualityRulesetTargetTable
```

- *Type:* <a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTable">GlueDataQualityRulesetTargetTable</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Ruleset`<sup>Required</sup> <a name="Ruleset" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.ruleset"></a>

```go
func Ruleset() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRuleset.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GlueDataQualityRulesetConfig <a name="GlueDataQualityRulesetConfig" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluedataqualityruleset"

&gluedataqualityruleset.GlueDataQualityRulesetConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Ruleset: *string,
	Description: *string,
	Id: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	TargetTable: github.com/cdktf/cdktf-provider-aws-go/aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTable,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.8.0/docs/resources/glue_data_quality_ruleset#name GlueDataQualityRuleset#name}. |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.ruleset">Ruleset</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.8.0/docs/resources/glue_data_quality_ruleset#ruleset GlueDataQualityRuleset#ruleset}. |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.8.0/docs/resources/glue_data_quality_ruleset#description GlueDataQualityRuleset#description}. |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.8.0/docs/resources/glue_data_quality_ruleset#id GlueDataQualityRuleset#id}. |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.8.0/docs/resources/glue_data_quality_ruleset#tags GlueDataQualityRuleset#tags}. |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.8.0/docs/resources/glue_data_quality_ruleset#tags_all GlueDataQualityRuleset#tags_all}. |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.targetTable">TargetTable</a></code> | <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTable">GlueDataQualityRulesetTargetTable</a></code> | target_table block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.8.0/docs/resources/glue_data_quality_ruleset#name GlueDataQualityRuleset#name}.

---

##### `Ruleset`<sup>Required</sup> <a name="Ruleset" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.ruleset"></a>

```go
Ruleset *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.8.0/docs/resources/glue_data_quality_ruleset#ruleset GlueDataQualityRuleset#ruleset}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.8.0/docs/resources/glue_data_quality_ruleset#description GlueDataQualityRuleset#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.8.0/docs/resources/glue_data_quality_ruleset#id GlueDataQualityRuleset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.8.0/docs/resources/glue_data_quality_ruleset#tags GlueDataQualityRuleset#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.8.0/docs/resources/glue_data_quality_ruleset#tags_all GlueDataQualityRuleset#tags_all}.

---

##### `TargetTable`<sup>Optional</sup> <a name="TargetTable" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetConfig.property.targetTable"></a>

```go
TargetTable GlueDataQualityRulesetTargetTable
```

- *Type:* <a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTable">GlueDataQualityRulesetTargetTable</a>

target_table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.8.0/docs/resources/glue_data_quality_ruleset#target_table GlueDataQualityRuleset#target_table}

---

### GlueDataQualityRulesetTargetTable <a name="GlueDataQualityRulesetTargetTable" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTable.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluedataqualityruleset"

&gluedataqualityruleset.GlueDataQualityRulesetTargetTable {
	DatabaseName: *string,
	TableName: *string,
	CatalogId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTable.property.databaseName">DatabaseName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.8.0/docs/resources/glue_data_quality_ruleset#database_name GlueDataQualityRuleset#database_name}. |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTable.property.tableName">TableName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.8.0/docs/resources/glue_data_quality_ruleset#table_name GlueDataQualityRuleset#table_name}. |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTable.property.catalogId">CatalogId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.8.0/docs/resources/glue_data_quality_ruleset#catalog_id GlueDataQualityRuleset#catalog_id}. |

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTable.property.databaseName"></a>

```go
DatabaseName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.8.0/docs/resources/glue_data_quality_ruleset#database_name GlueDataQualityRuleset#database_name}.

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTable.property.tableName"></a>

```go
TableName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.8.0/docs/resources/glue_data_quality_ruleset#table_name GlueDataQualityRuleset#table_name}.

---

##### `CatalogId`<sup>Optional</sup> <a name="CatalogId" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTable.property.catalogId"></a>

```go
CatalogId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.8.0/docs/resources/glue_data_quality_ruleset#catalog_id GlueDataQualityRuleset#catalog_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### GlueDataQualityRulesetTargetTableOutputReference <a name="GlueDataQualityRulesetTargetTableOutputReference" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluedataqualityruleset"

gluedataqualityruleset.NewGlueDataQualityRulesetTargetTableOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GlueDataQualityRulesetTargetTableOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.resetCatalogId">ResetCatalogId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCatalogId` <a name="ResetCatalogId" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.resetCatalogId"></a>

```go
func ResetCatalogId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.property.catalogIdInput">CatalogIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.property.tableNameInput">TableNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.property.catalogId">CatalogId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTable">GlueDataQualityRulesetTargetTable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CatalogIdInput`<sup>Optional</sup> <a name="CatalogIdInput" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.property.catalogIdInput"></a>

```go
func CatalogIdInput() *string
```

- *Type:* *string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.property.databaseNameInput"></a>

```go
func DatabaseNameInput() *string
```

- *Type:* *string

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.property.tableNameInput"></a>

```go
func TableNameInput() *string
```

- *Type:* *string

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.property.catalogId"></a>

```go
func CatalogId() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTableOutputReference.property.internalValue"></a>

```go
func InternalValue() GlueDataQualityRulesetTargetTable
```

- *Type:* <a href="#@cdktf/provider-aws.glueDataQualityRuleset.GlueDataQualityRulesetTargetTable">GlueDataQualityRulesetTargetTable</a>

---



