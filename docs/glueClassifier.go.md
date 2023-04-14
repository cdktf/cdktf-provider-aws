# `glueClassifier` Submodule <a name="`glueClassifier` Submodule" id="@cdktf/provider-aws.glueClassifier"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueClassifier <a name="GlueClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifier"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier aws_glue_classifier}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/glueclassifier"

glueclassifier.NewGlueClassifier(scope Construct, id *string, config GlueClassifierConfig) GlueClassifier
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierConfig">GlueClassifierConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierConfig">GlueClassifierConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.putCsvClassifier">PutCsvClassifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.putGrokClassifier">PutGrokClassifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.putJsonClassifier">PutJsonClassifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.putXmlClassifier">PutXmlClassifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.resetCsvClassifier">ResetCsvClassifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.resetGrokClassifier">ResetGrokClassifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.resetJsonClassifier">ResetJsonClassifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.resetXmlClassifier">ResetXmlClassifier</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutCsvClassifier` <a name="PutCsvClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.putCsvClassifier"></a>

```go
func PutCsvClassifier(value GlueClassifierCsvClassifier)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.putCsvClassifier.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier">GlueClassifierCsvClassifier</a>

---

##### `PutGrokClassifier` <a name="PutGrokClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.putGrokClassifier"></a>

```go
func PutGrokClassifier(value GlueClassifierGrokClassifier)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.putGrokClassifier.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifier">GlueClassifierGrokClassifier</a>

---

##### `PutJsonClassifier` <a name="PutJsonClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.putJsonClassifier"></a>

```go
func PutJsonClassifier(value GlueClassifierJsonClassifier)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.putJsonClassifier.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifier">GlueClassifierJsonClassifier</a>

---

##### `PutXmlClassifier` <a name="PutXmlClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.putXmlClassifier"></a>

```go
func PutXmlClassifier(value GlueClassifierXmlClassifier)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.putXmlClassifier.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifier">GlueClassifierXmlClassifier</a>

---

##### `ResetCsvClassifier` <a name="ResetCsvClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.resetCsvClassifier"></a>

```go
func ResetCsvClassifier()
```

##### `ResetGrokClassifier` <a name="ResetGrokClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.resetGrokClassifier"></a>

```go
func ResetGrokClassifier()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.resetId"></a>

```go
func ResetId()
```

##### `ResetJsonClassifier` <a name="ResetJsonClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.resetJsonClassifier"></a>

```go
func ResetJsonClassifier()
```

##### `ResetXmlClassifier` <a name="ResetXmlClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.resetXmlClassifier"></a>

```go
func ResetXmlClassifier()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/glueclassifier"

glueclassifier.GlueClassifier_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/glueclassifier"

glueclassifier.GlueClassifier_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/glueclassifier"

glueclassifier.GlueClassifier_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.csvClassifier">CsvClassifier</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference">GlueClassifierCsvClassifierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.grokClassifier">GrokClassifier</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference">GlueClassifierGrokClassifierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.jsonClassifier">JsonClassifier</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference">GlueClassifierJsonClassifierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.xmlClassifier">XmlClassifier</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference">GlueClassifierXmlClassifierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.csvClassifierInput">CsvClassifierInput</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier">GlueClassifierCsvClassifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.grokClassifierInput">GrokClassifierInput</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifier">GlueClassifierGrokClassifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.jsonClassifierInput">JsonClassifierInput</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifier">GlueClassifierJsonClassifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.xmlClassifierInput">XmlClassifierInput</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifier">GlueClassifierXmlClassifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CsvClassifier`<sup>Required</sup> <a name="CsvClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.csvClassifier"></a>

```go
func CsvClassifier() GlueClassifierCsvClassifierOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference">GlueClassifierCsvClassifierOutputReference</a>

---

##### `GrokClassifier`<sup>Required</sup> <a name="GrokClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.grokClassifier"></a>

```go
func GrokClassifier() GlueClassifierGrokClassifierOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference">GlueClassifierGrokClassifierOutputReference</a>

---

##### `JsonClassifier`<sup>Required</sup> <a name="JsonClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.jsonClassifier"></a>

```go
func JsonClassifier() GlueClassifierJsonClassifierOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference">GlueClassifierJsonClassifierOutputReference</a>

---

##### `XmlClassifier`<sup>Required</sup> <a name="XmlClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.xmlClassifier"></a>

```go
func XmlClassifier() GlueClassifierXmlClassifierOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference">GlueClassifierXmlClassifierOutputReference</a>

---

##### `CsvClassifierInput`<sup>Optional</sup> <a name="CsvClassifierInput" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.csvClassifierInput"></a>

```go
func CsvClassifierInput() GlueClassifierCsvClassifier
```

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier">GlueClassifierCsvClassifier</a>

---

##### `GrokClassifierInput`<sup>Optional</sup> <a name="GrokClassifierInput" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.grokClassifierInput"></a>

```go
func GrokClassifierInput() GlueClassifierGrokClassifier
```

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifier">GlueClassifierGrokClassifier</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `JsonClassifierInput`<sup>Optional</sup> <a name="JsonClassifierInput" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.jsonClassifierInput"></a>

```go
func JsonClassifierInput() GlueClassifierJsonClassifier
```

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifier">GlueClassifierJsonClassifier</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `XmlClassifierInput`<sup>Optional</sup> <a name="XmlClassifierInput" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.xmlClassifierInput"></a>

```go
func XmlClassifierInput() GlueClassifierXmlClassifier
```

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifier">GlueClassifierXmlClassifier</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GlueClassifierConfig <a name="GlueClassifierConfig" id="@cdktf/provider-aws.glueClassifier.GlueClassifierConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/glueclassifier"

&glueclassifier.GlueClassifierConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	CsvClassifier: github.com/cdktf/cdktf-provider-aws-go/aws.glueClassifier.GlueClassifierCsvClassifier,
	GrokClassifier: github.com/cdktf/cdktf-provider-aws-go/aws.glueClassifier.GlueClassifierGrokClassifier,
	Id: *string,
	JsonClassifier: github.com/cdktf/cdktf-provider-aws-go/aws.glueClassifier.GlueClassifierJsonClassifier,
	XmlClassifier: github.com/cdktf/cdktf-provider-aws-go/aws.glueClassifier.GlueClassifierXmlClassifier,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#name GlueClassifier#name}. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.csvClassifier">CsvClassifier</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier">GlueClassifierCsvClassifier</a></code> | csv_classifier block. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.grokClassifier">GrokClassifier</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifier">GlueClassifierGrokClassifier</a></code> | grok_classifier block. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#id GlueClassifier#id}. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.jsonClassifier">JsonClassifier</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifier">GlueClassifierJsonClassifier</a></code> | json_classifier block. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.xmlClassifier">XmlClassifier</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifier">GlueClassifierXmlClassifier</a></code> | xml_classifier block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#name GlueClassifier#name}.

---

##### `CsvClassifier`<sup>Optional</sup> <a name="CsvClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.csvClassifier"></a>

```go
CsvClassifier GlueClassifierCsvClassifier
```

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier">GlueClassifierCsvClassifier</a>

csv_classifier block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#csv_classifier GlueClassifier#csv_classifier}

---

##### `GrokClassifier`<sup>Optional</sup> <a name="GrokClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.grokClassifier"></a>

```go
GrokClassifier GlueClassifierGrokClassifier
```

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifier">GlueClassifierGrokClassifier</a>

grok_classifier block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#grok_classifier GlueClassifier#grok_classifier}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#id GlueClassifier#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `JsonClassifier`<sup>Optional</sup> <a name="JsonClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.jsonClassifier"></a>

```go
JsonClassifier GlueClassifierJsonClassifier
```

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifier">GlueClassifierJsonClassifier</a>

json_classifier block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#json_classifier GlueClassifier#json_classifier}

---

##### `XmlClassifier`<sup>Optional</sup> <a name="XmlClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.xmlClassifier"></a>

```go
XmlClassifier GlueClassifierXmlClassifier
```

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifier">GlueClassifierXmlClassifier</a>

xml_classifier block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#xml_classifier GlueClassifier#xml_classifier}

---

### GlueClassifierCsvClassifier <a name="GlueClassifierCsvClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/glueclassifier"

&glueclassifier.GlueClassifierCsvClassifier {
	AllowSingleColumn: interface{},
	ContainsHeader: *string,
	CustomDatatypeConfigured: interface{},
	CustomDatatypes: *[]*string,
	Delimiter: *string,
	DisableValueTrimming: interface{},
	Header: *[]*string,
	QuoteSymbol: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier.property.allowSingleColumn">AllowSingleColumn</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#allow_single_column GlueClassifier#allow_single_column}. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier.property.containsHeader">ContainsHeader</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#contains_header GlueClassifier#contains_header}. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier.property.customDatatypeConfigured">CustomDatatypeConfigured</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#custom_datatype_configured GlueClassifier#custom_datatype_configured}. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier.property.customDatatypes">CustomDatatypes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#custom_datatypes GlueClassifier#custom_datatypes}. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier.property.delimiter">Delimiter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#delimiter GlueClassifier#delimiter}. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier.property.disableValueTrimming">DisableValueTrimming</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#disable_value_trimming GlueClassifier#disable_value_trimming}. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier.property.header">Header</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#header GlueClassifier#header}. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier.property.quoteSymbol">QuoteSymbol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#quote_symbol GlueClassifier#quote_symbol}. |

---

##### `AllowSingleColumn`<sup>Optional</sup> <a name="AllowSingleColumn" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier.property.allowSingleColumn"></a>

```go
AllowSingleColumn interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#allow_single_column GlueClassifier#allow_single_column}.

---

##### `ContainsHeader`<sup>Optional</sup> <a name="ContainsHeader" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier.property.containsHeader"></a>

```go
ContainsHeader *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#contains_header GlueClassifier#contains_header}.

---

##### `CustomDatatypeConfigured`<sup>Optional</sup> <a name="CustomDatatypeConfigured" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier.property.customDatatypeConfigured"></a>

```go
CustomDatatypeConfigured interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#custom_datatype_configured GlueClassifier#custom_datatype_configured}.

---

##### `CustomDatatypes`<sup>Optional</sup> <a name="CustomDatatypes" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier.property.customDatatypes"></a>

```go
CustomDatatypes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#custom_datatypes GlueClassifier#custom_datatypes}.

---

##### `Delimiter`<sup>Optional</sup> <a name="Delimiter" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier.property.delimiter"></a>

```go
Delimiter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#delimiter GlueClassifier#delimiter}.

---

##### `DisableValueTrimming`<sup>Optional</sup> <a name="DisableValueTrimming" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier.property.disableValueTrimming"></a>

```go
DisableValueTrimming interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#disable_value_trimming GlueClassifier#disable_value_trimming}.

---

##### `Header`<sup>Optional</sup> <a name="Header" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier.property.header"></a>

```go
Header *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#header GlueClassifier#header}.

---

##### `QuoteSymbol`<sup>Optional</sup> <a name="QuoteSymbol" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier.property.quoteSymbol"></a>

```go
QuoteSymbol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#quote_symbol GlueClassifier#quote_symbol}.

---

### GlueClassifierGrokClassifier <a name="GlueClassifierGrokClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifier"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifier.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/glueclassifier"

&glueclassifier.GlueClassifierGrokClassifier {
	Classification: *string,
	GrokPattern: *string,
	CustomPatterns: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifier.property.classification">Classification</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#classification GlueClassifier#classification}. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifier.property.grokPattern">GrokPattern</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#grok_pattern GlueClassifier#grok_pattern}. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifier.property.customPatterns">CustomPatterns</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#custom_patterns GlueClassifier#custom_patterns}. |

---

##### `Classification`<sup>Required</sup> <a name="Classification" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifier.property.classification"></a>

```go
Classification *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#classification GlueClassifier#classification}.

---

##### `GrokPattern`<sup>Required</sup> <a name="GrokPattern" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifier.property.grokPattern"></a>

```go
GrokPattern *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#grok_pattern GlueClassifier#grok_pattern}.

---

##### `CustomPatterns`<sup>Optional</sup> <a name="CustomPatterns" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifier.property.customPatterns"></a>

```go
CustomPatterns *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#custom_patterns GlueClassifier#custom_patterns}.

---

### GlueClassifierJsonClassifier <a name="GlueClassifierJsonClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifier"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifier.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/glueclassifier"

&glueclassifier.GlueClassifierJsonClassifier {
	JsonPath: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifier.property.jsonPath">JsonPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#json_path GlueClassifier#json_path}. |

---

##### `JsonPath`<sup>Required</sup> <a name="JsonPath" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifier.property.jsonPath"></a>

```go
JsonPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#json_path GlueClassifier#json_path}.

---

### GlueClassifierXmlClassifier <a name="GlueClassifierXmlClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifier"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifier.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/glueclassifier"

&glueclassifier.GlueClassifierXmlClassifier {
	Classification: *string,
	RowTag: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifier.property.classification">Classification</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#classification GlueClassifier#classification}. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifier.property.rowTag">RowTag</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#row_tag GlueClassifier#row_tag}. |

---

##### `Classification`<sup>Required</sup> <a name="Classification" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifier.property.classification"></a>

```go
Classification *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#classification GlueClassifier#classification}.

---

##### `RowTag`<sup>Required</sup> <a name="RowTag" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifier.property.rowTag"></a>

```go
RowTag *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#row_tag GlueClassifier#row_tag}.

---

## Classes <a name="Classes" id="Classes"></a>

### GlueClassifierCsvClassifierOutputReference <a name="GlueClassifierCsvClassifierOutputReference" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/glueclassifier"

glueclassifier.NewGlueClassifierCsvClassifierOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GlueClassifierCsvClassifierOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetAllowSingleColumn">ResetAllowSingleColumn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetContainsHeader">ResetContainsHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetCustomDatatypeConfigured">ResetCustomDatatypeConfigured</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetCustomDatatypes">ResetCustomDatatypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetDelimiter">ResetDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetDisableValueTrimming">ResetDisableValueTrimming</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetHeader">ResetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetQuoteSymbol">ResetQuoteSymbol</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowSingleColumn` <a name="ResetAllowSingleColumn" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetAllowSingleColumn"></a>

```go
func ResetAllowSingleColumn()
```

##### `ResetContainsHeader` <a name="ResetContainsHeader" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetContainsHeader"></a>

```go
func ResetContainsHeader()
```

##### `ResetCustomDatatypeConfigured` <a name="ResetCustomDatatypeConfigured" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetCustomDatatypeConfigured"></a>

```go
func ResetCustomDatatypeConfigured()
```

##### `ResetCustomDatatypes` <a name="ResetCustomDatatypes" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetCustomDatatypes"></a>

```go
func ResetCustomDatatypes()
```

##### `ResetDelimiter` <a name="ResetDelimiter" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetDelimiter"></a>

```go
func ResetDelimiter()
```

##### `ResetDisableValueTrimming` <a name="ResetDisableValueTrimming" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetDisableValueTrimming"></a>

```go
func ResetDisableValueTrimming()
```

##### `ResetHeader` <a name="ResetHeader" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetHeader"></a>

```go
func ResetHeader()
```

##### `ResetQuoteSymbol` <a name="ResetQuoteSymbol" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetQuoteSymbol"></a>

```go
func ResetQuoteSymbol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.allowSingleColumnInput">AllowSingleColumnInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.containsHeaderInput">ContainsHeaderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.customDatatypeConfiguredInput">CustomDatatypeConfiguredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.customDatatypesInput">CustomDatatypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.delimiterInput">DelimiterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.disableValueTrimmingInput">DisableValueTrimmingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.headerInput">HeaderInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.quoteSymbolInput">QuoteSymbolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.allowSingleColumn">AllowSingleColumn</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.containsHeader">ContainsHeader</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.customDatatypeConfigured">CustomDatatypeConfigured</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.customDatatypes">CustomDatatypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.delimiter">Delimiter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.disableValueTrimming">DisableValueTrimming</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.header">Header</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.quoteSymbol">QuoteSymbol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier">GlueClassifierCsvClassifier</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowSingleColumnInput`<sup>Optional</sup> <a name="AllowSingleColumnInput" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.allowSingleColumnInput"></a>

```go
func AllowSingleColumnInput() interface{}
```

- *Type:* interface{}

---

##### `ContainsHeaderInput`<sup>Optional</sup> <a name="ContainsHeaderInput" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.containsHeaderInput"></a>

```go
func ContainsHeaderInput() *string
```

- *Type:* *string

---

##### `CustomDatatypeConfiguredInput`<sup>Optional</sup> <a name="CustomDatatypeConfiguredInput" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.customDatatypeConfiguredInput"></a>

```go
func CustomDatatypeConfiguredInput() interface{}
```

- *Type:* interface{}

---

##### `CustomDatatypesInput`<sup>Optional</sup> <a name="CustomDatatypesInput" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.customDatatypesInput"></a>

```go
func CustomDatatypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DelimiterInput`<sup>Optional</sup> <a name="DelimiterInput" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.delimiterInput"></a>

```go
func DelimiterInput() *string
```

- *Type:* *string

---

##### `DisableValueTrimmingInput`<sup>Optional</sup> <a name="DisableValueTrimmingInput" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.disableValueTrimmingInput"></a>

```go
func DisableValueTrimmingInput() interface{}
```

- *Type:* interface{}

---

##### `HeaderInput`<sup>Optional</sup> <a name="HeaderInput" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.headerInput"></a>

```go
func HeaderInput() *[]*string
```

- *Type:* *[]*string

---

##### `QuoteSymbolInput`<sup>Optional</sup> <a name="QuoteSymbolInput" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.quoteSymbolInput"></a>

```go
func QuoteSymbolInput() *string
```

- *Type:* *string

---

##### `AllowSingleColumn`<sup>Required</sup> <a name="AllowSingleColumn" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.allowSingleColumn"></a>

```go
func AllowSingleColumn() interface{}
```

- *Type:* interface{}

---

##### `ContainsHeader`<sup>Required</sup> <a name="ContainsHeader" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.containsHeader"></a>

```go
func ContainsHeader() *string
```

- *Type:* *string

---

##### `CustomDatatypeConfigured`<sup>Required</sup> <a name="CustomDatatypeConfigured" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.customDatatypeConfigured"></a>

```go
func CustomDatatypeConfigured() interface{}
```

- *Type:* interface{}

---

##### `CustomDatatypes`<sup>Required</sup> <a name="CustomDatatypes" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.customDatatypes"></a>

```go
func CustomDatatypes() *[]*string
```

- *Type:* *[]*string

---

##### `Delimiter`<sup>Required</sup> <a name="Delimiter" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.delimiter"></a>

```go
func Delimiter() *string
```

- *Type:* *string

---

##### `DisableValueTrimming`<sup>Required</sup> <a name="DisableValueTrimming" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.disableValueTrimming"></a>

```go
func DisableValueTrimming() interface{}
```

- *Type:* interface{}

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.header"></a>

```go
func Header() *[]*string
```

- *Type:* *[]*string

---

##### `QuoteSymbol`<sup>Required</sup> <a name="QuoteSymbol" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.quoteSymbol"></a>

```go
func QuoteSymbol() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.internalValue"></a>

```go
func InternalValue() GlueClassifierCsvClassifier
```

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier">GlueClassifierCsvClassifier</a>

---


### GlueClassifierGrokClassifierOutputReference <a name="GlueClassifierGrokClassifierOutputReference" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/glueclassifier"

glueclassifier.NewGlueClassifierGrokClassifierOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GlueClassifierGrokClassifierOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.resetCustomPatterns">ResetCustomPatterns</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCustomPatterns` <a name="ResetCustomPatterns" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.resetCustomPatterns"></a>

```go
func ResetCustomPatterns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.classificationInput">ClassificationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.customPatternsInput">CustomPatternsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.grokPatternInput">GrokPatternInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.classification">Classification</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.customPatterns">CustomPatterns</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.grokPattern">GrokPattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifier">GlueClassifierGrokClassifier</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClassificationInput`<sup>Optional</sup> <a name="ClassificationInput" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.classificationInput"></a>

```go
func ClassificationInput() *string
```

- *Type:* *string

---

##### `CustomPatternsInput`<sup>Optional</sup> <a name="CustomPatternsInput" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.customPatternsInput"></a>

```go
func CustomPatternsInput() *string
```

- *Type:* *string

---

##### `GrokPatternInput`<sup>Optional</sup> <a name="GrokPatternInput" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.grokPatternInput"></a>

```go
func GrokPatternInput() *string
```

- *Type:* *string

---

##### `Classification`<sup>Required</sup> <a name="Classification" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.classification"></a>

```go
func Classification() *string
```

- *Type:* *string

---

##### `CustomPatterns`<sup>Required</sup> <a name="CustomPatterns" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.customPatterns"></a>

```go
func CustomPatterns() *string
```

- *Type:* *string

---

##### `GrokPattern`<sup>Required</sup> <a name="GrokPattern" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.grokPattern"></a>

```go
func GrokPattern() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.internalValue"></a>

```go
func InternalValue() GlueClassifierGrokClassifier
```

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifier">GlueClassifierGrokClassifier</a>

---


### GlueClassifierJsonClassifierOutputReference <a name="GlueClassifierJsonClassifierOutputReference" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/glueclassifier"

glueclassifier.NewGlueClassifierJsonClassifierOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GlueClassifierJsonClassifierOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.jsonPathInput">JsonPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.jsonPath">JsonPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifier">GlueClassifierJsonClassifier</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `JsonPathInput`<sup>Optional</sup> <a name="JsonPathInput" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.jsonPathInput"></a>

```go
func JsonPathInput() *string
```

- *Type:* *string

---

##### `JsonPath`<sup>Required</sup> <a name="JsonPath" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.jsonPath"></a>

```go
func JsonPath() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.internalValue"></a>

```go
func InternalValue() GlueClassifierJsonClassifier
```

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifier">GlueClassifierJsonClassifier</a>

---


### GlueClassifierXmlClassifierOutputReference <a name="GlueClassifierXmlClassifierOutputReference" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/glueclassifier"

glueclassifier.NewGlueClassifierXmlClassifierOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GlueClassifierXmlClassifierOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.classificationInput">ClassificationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.rowTagInput">RowTagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.classification">Classification</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.rowTag">RowTag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifier">GlueClassifierXmlClassifier</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClassificationInput`<sup>Optional</sup> <a name="ClassificationInput" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.classificationInput"></a>

```go
func ClassificationInput() *string
```

- *Type:* *string

---

##### `RowTagInput`<sup>Optional</sup> <a name="RowTagInput" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.rowTagInput"></a>

```go
func RowTagInput() *string
```

- *Type:* *string

---

##### `Classification`<sup>Required</sup> <a name="Classification" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.classification"></a>

```go
func Classification() *string
```

- *Type:* *string

---

##### `RowTag`<sup>Required</sup> <a name="RowTag" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.rowTag"></a>

```go
func RowTag() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.internalValue"></a>

```go
func InternalValue() GlueClassifierXmlClassifier
```

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifier">GlueClassifierXmlClassifier</a>

---



