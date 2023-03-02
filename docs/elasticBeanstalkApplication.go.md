# `elasticBeanstalkApplication` Submodule <a name="`elasticBeanstalkApplication` Submodule" id="@cdktf/provider-aws.elasticBeanstalkApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticBeanstalkApplication <a name="ElasticBeanstalkApplication" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application aws_elastic_beanstalk_application}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/elasticbeanstalkapplication"

elasticbeanstalkapplication.NewElasticBeanstalkApplication(scope Construct, id *string, config ElasticBeanstalkApplicationConfig) ElasticBeanstalkApplication
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig">ElasticBeanstalkApplicationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig">ElasticBeanstalkApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.putAppversionLifecycle">PutAppversionLifecycle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.resetAppversionLifecycle">ResetAppversionLifecycle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAppversionLifecycle` <a name="PutAppversionLifecycle" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.putAppversionLifecycle"></a>

```go
func PutAppversionLifecycle(value ElasticBeanstalkApplicationAppversionLifecycle)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.putAppversionLifecycle.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycle">ElasticBeanstalkApplicationAppversionLifecycle</a>

---

##### `ResetAppversionLifecycle` <a name="ResetAppversionLifecycle" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.resetAppversionLifecycle"></a>

```go
func ResetAppversionLifecycle()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.resetTagsAll"></a>

```go
func ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/elasticbeanstalkapplication"

elasticbeanstalkapplication.ElasticBeanstalkApplication_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/elasticbeanstalkapplication"

elasticbeanstalkapplication.ElasticBeanstalkApplication_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/elasticbeanstalkapplication"

elasticbeanstalkapplication.ElasticBeanstalkApplication_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.appversionLifecycle">AppversionLifecycle</a></code> | <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference">ElasticBeanstalkApplicationAppversionLifecycleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.appversionLifecycleInput">AppversionLifecycleInput</a></code> | <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycle">ElasticBeanstalkApplicationAppversionLifecycle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AppversionLifecycle`<sup>Required</sup> <a name="AppversionLifecycle" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.appversionLifecycle"></a>

```go
func AppversionLifecycle() ElasticBeanstalkApplicationAppversionLifecycleOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference">ElasticBeanstalkApplicationAppversionLifecycleOutputReference</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `AppversionLifecycleInput`<sup>Optional</sup> <a name="AppversionLifecycleInput" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.appversionLifecycleInput"></a>

```go
func AppversionLifecycleInput() ElasticBeanstalkApplicationAppversionLifecycle
```

- *Type:* <a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycle">ElasticBeanstalkApplicationAppversionLifecycle</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticBeanstalkApplicationAppversionLifecycle <a name="ElasticBeanstalkApplicationAppversionLifecycle" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycle.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/elasticbeanstalkapplication"

&elasticbeanstalkapplication.ElasticBeanstalkApplicationAppversionLifecycle {
	ServiceRole: *string,
	DeleteSourceFromS3: interface{},
	MaxAgeInDays: *f64,
	MaxCount: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycle.property.serviceRole">ServiceRole</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application#service_role ElasticBeanstalkApplication#service_role}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycle.property.deleteSourceFromS3">DeleteSourceFromS3</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application#delete_source_from_s3 ElasticBeanstalkApplication#delete_source_from_s3}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycle.property.maxAgeInDays">MaxAgeInDays</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application#max_age_in_days ElasticBeanstalkApplication#max_age_in_days}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycle.property.maxCount">MaxCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application#max_count ElasticBeanstalkApplication#max_count}. |

---

##### `ServiceRole`<sup>Required</sup> <a name="ServiceRole" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycle.property.serviceRole"></a>

```go
ServiceRole *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application#service_role ElasticBeanstalkApplication#service_role}.

---

##### `DeleteSourceFromS3`<sup>Optional</sup> <a name="DeleteSourceFromS3" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycle.property.deleteSourceFromS3"></a>

```go
DeleteSourceFromS3 interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application#delete_source_from_s3 ElasticBeanstalkApplication#delete_source_from_s3}.

---

##### `MaxAgeInDays`<sup>Optional</sup> <a name="MaxAgeInDays" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycle.property.maxAgeInDays"></a>

```go
MaxAgeInDays *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application#max_age_in_days ElasticBeanstalkApplication#max_age_in_days}.

---

##### `MaxCount`<sup>Optional</sup> <a name="MaxCount" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycle.property.maxCount"></a>

```go
MaxCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application#max_count ElasticBeanstalkApplication#max_count}.

---

### ElasticBeanstalkApplicationConfig <a name="ElasticBeanstalkApplicationConfig" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/elasticbeanstalkapplication"

&elasticbeanstalkapplication.ElasticBeanstalkApplicationConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	AppversionLifecycle: github.com/cdktf/cdktf-provider-aws-go/aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycle,
	Description: *string,
	Id: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application#name ElasticBeanstalkApplication#name}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.appversionLifecycle">AppversionLifecycle</a></code> | <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycle">ElasticBeanstalkApplicationAppversionLifecycle</a></code> | appversion_lifecycle block. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application#description ElasticBeanstalkApplication#description}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application#id ElasticBeanstalkApplication#id}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application#tags ElasticBeanstalkApplication#tags}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application#tags_all ElasticBeanstalkApplication#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application#name ElasticBeanstalkApplication#name}.

---

##### `AppversionLifecycle`<sup>Optional</sup> <a name="AppversionLifecycle" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.appversionLifecycle"></a>

```go
AppversionLifecycle ElasticBeanstalkApplicationAppversionLifecycle
```

- *Type:* <a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycle">ElasticBeanstalkApplicationAppversionLifecycle</a>

appversion_lifecycle block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application#appversion_lifecycle ElasticBeanstalkApplication#appversion_lifecycle}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application#description ElasticBeanstalkApplication#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application#id ElasticBeanstalkApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application#tags ElasticBeanstalkApplication#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application#tags_all ElasticBeanstalkApplication#tags_all}.

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticBeanstalkApplicationAppversionLifecycleOutputReference <a name="ElasticBeanstalkApplicationAppversionLifecycleOutputReference" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/elasticbeanstalkapplication"

elasticbeanstalkapplication.NewElasticBeanstalkApplicationAppversionLifecycleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ElasticBeanstalkApplicationAppversionLifecycleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.resetDeleteSourceFromS3">ResetDeleteSourceFromS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.resetMaxAgeInDays">ResetMaxAgeInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.resetMaxCount">ResetMaxCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeleteSourceFromS3` <a name="ResetDeleteSourceFromS3" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.resetDeleteSourceFromS3"></a>

```go
func ResetDeleteSourceFromS3()
```

##### `ResetMaxAgeInDays` <a name="ResetMaxAgeInDays" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.resetMaxAgeInDays"></a>

```go
func ResetMaxAgeInDays()
```

##### `ResetMaxCount` <a name="ResetMaxCount" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.resetMaxCount"></a>

```go
func ResetMaxCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.deleteSourceFromS3Input">DeleteSourceFromS3Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.maxAgeInDaysInput">MaxAgeInDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.maxCountInput">MaxCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.serviceRoleInput">ServiceRoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.deleteSourceFromS3">DeleteSourceFromS3</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.maxAgeInDays">MaxAgeInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.maxCount">MaxCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.serviceRole">ServiceRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycle">ElasticBeanstalkApplicationAppversionLifecycle</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeleteSourceFromS3Input`<sup>Optional</sup> <a name="DeleteSourceFromS3Input" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.deleteSourceFromS3Input"></a>

```go
func DeleteSourceFromS3Input() interface{}
```

- *Type:* interface{}

---

##### `MaxAgeInDaysInput`<sup>Optional</sup> <a name="MaxAgeInDaysInput" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.maxAgeInDaysInput"></a>

```go
func MaxAgeInDaysInput() *f64
```

- *Type:* *f64

---

##### `MaxCountInput`<sup>Optional</sup> <a name="MaxCountInput" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.maxCountInput"></a>

```go
func MaxCountInput() *f64
```

- *Type:* *f64

---

##### `ServiceRoleInput`<sup>Optional</sup> <a name="ServiceRoleInput" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.serviceRoleInput"></a>

```go
func ServiceRoleInput() *string
```

- *Type:* *string

---

##### `DeleteSourceFromS3`<sup>Required</sup> <a name="DeleteSourceFromS3" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.deleteSourceFromS3"></a>

```go
func DeleteSourceFromS3() interface{}
```

- *Type:* interface{}

---

##### `MaxAgeInDays`<sup>Required</sup> <a name="MaxAgeInDays" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.maxAgeInDays"></a>

```go
func MaxAgeInDays() *f64
```

- *Type:* *f64

---

##### `MaxCount`<sup>Required</sup> <a name="MaxCount" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.maxCount"></a>

```go
func MaxCount() *f64
```

- *Type:* *f64

---

##### `ServiceRole`<sup>Required</sup> <a name="ServiceRole" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.serviceRole"></a>

```go
func ServiceRole() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.internalValue"></a>

```go
func InternalValue() ElasticBeanstalkApplicationAppversionLifecycle
```

- *Type:* <a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycle">ElasticBeanstalkApplicationAppversionLifecycle</a>

---



