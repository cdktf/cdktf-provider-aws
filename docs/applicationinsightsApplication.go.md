# `applicationinsightsApplication` Submodule <a name="`applicationinsightsApplication` Submodule" id="@cdktf/provider-aws.applicationinsightsApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationinsightsApplication <a name="ApplicationinsightsApplication" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application aws_applicationinsights_application}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/applicationinsightsapplication"

applicationinsightsapplication.NewApplicationinsightsApplication(scope Construct, id *string, config ApplicationinsightsApplicationConfig) ApplicationinsightsApplication
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig">ApplicationinsightsApplicationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig">ApplicationinsightsApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetAutoConfigEnabled">ResetAutoConfigEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetAutoCreate">ResetAutoCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetCweMonitorEnabled">ResetCweMonitorEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetGroupingType">ResetGroupingType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetOpsCenterEnabled">ResetOpsCenterEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetOpsItemSnsTopicArn">ResetOpsItemSnsTopicArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAutoConfigEnabled` <a name="ResetAutoConfigEnabled" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetAutoConfigEnabled"></a>

```go
func ResetAutoConfigEnabled()
```

##### `ResetAutoCreate` <a name="ResetAutoCreate" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetAutoCreate"></a>

```go
func ResetAutoCreate()
```

##### `ResetCweMonitorEnabled` <a name="ResetCweMonitorEnabled" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetCweMonitorEnabled"></a>

```go
func ResetCweMonitorEnabled()
```

##### `ResetGroupingType` <a name="ResetGroupingType" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetGroupingType"></a>

```go
func ResetGroupingType()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetId"></a>

```go
func ResetId()
```

##### `ResetOpsCenterEnabled` <a name="ResetOpsCenterEnabled" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetOpsCenterEnabled"></a>

```go
func ResetOpsCenterEnabled()
```

##### `ResetOpsItemSnsTopicArn` <a name="ResetOpsItemSnsTopicArn" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetOpsItemSnsTopicArn"></a>

```go
func ResetOpsItemSnsTopicArn()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetTagsAll"></a>

```go
func ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/applicationinsightsapplication"

applicationinsightsapplication.ApplicationinsightsApplication_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/applicationinsightsapplication"

applicationinsightsapplication.ApplicationinsightsApplication_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/applicationinsightsapplication"

applicationinsightsapplication.ApplicationinsightsApplication_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.autoConfigEnabledInput">AutoConfigEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.autoCreateInput">AutoCreateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.cweMonitorEnabledInput">CweMonitorEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.groupingTypeInput">GroupingTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.opsCenterEnabledInput">OpsCenterEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.opsItemSnsTopicArnInput">OpsItemSnsTopicArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.autoConfigEnabled">AutoConfigEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.autoCreate">AutoCreate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.cweMonitorEnabled">CweMonitorEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.groupingType">GroupingType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.opsCenterEnabled">OpsCenterEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.opsItemSnsTopicArn">OpsItemSnsTopicArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `AutoConfigEnabledInput`<sup>Optional</sup> <a name="AutoConfigEnabledInput" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.autoConfigEnabledInput"></a>

```go
func AutoConfigEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `AutoCreateInput`<sup>Optional</sup> <a name="AutoCreateInput" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.autoCreateInput"></a>

```go
func AutoCreateInput() interface{}
```

- *Type:* interface{}

---

##### `CweMonitorEnabledInput`<sup>Optional</sup> <a name="CweMonitorEnabledInput" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.cweMonitorEnabledInput"></a>

```go
func CweMonitorEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `GroupingTypeInput`<sup>Optional</sup> <a name="GroupingTypeInput" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.groupingTypeInput"></a>

```go
func GroupingTypeInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OpsCenterEnabledInput`<sup>Optional</sup> <a name="OpsCenterEnabledInput" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.opsCenterEnabledInput"></a>

```go
func OpsCenterEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `OpsItemSnsTopicArnInput`<sup>Optional</sup> <a name="OpsItemSnsTopicArnInput" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.opsItemSnsTopicArnInput"></a>

```go
func OpsItemSnsTopicArnInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AutoConfigEnabled`<sup>Required</sup> <a name="AutoConfigEnabled" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.autoConfigEnabled"></a>

```go
func AutoConfigEnabled() interface{}
```

- *Type:* interface{}

---

##### `AutoCreate`<sup>Required</sup> <a name="AutoCreate" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.autoCreate"></a>

```go
func AutoCreate() interface{}
```

- *Type:* interface{}

---

##### `CweMonitorEnabled`<sup>Required</sup> <a name="CweMonitorEnabled" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.cweMonitorEnabled"></a>

```go
func CweMonitorEnabled() interface{}
```

- *Type:* interface{}

---

##### `GroupingType`<sup>Required</sup> <a name="GroupingType" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.groupingType"></a>

```go
func GroupingType() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `OpsCenterEnabled`<sup>Required</sup> <a name="OpsCenterEnabled" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.opsCenterEnabled"></a>

```go
func OpsCenterEnabled() interface{}
```

- *Type:* interface{}

---

##### `OpsItemSnsTopicArn`<sup>Required</sup> <a name="OpsItemSnsTopicArn" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.opsItemSnsTopicArn"></a>

```go
func OpsItemSnsTopicArn() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationinsightsApplicationConfig <a name="ApplicationinsightsApplicationConfig" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/applicationinsightsapplication"

&applicationinsightsapplication.ApplicationinsightsApplicationConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ResourceGroupName: *string,
	AutoConfigEnabled: interface{},
	AutoCreate: interface{},
	CweMonitorEnabled: interface{},
	GroupingType: *string,
	Id: *string,
	OpsCenterEnabled: interface{},
	OpsItemSnsTopicArn: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#resource_group_name ApplicationinsightsApplication#resource_group_name}. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.autoConfigEnabled">AutoConfigEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#auto_config_enabled ApplicationinsightsApplication#auto_config_enabled}. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.autoCreate">AutoCreate</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#auto_create ApplicationinsightsApplication#auto_create}. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.cweMonitorEnabled">CweMonitorEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#cwe_monitor_enabled ApplicationinsightsApplication#cwe_monitor_enabled}. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.groupingType">GroupingType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#grouping_type ApplicationinsightsApplication#grouping_type}. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#id ApplicationinsightsApplication#id}. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.opsCenterEnabled">OpsCenterEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#ops_center_enabled ApplicationinsightsApplication#ops_center_enabled}. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.opsItemSnsTopicArn">OpsItemSnsTopicArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#ops_item_sns_topic_arn ApplicationinsightsApplication#ops_item_sns_topic_arn}. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#tags ApplicationinsightsApplication#tags}. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#tags_all ApplicationinsightsApplication#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#resource_group_name ApplicationinsightsApplication#resource_group_name}.

---

##### `AutoConfigEnabled`<sup>Optional</sup> <a name="AutoConfigEnabled" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.autoConfigEnabled"></a>

```go
AutoConfigEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#auto_config_enabled ApplicationinsightsApplication#auto_config_enabled}.

---

##### `AutoCreate`<sup>Optional</sup> <a name="AutoCreate" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.autoCreate"></a>

```go
AutoCreate interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#auto_create ApplicationinsightsApplication#auto_create}.

---

##### `CweMonitorEnabled`<sup>Optional</sup> <a name="CweMonitorEnabled" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.cweMonitorEnabled"></a>

```go
CweMonitorEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#cwe_monitor_enabled ApplicationinsightsApplication#cwe_monitor_enabled}.

---

##### `GroupingType`<sup>Optional</sup> <a name="GroupingType" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.groupingType"></a>

```go
GroupingType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#grouping_type ApplicationinsightsApplication#grouping_type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#id ApplicationinsightsApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OpsCenterEnabled`<sup>Optional</sup> <a name="OpsCenterEnabled" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.opsCenterEnabled"></a>

```go
OpsCenterEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#ops_center_enabled ApplicationinsightsApplication#ops_center_enabled}.

---

##### `OpsItemSnsTopicArn`<sup>Optional</sup> <a name="OpsItemSnsTopicArn" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.opsItemSnsTopicArn"></a>

```go
OpsItemSnsTopicArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#ops_item_sns_topic_arn ApplicationinsightsApplication#ops_item_sns_topic_arn}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#tags ApplicationinsightsApplication#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/applicationinsights_application#tags_all ApplicationinsightsApplication#tags_all}.

---



