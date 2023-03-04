# `macie2CustomDataIdentifier` Submodule <a name="`macie2CustomDataIdentifier` Submodule" id="@cdktf/provider-aws.macie2CustomDataIdentifier"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Macie2CustomDataIdentifier <a name="Macie2CustomDataIdentifier" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/macie2_custom_data_identifier aws_macie2_custom_data_identifier}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macie2customdataidentifier"

macie2customdataidentifier.NewMacie2CustomDataIdentifier(scope Construct, id *string, config Macie2CustomDataIdentifierConfig) Macie2CustomDataIdentifier
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig">Macie2CustomDataIdentifierConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig">Macie2CustomDataIdentifierConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetIgnoreWords">ResetIgnoreWords</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetKeywords">ResetKeywords</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetMaximumMatchDistance">ResetMaximumMatchDistance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetNamePrefix">ResetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetRegex">ResetRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetId"></a>

```go
func ResetId()
```

##### `ResetIgnoreWords` <a name="ResetIgnoreWords" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetIgnoreWords"></a>

```go
func ResetIgnoreWords()
```

##### `ResetKeywords` <a name="ResetKeywords" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetKeywords"></a>

```go
func ResetKeywords()
```

##### `ResetMaximumMatchDistance` <a name="ResetMaximumMatchDistance" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetMaximumMatchDistance"></a>

```go
func ResetMaximumMatchDistance()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetName"></a>

```go
func ResetName()
```

##### `ResetNamePrefix` <a name="ResetNamePrefix" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetNamePrefix"></a>

```go
func ResetNamePrefix()
```

##### `ResetRegex` <a name="ResetRegex" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetRegex"></a>

```go
func ResetRegex()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetTagsAll"></a>

```go
func ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macie2customdataidentifier"

macie2customdataidentifier.Macie2CustomDataIdentifier_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macie2customdataidentifier"

macie2customdataidentifier.Macie2CustomDataIdentifier_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macie2customdataidentifier"

macie2customdataidentifier.Macie2CustomDataIdentifier_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.ignoreWordsInput">IgnoreWordsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.keywordsInput">KeywordsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.maximumMatchDistanceInput">MaximumMatchDistanceInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.namePrefixInput">NamePrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.regexInput">RegexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.ignoreWords">IgnoreWords</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.keywords">Keywords</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.maximumMatchDistance">MaximumMatchDistance</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.namePrefix">NamePrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.regex">Regex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IgnoreWordsInput`<sup>Optional</sup> <a name="IgnoreWordsInput" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.ignoreWordsInput"></a>

```go
func IgnoreWordsInput() *[]*string
```

- *Type:* *[]*string

---

##### `KeywordsInput`<sup>Optional</sup> <a name="KeywordsInput" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.keywordsInput"></a>

```go
func KeywordsInput() *[]*string
```

- *Type:* *[]*string

---

##### `MaximumMatchDistanceInput`<sup>Optional</sup> <a name="MaximumMatchDistanceInput" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.maximumMatchDistanceInput"></a>

```go
func MaximumMatchDistanceInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamePrefixInput`<sup>Optional</sup> <a name="NamePrefixInput" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.namePrefixInput"></a>

```go
func NamePrefixInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.regexInput"></a>

```go
func RegexInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IgnoreWords`<sup>Required</sup> <a name="IgnoreWords" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.ignoreWords"></a>

```go
func IgnoreWords() *[]*string
```

- *Type:* *[]*string

---

##### `Keywords`<sup>Required</sup> <a name="Keywords" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.keywords"></a>

```go
func Keywords() *[]*string
```

- *Type:* *[]*string

---

##### `MaximumMatchDistance`<sup>Required</sup> <a name="MaximumMatchDistance" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.maximumMatchDistance"></a>

```go
func MaximumMatchDistance() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NamePrefix`<sup>Required</sup> <a name="NamePrefix" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.namePrefix"></a>

```go
func NamePrefix() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.regex"></a>

```go
func Regex() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Macie2CustomDataIdentifierConfig <a name="Macie2CustomDataIdentifierConfig" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/macie2customdataidentifier"

&macie2customdataidentifier.Macie2CustomDataIdentifierConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Description: *string,
	Id: *string,
	IgnoreWords: *[]*string,
	Keywords: *[]*string,
	MaximumMatchDistance: *f64,
	Name: *string,
	NamePrefix: *string,
	Regex: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_custom_data_identifier#description Macie2CustomDataIdentifier#description}. |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_custom_data_identifier#id Macie2CustomDataIdentifier#id}. |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.ignoreWords">IgnoreWords</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_custom_data_identifier#ignore_words Macie2CustomDataIdentifier#ignore_words}. |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.keywords">Keywords</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_custom_data_identifier#keywords Macie2CustomDataIdentifier#keywords}. |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.maximumMatchDistance">MaximumMatchDistance</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_custom_data_identifier#maximum_match_distance Macie2CustomDataIdentifier#maximum_match_distance}. |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_custom_data_identifier#name Macie2CustomDataIdentifier#name}. |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.namePrefix">NamePrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_custom_data_identifier#name_prefix Macie2CustomDataIdentifier#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.regex">Regex</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_custom_data_identifier#regex Macie2CustomDataIdentifier#regex}. |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_custom_data_identifier#tags Macie2CustomDataIdentifier#tags}. |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_custom_data_identifier#tags_all Macie2CustomDataIdentifier#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_custom_data_identifier#description Macie2CustomDataIdentifier#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_custom_data_identifier#id Macie2CustomDataIdentifier#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IgnoreWords`<sup>Optional</sup> <a name="IgnoreWords" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.ignoreWords"></a>

```go
IgnoreWords *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_custom_data_identifier#ignore_words Macie2CustomDataIdentifier#ignore_words}.

---

##### `Keywords`<sup>Optional</sup> <a name="Keywords" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.keywords"></a>

```go
Keywords *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_custom_data_identifier#keywords Macie2CustomDataIdentifier#keywords}.

---

##### `MaximumMatchDistance`<sup>Optional</sup> <a name="MaximumMatchDistance" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.maximumMatchDistance"></a>

```go
MaximumMatchDistance *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_custom_data_identifier#maximum_match_distance Macie2CustomDataIdentifier#maximum_match_distance}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_custom_data_identifier#name Macie2CustomDataIdentifier#name}.

---

##### `NamePrefix`<sup>Optional</sup> <a name="NamePrefix" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.namePrefix"></a>

```go
NamePrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_custom_data_identifier#name_prefix Macie2CustomDataIdentifier#name_prefix}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.regex"></a>

```go
Regex *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_custom_data_identifier#regex Macie2CustomDataIdentifier#regex}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_custom_data_identifier#tags Macie2CustomDataIdentifier#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_custom_data_identifier#tags_all Macie2CustomDataIdentifier#tags_all}.

---



