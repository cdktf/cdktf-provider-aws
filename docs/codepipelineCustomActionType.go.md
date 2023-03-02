# `codepipelineCustomActionType` Submodule <a name="`codepipelineCustomActionType` Submodule" id="@cdktf/provider-aws.codepipelineCustomActionType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodepipelineCustomActionType <a name="CodepipelineCustomActionType" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type aws_codepipeline_custom_action_type}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codepipelinecustomactiontype"

codepipelinecustomactiontype.NewCodepipelineCustomActionType(scope Construct, id *string, config CodepipelineCustomActionTypeConfig) CodepipelineCustomActionType
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig">CodepipelineCustomActionTypeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig">CodepipelineCustomActionTypeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.putConfigurationProperty">PutConfigurationProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.putInputArtifactDetails">PutInputArtifactDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.putOutputArtifactDetails">PutOutputArtifactDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.putSettings">PutSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.resetConfigurationProperty">ResetConfigurationProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.resetSettings">ResetSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutConfigurationProperty` <a name="PutConfigurationProperty" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.putConfigurationProperty"></a>

```go
func PutConfigurationProperty(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.putConfigurationProperty.parameter.value"></a>

- *Type:* interface{}

---

##### `PutInputArtifactDetails` <a name="PutInputArtifactDetails" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.putInputArtifactDetails"></a>

```go
func PutInputArtifactDetails(value CodepipelineCustomActionTypeInputArtifactDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.putInputArtifactDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetails">CodepipelineCustomActionTypeInputArtifactDetails</a>

---

##### `PutOutputArtifactDetails` <a name="PutOutputArtifactDetails" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.putOutputArtifactDetails"></a>

```go
func PutOutputArtifactDetails(value CodepipelineCustomActionTypeOutputArtifactDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.putOutputArtifactDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetails">CodepipelineCustomActionTypeOutputArtifactDetails</a>

---

##### `PutSettings` <a name="PutSettings" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.putSettings"></a>

```go
func PutSettings(value CodepipelineCustomActionTypeSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings">CodepipelineCustomActionTypeSettings</a>

---

##### `ResetConfigurationProperty` <a name="ResetConfigurationProperty" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.resetConfigurationProperty"></a>

```go
func ResetConfigurationProperty()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.resetId"></a>

```go
func ResetId()
```

##### `ResetSettings` <a name="ResetSettings" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.resetSettings"></a>

```go
func ResetSettings()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.resetTagsAll"></a>

```go
func ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codepipelinecustomactiontype"

codepipelinecustomactiontype.CodepipelineCustomActionType_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codepipelinecustomactiontype"

codepipelinecustomactiontype.CodepipelineCustomActionType_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codepipelinecustomactiontype"

codepipelinecustomactiontype.CodepipelineCustomActionType_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.configurationProperty">ConfigurationProperty</a></code> | <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyList">CodepipelineCustomActionTypeConfigurationPropertyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.inputArtifactDetails">InputArtifactDetails</a></code> | <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference">CodepipelineCustomActionTypeInputArtifactDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.outputArtifactDetails">OutputArtifactDetails</a></code> | <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference">CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.settings">Settings</a></code> | <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference">CodepipelineCustomActionTypeSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.categoryInput">CategoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.configurationPropertyInput">ConfigurationPropertyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.inputArtifactDetailsInput">InputArtifactDetailsInput</a></code> | <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetails">CodepipelineCustomActionTypeInputArtifactDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.outputArtifactDetailsInput">OutputArtifactDetailsInput</a></code> | <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetails">CodepipelineCustomActionTypeOutputArtifactDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.providerNameInput">ProviderNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.settingsInput">SettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings">CodepipelineCustomActionTypeSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.category">Category</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.providerName">ProviderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.version">Version</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `ConfigurationProperty`<sup>Required</sup> <a name="ConfigurationProperty" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.configurationProperty"></a>

```go
func ConfigurationProperty() CodepipelineCustomActionTypeConfigurationPropertyList
```

- *Type:* <a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyList">CodepipelineCustomActionTypeConfigurationPropertyList</a>

---

##### `InputArtifactDetails`<sup>Required</sup> <a name="InputArtifactDetails" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.inputArtifactDetails"></a>

```go
func InputArtifactDetails() CodepipelineCustomActionTypeInputArtifactDetailsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference">CodepipelineCustomActionTypeInputArtifactDetailsOutputReference</a>

---

##### `OutputArtifactDetails`<sup>Required</sup> <a name="OutputArtifactDetails" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.outputArtifactDetails"></a>

```go
func OutputArtifactDetails() CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference">CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference</a>

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `Settings`<sup>Required</sup> <a name="Settings" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.settings"></a>

```go
func Settings() CodepipelineCustomActionTypeSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference">CodepipelineCustomActionTypeSettingsOutputReference</a>

---

##### `CategoryInput`<sup>Optional</sup> <a name="CategoryInput" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.categoryInput"></a>

```go
func CategoryInput() *string
```

- *Type:* *string

---

##### `ConfigurationPropertyInput`<sup>Optional</sup> <a name="ConfigurationPropertyInput" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.configurationPropertyInput"></a>

```go
func ConfigurationPropertyInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InputArtifactDetailsInput`<sup>Optional</sup> <a name="InputArtifactDetailsInput" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.inputArtifactDetailsInput"></a>

```go
func InputArtifactDetailsInput() CodepipelineCustomActionTypeInputArtifactDetails
```

- *Type:* <a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetails">CodepipelineCustomActionTypeInputArtifactDetails</a>

---

##### `OutputArtifactDetailsInput`<sup>Optional</sup> <a name="OutputArtifactDetailsInput" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.outputArtifactDetailsInput"></a>

```go
func OutputArtifactDetailsInput() CodepipelineCustomActionTypeOutputArtifactDetails
```

- *Type:* <a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetails">CodepipelineCustomActionTypeOutputArtifactDetails</a>

---

##### `ProviderNameInput`<sup>Optional</sup> <a name="ProviderNameInput" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.providerNameInput"></a>

```go
func ProviderNameInput() *string
```

- *Type:* *string

---

##### `SettingsInput`<sup>Optional</sup> <a name="SettingsInput" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.settingsInput"></a>

```go
func SettingsInput() CodepipelineCustomActionTypeSettings
```

- *Type:* <a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings">CodepipelineCustomActionTypeSettings</a>

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.category"></a>

```go
func Category() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ProviderName`<sup>Required</sup> <a name="ProviderName" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.providerName"></a>

```go
func ProviderName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionType.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CodepipelineCustomActionTypeConfig <a name="CodepipelineCustomActionTypeConfig" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codepipelinecustomactiontype"

&codepipelinecustomactiontype.CodepipelineCustomActionTypeConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Category: *string,
	InputArtifactDetails: github.com/cdktf/cdktf-provider-aws-go/aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetails,
	OutputArtifactDetails: github.com/cdktf/cdktf-provider-aws-go/aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetails,
	ProviderName: *string,
	Version: *string,
	ConfigurationProperty: interface{},
	Id: *string,
	Settings: github.com/cdktf/cdktf-provider-aws-go/aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.category">Category</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#category CodepipelineCustomActionType#category}. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.inputArtifactDetails">InputArtifactDetails</a></code> | <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetails">CodepipelineCustomActionTypeInputArtifactDetails</a></code> | input_artifact_details block. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.outputArtifactDetails">OutputArtifactDetails</a></code> | <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetails">CodepipelineCustomActionTypeOutputArtifactDetails</a></code> | output_artifact_details block. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.providerName">ProviderName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#provider_name CodepipelineCustomActionType#provider_name}. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#version CodepipelineCustomActionType#version}. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.configurationProperty">ConfigurationProperty</a></code> | <code>interface{}</code> | configuration_property block. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#id CodepipelineCustomActionType#id}. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.settings">Settings</a></code> | <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings">CodepipelineCustomActionTypeSettings</a></code> | settings block. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#tags CodepipelineCustomActionType#tags}. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#tags_all CodepipelineCustomActionType#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.category"></a>

```go
Category *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#category CodepipelineCustomActionType#category}.

---

##### `InputArtifactDetails`<sup>Required</sup> <a name="InputArtifactDetails" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.inputArtifactDetails"></a>

```go
InputArtifactDetails CodepipelineCustomActionTypeInputArtifactDetails
```

- *Type:* <a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetails">CodepipelineCustomActionTypeInputArtifactDetails</a>

input_artifact_details block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#input_artifact_details CodepipelineCustomActionType#input_artifact_details}

---

##### `OutputArtifactDetails`<sup>Required</sup> <a name="OutputArtifactDetails" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.outputArtifactDetails"></a>

```go
OutputArtifactDetails CodepipelineCustomActionTypeOutputArtifactDetails
```

- *Type:* <a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetails">CodepipelineCustomActionTypeOutputArtifactDetails</a>

output_artifact_details block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#output_artifact_details CodepipelineCustomActionType#output_artifact_details}

---

##### `ProviderName`<sup>Required</sup> <a name="ProviderName" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.providerName"></a>

```go
ProviderName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#provider_name CodepipelineCustomActionType#provider_name}.

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#version CodepipelineCustomActionType#version}.

---

##### `ConfigurationProperty`<sup>Optional</sup> <a name="ConfigurationProperty" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.configurationProperty"></a>

```go
ConfigurationProperty interface{}
```

- *Type:* interface{}

configuration_property block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#configuration_property CodepipelineCustomActionType#configuration_property}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#id CodepipelineCustomActionType#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Settings`<sup>Optional</sup> <a name="Settings" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.settings"></a>

```go
Settings CodepipelineCustomActionTypeSettings
```

- *Type:* <a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings">CodepipelineCustomActionTypeSettings</a>

settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#settings CodepipelineCustomActionType#settings}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#tags CodepipelineCustomActionType#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#tags_all CodepipelineCustomActionType#tags_all}.

---

### CodepipelineCustomActionTypeConfigurationProperty <a name="CodepipelineCustomActionTypeConfigurationProperty" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperty"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperty.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codepipelinecustomactiontype"

&codepipelinecustomactiontype.CodepipelineCustomActionTypeConfigurationProperty {
	Key: interface{},
	Name: *string,
	Required: interface{},
	Secret: interface{},
	Description: *string,
	Queryable: interface{},
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperty.property.key">Key</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#key CodepipelineCustomActionType#key}. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperty.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#name CodepipelineCustomActionType#name}. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperty.property.required">Required</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#required CodepipelineCustomActionType#required}. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperty.property.secret">Secret</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#secret CodepipelineCustomActionType#secret}. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperty.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#description CodepipelineCustomActionType#description}. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperty.property.queryable">Queryable</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#queryable CodepipelineCustomActionType#queryable}. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperty.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#type CodepipelineCustomActionType#type}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperty.property.key"></a>

```go
Key interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#key CodepipelineCustomActionType#key}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperty.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#name CodepipelineCustomActionType#name}.

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperty.property.required"></a>

```go
Required interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#required CodepipelineCustomActionType#required}.

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperty.property.secret"></a>

```go
Secret interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#secret CodepipelineCustomActionType#secret}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperty.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#description CodepipelineCustomActionType#description}.

---

##### `Queryable`<sup>Optional</sup> <a name="Queryable" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperty.property.queryable"></a>

```go
Queryable interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#queryable CodepipelineCustomActionType#queryable}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationProperty.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#type CodepipelineCustomActionType#type}.

---

### CodepipelineCustomActionTypeInputArtifactDetails <a name="CodepipelineCustomActionTypeInputArtifactDetails" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetails.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codepipelinecustomactiontype"

&codepipelinecustomactiontype.CodepipelineCustomActionTypeInputArtifactDetails {
	MaximumCount: *f64,
	MinimumCount: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetails.property.maximumCount">MaximumCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#maximum_count CodepipelineCustomActionType#maximum_count}. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetails.property.minimumCount">MinimumCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#minimum_count CodepipelineCustomActionType#minimum_count}. |

---

##### `MaximumCount`<sup>Required</sup> <a name="MaximumCount" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetails.property.maximumCount"></a>

```go
MaximumCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#maximum_count CodepipelineCustomActionType#maximum_count}.

---

##### `MinimumCount`<sup>Required</sup> <a name="MinimumCount" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetails.property.minimumCount"></a>

```go
MinimumCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#minimum_count CodepipelineCustomActionType#minimum_count}.

---

### CodepipelineCustomActionTypeOutputArtifactDetails <a name="CodepipelineCustomActionTypeOutputArtifactDetails" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetails.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codepipelinecustomactiontype"

&codepipelinecustomactiontype.CodepipelineCustomActionTypeOutputArtifactDetails {
	MaximumCount: *f64,
	MinimumCount: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetails.property.maximumCount">MaximumCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#maximum_count CodepipelineCustomActionType#maximum_count}. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetails.property.minimumCount">MinimumCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#minimum_count CodepipelineCustomActionType#minimum_count}. |

---

##### `MaximumCount`<sup>Required</sup> <a name="MaximumCount" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetails.property.maximumCount"></a>

```go
MaximumCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#maximum_count CodepipelineCustomActionType#maximum_count}.

---

##### `MinimumCount`<sup>Required</sup> <a name="MinimumCount" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetails.property.minimumCount"></a>

```go
MinimumCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#minimum_count CodepipelineCustomActionType#minimum_count}.

---

### CodepipelineCustomActionTypeSettings <a name="CodepipelineCustomActionTypeSettings" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codepipelinecustomactiontype"

&codepipelinecustomactiontype.CodepipelineCustomActionTypeSettings {
	EntityUrlTemplate: *string,
	ExecutionUrlTemplate: *string,
	RevisionUrlTemplate: *string,
	ThirdPartyConfigurationUrl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings.property.entityUrlTemplate">EntityUrlTemplate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#entity_url_template CodepipelineCustomActionType#entity_url_template}. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings.property.executionUrlTemplate">ExecutionUrlTemplate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#execution_url_template CodepipelineCustomActionType#execution_url_template}. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings.property.revisionUrlTemplate">RevisionUrlTemplate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#revision_url_template CodepipelineCustomActionType#revision_url_template}. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings.property.thirdPartyConfigurationUrl">ThirdPartyConfigurationUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#third_party_configuration_url CodepipelineCustomActionType#third_party_configuration_url}. |

---

##### `EntityUrlTemplate`<sup>Optional</sup> <a name="EntityUrlTemplate" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings.property.entityUrlTemplate"></a>

```go
EntityUrlTemplate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#entity_url_template CodepipelineCustomActionType#entity_url_template}.

---

##### `ExecutionUrlTemplate`<sup>Optional</sup> <a name="ExecutionUrlTemplate" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings.property.executionUrlTemplate"></a>

```go
ExecutionUrlTemplate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#execution_url_template CodepipelineCustomActionType#execution_url_template}.

---

##### `RevisionUrlTemplate`<sup>Optional</sup> <a name="RevisionUrlTemplate" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings.property.revisionUrlTemplate"></a>

```go
RevisionUrlTemplate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#revision_url_template CodepipelineCustomActionType#revision_url_template}.

---

##### `ThirdPartyConfigurationUrl`<sup>Optional</sup> <a name="ThirdPartyConfigurationUrl" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings.property.thirdPartyConfigurationUrl"></a>

```go
ThirdPartyConfigurationUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_custom_action_type#third_party_configuration_url CodepipelineCustomActionType#third_party_configuration_url}.

---

## Classes <a name="Classes" id="Classes"></a>

### CodepipelineCustomActionTypeConfigurationPropertyList <a name="CodepipelineCustomActionTypeConfigurationPropertyList" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codepipelinecustomactiontype"

codepipelinecustomactiontype.NewCodepipelineCustomActionTypeConfigurationPropertyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CodepipelineCustomActionTypeConfigurationPropertyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyList.get"></a>

```go
func Get(index *f64) CodepipelineCustomActionTypeConfigurationPropertyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CodepipelineCustomActionTypeConfigurationPropertyOutputReference <a name="CodepipelineCustomActionTypeConfigurationPropertyOutputReference" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codepipelinecustomactiontype"

codepipelinecustomactiontype.NewCodepipelineCustomActionTypeConfigurationPropertyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CodepipelineCustomActionTypeConfigurationPropertyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.resetQueryable">ResetQueryable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetQueryable` <a name="ResetQueryable" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.resetQueryable"></a>

```go
func ResetQueryable()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.keyInput">KeyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.queryableInput">QueryableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.requiredInput">RequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.secretInput">SecretInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.key">Key</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.queryable">Queryable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.required">Required</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.secret">Secret</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.keyInput"></a>

```go
func KeyInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `QueryableInput`<sup>Optional</sup> <a name="QueryableInput" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.queryableInput"></a>

```go
func QueryableInput() interface{}
```

- *Type:* interface{}

---

##### `RequiredInput`<sup>Optional</sup> <a name="RequiredInput" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.requiredInput"></a>

```go
func RequiredInput() interface{}
```

- *Type:* interface{}

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.secretInput"></a>

```go
func SecretInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.key"></a>

```go
func Key() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Queryable`<sup>Required</sup> <a name="Queryable" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.queryable"></a>

```go
func Queryable() interface{}
```

- *Type:* interface{}

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.required"></a>

```go
func Required() interface{}
```

- *Type:* interface{}

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.secret"></a>

```go
func Secret() interface{}
```

- *Type:* interface{}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeConfigurationPropertyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CodepipelineCustomActionTypeInputArtifactDetailsOutputReference <a name="CodepipelineCustomActionTypeInputArtifactDetailsOutputReference" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codepipelinecustomactiontype"

codepipelinecustomactiontype.NewCodepipelineCustomActionTypeInputArtifactDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CodepipelineCustomActionTypeInputArtifactDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.maximumCountInput">MaximumCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.minimumCountInput">MinimumCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.maximumCount">MaximumCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.minimumCount">MinimumCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetails">CodepipelineCustomActionTypeInputArtifactDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaximumCountInput`<sup>Optional</sup> <a name="MaximumCountInput" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.maximumCountInput"></a>

```go
func MaximumCountInput() *f64
```

- *Type:* *f64

---

##### `MinimumCountInput`<sup>Optional</sup> <a name="MinimumCountInput" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.minimumCountInput"></a>

```go
func MinimumCountInput() *f64
```

- *Type:* *f64

---

##### `MaximumCount`<sup>Required</sup> <a name="MaximumCount" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.maximumCount"></a>

```go
func MaximumCount() *f64
```

- *Type:* *f64

---

##### `MinimumCount`<sup>Required</sup> <a name="MinimumCount" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.minimumCount"></a>

```go
func MinimumCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() CodepipelineCustomActionTypeInputArtifactDetails
```

- *Type:* <a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeInputArtifactDetails">CodepipelineCustomActionTypeInputArtifactDetails</a>

---


### CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference <a name="CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codepipelinecustomactiontype"

codepipelinecustomactiontype.NewCodepipelineCustomActionTypeOutputArtifactDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.maximumCountInput">MaximumCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.minimumCountInput">MinimumCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.maximumCount">MaximumCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.minimumCount">MinimumCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetails">CodepipelineCustomActionTypeOutputArtifactDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaximumCountInput`<sup>Optional</sup> <a name="MaximumCountInput" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.maximumCountInput"></a>

```go
func MaximumCountInput() *f64
```

- *Type:* *f64

---

##### `MinimumCountInput`<sup>Optional</sup> <a name="MinimumCountInput" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.minimumCountInput"></a>

```go
func MinimumCountInput() *f64
```

- *Type:* *f64

---

##### `MaximumCount`<sup>Required</sup> <a name="MaximumCount" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.maximumCount"></a>

```go
func MaximumCount() *f64
```

- *Type:* *f64

---

##### `MinimumCount`<sup>Required</sup> <a name="MinimumCount" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.minimumCount"></a>

```go
func MinimumCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() CodepipelineCustomActionTypeOutputArtifactDetails
```

- *Type:* <a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeOutputArtifactDetails">CodepipelineCustomActionTypeOutputArtifactDetails</a>

---


### CodepipelineCustomActionTypeSettingsOutputReference <a name="CodepipelineCustomActionTypeSettingsOutputReference" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codepipelinecustomactiontype"

codepipelinecustomactiontype.NewCodepipelineCustomActionTypeSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CodepipelineCustomActionTypeSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.resetEntityUrlTemplate">ResetEntityUrlTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.resetExecutionUrlTemplate">ResetExecutionUrlTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.resetRevisionUrlTemplate">ResetRevisionUrlTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.resetThirdPartyConfigurationUrl">ResetThirdPartyConfigurationUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEntityUrlTemplate` <a name="ResetEntityUrlTemplate" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.resetEntityUrlTemplate"></a>

```go
func ResetEntityUrlTemplate()
```

##### `ResetExecutionUrlTemplate` <a name="ResetExecutionUrlTemplate" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.resetExecutionUrlTemplate"></a>

```go
func ResetExecutionUrlTemplate()
```

##### `ResetRevisionUrlTemplate` <a name="ResetRevisionUrlTemplate" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.resetRevisionUrlTemplate"></a>

```go
func ResetRevisionUrlTemplate()
```

##### `ResetThirdPartyConfigurationUrl` <a name="ResetThirdPartyConfigurationUrl" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.resetThirdPartyConfigurationUrl"></a>

```go
func ResetThirdPartyConfigurationUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.entityUrlTemplateInput">EntityUrlTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.executionUrlTemplateInput">ExecutionUrlTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.revisionUrlTemplateInput">RevisionUrlTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.thirdPartyConfigurationUrlInput">ThirdPartyConfigurationUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.entityUrlTemplate">EntityUrlTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.executionUrlTemplate">ExecutionUrlTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.revisionUrlTemplate">RevisionUrlTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.thirdPartyConfigurationUrl">ThirdPartyConfigurationUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings">CodepipelineCustomActionTypeSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EntityUrlTemplateInput`<sup>Optional</sup> <a name="EntityUrlTemplateInput" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.entityUrlTemplateInput"></a>

```go
func EntityUrlTemplateInput() *string
```

- *Type:* *string

---

##### `ExecutionUrlTemplateInput`<sup>Optional</sup> <a name="ExecutionUrlTemplateInput" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.executionUrlTemplateInput"></a>

```go
func ExecutionUrlTemplateInput() *string
```

- *Type:* *string

---

##### `RevisionUrlTemplateInput`<sup>Optional</sup> <a name="RevisionUrlTemplateInput" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.revisionUrlTemplateInput"></a>

```go
func RevisionUrlTemplateInput() *string
```

- *Type:* *string

---

##### `ThirdPartyConfigurationUrlInput`<sup>Optional</sup> <a name="ThirdPartyConfigurationUrlInput" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.thirdPartyConfigurationUrlInput"></a>

```go
func ThirdPartyConfigurationUrlInput() *string
```

- *Type:* *string

---

##### `EntityUrlTemplate`<sup>Required</sup> <a name="EntityUrlTemplate" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.entityUrlTemplate"></a>

```go
func EntityUrlTemplate() *string
```

- *Type:* *string

---

##### `ExecutionUrlTemplate`<sup>Required</sup> <a name="ExecutionUrlTemplate" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.executionUrlTemplate"></a>

```go
func ExecutionUrlTemplate() *string
```

- *Type:* *string

---

##### `RevisionUrlTemplate`<sup>Required</sup> <a name="RevisionUrlTemplate" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.revisionUrlTemplate"></a>

```go
func RevisionUrlTemplate() *string
```

- *Type:* *string

---

##### `ThirdPartyConfigurationUrl`<sup>Required</sup> <a name="ThirdPartyConfigurationUrl" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.thirdPartyConfigurationUrl"></a>

```go
func ThirdPartyConfigurationUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() CodepipelineCustomActionTypeSettings
```

- *Type:* <a href="#@cdktf/provider-aws.codepipelineCustomActionType.CodepipelineCustomActionTypeSettings">CodepipelineCustomActionTypeSettings</a>

---



