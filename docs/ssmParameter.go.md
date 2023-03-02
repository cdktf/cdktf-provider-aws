# `ssmParameter` Submodule <a name="`ssmParameter` Submodule" id="@cdktf/provider-aws.ssmParameter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmParameter <a name="SsmParameter" id="@cdktf/provider-aws.ssmParameter.SsmParameter"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ssm_parameter aws_ssm_parameter}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmParameter.SsmParameter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssmparameter"

ssmparameter.NewSsmParameter(scope Construct, id *string, config SsmParameterConfig) SsmParameter
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameter.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameter.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameter.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameterConfig">SsmParameterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ssmParameter.SsmParameter.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssmParameter.SsmParameter.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.ssmParameter.SsmParameter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ssmParameter.SsmParameterConfig">SsmParameterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameter.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameter.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameter.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameter.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameter.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameter.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameter.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameter.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameter.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameter.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameter.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameter.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameter.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameter.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameter.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameter.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameter.resetAllowedPattern">ResetAllowedPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameter.resetArn">ResetArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameter.resetDataType">ResetDataType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameter.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameter.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameter.resetInsecureValue">ResetInsecureValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameter.resetKeyId">ResetKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameter.resetOverwrite">ResetOverwrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameter.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameter.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameter.resetTier">ResetTier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameter.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssmParameter.SsmParameter.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.ssmParameter.SsmParameter.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ssmParameter.SsmParameter.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmParameter.SsmParameter.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.ssmParameter.SsmParameter.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ssmParameter.SsmParameter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.ssmParameter.SsmParameter.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.ssmParameter.SsmParameter.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.ssmParameter.SsmParameter.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ssmParameter.SsmParameter.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmParameter.SsmParameter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ssmParameter.SsmParameter.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmParameter.SsmParameter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ssmParameter.SsmParameter.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmParameter.SsmParameter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ssmParameter.SsmParameter.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmParameter.SsmParameter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ssmParameter.SsmParameter.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmParameter.SsmParameter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ssmParameter.SsmParameter.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmParameter.SsmParameter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ssmParameter.SsmParameter.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmParameter.SsmParameter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ssmParameter.SsmParameter.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmParameter.SsmParameter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ssmParameter.SsmParameter.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmParameter.SsmParameter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ssmParameter.SsmParameter.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmParameter.SsmParameter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAllowedPattern` <a name="ResetAllowedPattern" id="@cdktf/provider-aws.ssmParameter.SsmParameter.resetAllowedPattern"></a>

```go
func ResetAllowedPattern()
```

##### `ResetArn` <a name="ResetArn" id="@cdktf/provider-aws.ssmParameter.SsmParameter.resetArn"></a>

```go
func ResetArn()
```

##### `ResetDataType` <a name="ResetDataType" id="@cdktf/provider-aws.ssmParameter.SsmParameter.resetDataType"></a>

```go
func ResetDataType()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.ssmParameter.SsmParameter.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.ssmParameter.SsmParameter.resetId"></a>

```go
func ResetId()
```

##### `ResetInsecureValue` <a name="ResetInsecureValue" id="@cdktf/provider-aws.ssmParameter.SsmParameter.resetInsecureValue"></a>

```go
func ResetInsecureValue()
```

##### `ResetKeyId` <a name="ResetKeyId" id="@cdktf/provider-aws.ssmParameter.SsmParameter.resetKeyId"></a>

```go
func ResetKeyId()
```

##### `ResetOverwrite` <a name="ResetOverwrite" id="@cdktf/provider-aws.ssmParameter.SsmParameter.resetOverwrite"></a>

```go
func ResetOverwrite()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.ssmParameter.SsmParameter.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.ssmParameter.SsmParameter.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTier` <a name="ResetTier" id="@cdktf/provider-aws.ssmParameter.SsmParameter.resetTier"></a>

```go
func ResetTier()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-aws.ssmParameter.SsmParameter.resetValue"></a>

```go
func ResetValue()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameter.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameter.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameter.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.ssmParameter.SsmParameter.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssmparameter"

ssmparameter.SsmParameter_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssmParameter.SsmParameter.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.ssmParameter.SsmParameter.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssmparameter"

ssmparameter.SsmParameter_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssmParameter.SsmParameter.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.ssmParameter.SsmParameter.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssmparameter"

ssmparameter.SsmParameter_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssmParameter.SsmParameter.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameter.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameter.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameter.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameter.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameter.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameter.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameter.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameter.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameter.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameter.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameter.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameter.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameter.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameter.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameter.property.version">Version</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameter.property.allowedPatternInput">AllowedPatternInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameter.property.arnInput">ArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameter.property.dataTypeInput">DataTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameter.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameter.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameter.property.insecureValueInput">InsecureValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameter.property.keyIdInput">KeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameter.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameter.property.overwriteInput">OverwriteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameter.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameter.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameter.property.tierInput">TierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameter.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameter.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameter.property.allowedPattern">AllowedPattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameter.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameter.property.dataType">DataType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameter.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameter.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameter.property.insecureValue">InsecureValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameter.property.keyId">KeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameter.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameter.property.overwrite">Overwrite</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameter.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameter.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameter.property.tier">Tier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameter.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameter.property.value">Value</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.ssmParameter.SsmParameter.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.ssmParameter.SsmParameter.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssmParameter.SsmParameter.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.ssmParameter.SsmParameter.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.ssmParameter.SsmParameter.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.ssmParameter.SsmParameter.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.ssmParameter.SsmParameter.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ssmParameter.SsmParameter.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ssmParameter.SsmParameter.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ssmParameter.SsmParameter.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ssmParameter.SsmParameter.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ssmParameter.SsmParameter.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ssmParameter.SsmParameter.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ssmParameter.SsmParameter.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-aws.ssmParameter.SsmParameter.property.version"></a>

```go
func Version() *f64
```

- *Type:* *f64

---

##### `AllowedPatternInput`<sup>Optional</sup> <a name="AllowedPatternInput" id="@cdktf/provider-aws.ssmParameter.SsmParameter.property.allowedPatternInput"></a>

```go
func AllowedPatternInput() *string
```

- *Type:* *string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktf/provider-aws.ssmParameter.SsmParameter.property.arnInput"></a>

```go
func ArnInput() *string
```

- *Type:* *string

---

##### `DataTypeInput`<sup>Optional</sup> <a name="DataTypeInput" id="@cdktf/provider-aws.ssmParameter.SsmParameter.property.dataTypeInput"></a>

```go
func DataTypeInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.ssmParameter.SsmParameter.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.ssmParameter.SsmParameter.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InsecureValueInput`<sup>Optional</sup> <a name="InsecureValueInput" id="@cdktf/provider-aws.ssmParameter.SsmParameter.property.insecureValueInput"></a>

```go
func InsecureValueInput() *string
```

- *Type:* *string

---

##### `KeyIdInput`<sup>Optional</sup> <a name="KeyIdInput" id="@cdktf/provider-aws.ssmParameter.SsmParameter.property.keyIdInput"></a>

```go
func KeyIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.ssmParameter.SsmParameter.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OverwriteInput`<sup>Optional</sup> <a name="OverwriteInput" id="@cdktf/provider-aws.ssmParameter.SsmParameter.property.overwriteInput"></a>

```go
func OverwriteInput() interface{}
```

- *Type:* interface{}

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.ssmParameter.SsmParameter.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.ssmParameter.SsmParameter.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TierInput`<sup>Optional</sup> <a name="TierInput" id="@cdktf/provider-aws.ssmParameter.SsmParameter.property.tierInput"></a>

```go
func TierInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.ssmParameter.SsmParameter.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.ssmParameter.SsmParameter.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `AllowedPattern`<sup>Required</sup> <a name="AllowedPattern" id="@cdktf/provider-aws.ssmParameter.SsmParameter.property.allowedPattern"></a>

```go
func AllowedPattern() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.ssmParameter.SsmParameter.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="@cdktf/provider-aws.ssmParameter.SsmParameter.property.dataType"></a>

```go
func DataType() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.ssmParameter.SsmParameter.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ssmParameter.SsmParameter.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InsecureValue`<sup>Required</sup> <a name="InsecureValue" id="@cdktf/provider-aws.ssmParameter.SsmParameter.property.insecureValue"></a>

```go
func InsecureValue() *string
```

- *Type:* *string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktf/provider-aws.ssmParameter.SsmParameter.property.keyId"></a>

```go
func KeyId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.ssmParameter.SsmParameter.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Overwrite`<sup>Required</sup> <a name="Overwrite" id="@cdktf/provider-aws.ssmParameter.SsmParameter.property.overwrite"></a>

```go
func Overwrite() interface{}
```

- *Type:* interface{}

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.ssmParameter.SsmParameter.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.ssmParameter.SsmParameter.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Tier`<sup>Required</sup> <a name="Tier" id="@cdktf/provider-aws.ssmParameter.SsmParameter.property.tier"></a>

```go
func Tier() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.ssmParameter.SsmParameter.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ssmParameter.SsmParameter.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameter.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.ssmParameter.SsmParameter.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SsmParameterConfig <a name="SsmParameterConfig" id="@cdktf/provider-aws.ssmParameter.SsmParameterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmParameter.SsmParameterConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ssmparameter"

&ssmparameter.SsmParameterConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Type: *string,
	AllowedPattern: *string,
	Arn: *string,
	DataType: *string,
	Description: *string,
	Id: *string,
	InsecureValue: *string,
	KeyId: *string,
	Overwrite: interface{},
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Tier: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameterConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameterConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameterConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameterConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_parameter#name SsmParameter#name}. |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameterConfig.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_parameter#type SsmParameter#type}. |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameterConfig.property.allowedPattern">AllowedPattern</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_parameter#allowed_pattern SsmParameter#allowed_pattern}. |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameterConfig.property.arn">Arn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_parameter#arn SsmParameter#arn}. |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameterConfig.property.dataType">DataType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_parameter#data_type SsmParameter#data_type}. |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameterConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_parameter#description SsmParameter#description}. |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameterConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_parameter#id SsmParameter#id}. |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameterConfig.property.insecureValue">InsecureValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_parameter#insecure_value SsmParameter#insecure_value}. |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameterConfig.property.keyId">KeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_parameter#key_id SsmParameter#key_id}. |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameterConfig.property.overwrite">Overwrite</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_parameter#overwrite SsmParameter#overwrite}. |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameterConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_parameter#tags SsmParameter#tags}. |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameterConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_parameter#tags_all SsmParameter#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameterConfig.property.tier">Tier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_parameter#tier SsmParameter#tier}. |
| <code><a href="#@cdktf/provider-aws.ssmParameter.SsmParameterConfig.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_parameter#value SsmParameter#value}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ssmParameter.SsmParameterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ssmParameter.SsmParameterConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ssmParameter.SsmParameterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ssmParameter.SsmParameterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ssmParameter.SsmParameterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ssmParameter.SsmParameterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ssmParameter.SsmParameterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.ssmParameter.SsmParameterConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_parameter#name SsmParameter#name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.ssmParameter.SsmParameterConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_parameter#type SsmParameter#type}.

---

##### `AllowedPattern`<sup>Optional</sup> <a name="AllowedPattern" id="@cdktf/provider-aws.ssmParameter.SsmParameterConfig.property.allowedPattern"></a>

```go
AllowedPattern *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_parameter#allowed_pattern SsmParameter#allowed_pattern}.

---

##### `Arn`<sup>Optional</sup> <a name="Arn" id="@cdktf/provider-aws.ssmParameter.SsmParameterConfig.property.arn"></a>

```go
Arn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_parameter#arn SsmParameter#arn}.

---

##### `DataType`<sup>Optional</sup> <a name="DataType" id="@cdktf/provider-aws.ssmParameter.SsmParameterConfig.property.dataType"></a>

```go
DataType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_parameter#data_type SsmParameter#data_type}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.ssmParameter.SsmParameterConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_parameter#description SsmParameter#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.ssmParameter.SsmParameterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_parameter#id SsmParameter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InsecureValue`<sup>Optional</sup> <a name="InsecureValue" id="@cdktf/provider-aws.ssmParameter.SsmParameterConfig.property.insecureValue"></a>

```go
InsecureValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_parameter#insecure_value SsmParameter#insecure_value}.

---

##### `KeyId`<sup>Optional</sup> <a name="KeyId" id="@cdktf/provider-aws.ssmParameter.SsmParameterConfig.property.keyId"></a>

```go
KeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_parameter#key_id SsmParameter#key_id}.

---

##### `Overwrite`<sup>Optional</sup> <a name="Overwrite" id="@cdktf/provider-aws.ssmParameter.SsmParameterConfig.property.overwrite"></a>

```go
Overwrite interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_parameter#overwrite SsmParameter#overwrite}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.ssmParameter.SsmParameterConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_parameter#tags SsmParameter#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.ssmParameter.SsmParameterConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_parameter#tags_all SsmParameter#tags_all}.

---

##### `Tier`<sup>Optional</sup> <a name="Tier" id="@cdktf/provider-aws.ssmParameter.SsmParameterConfig.property.tier"></a>

```go
Tier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_parameter#tier SsmParameter#tier}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-aws.ssmParameter.SsmParameterConfig.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_parameter#value SsmParameter#value}.

---



