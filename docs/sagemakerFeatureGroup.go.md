# `sagemakerFeatureGroup` Submodule <a name="`sagemakerFeatureGroup` Submodule" id="@cdktf/provider-aws.sagemakerFeatureGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerFeatureGroup <a name="SagemakerFeatureGroup" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group aws_sagemaker_feature_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sagemakerfeaturegroup"

sagemakerfeaturegroup.NewSagemakerFeatureGroup(scope Construct, id *string, config SagemakerFeatureGroupConfig) SagemakerFeatureGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig">SagemakerFeatureGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig">SagemakerFeatureGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.putFeatureDefinition">PutFeatureDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.putOfflineStoreConfig">PutOfflineStoreConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.putOnlineStoreConfig">PutOnlineStoreConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.resetOfflineStoreConfig">ResetOfflineStoreConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.resetOnlineStoreConfig">ResetOnlineStoreConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFeatureDefinition` <a name="PutFeatureDefinition" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.putFeatureDefinition"></a>

```go
func PutFeatureDefinition(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.putFeatureDefinition.parameter.value"></a>

- *Type:* interface{}

---

##### `PutOfflineStoreConfig` <a name="PutOfflineStoreConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.putOfflineStoreConfig"></a>

```go
func PutOfflineStoreConfig(value SagemakerFeatureGroupOfflineStoreConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.putOfflineStoreConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfig">SagemakerFeatureGroupOfflineStoreConfig</a>

---

##### `PutOnlineStoreConfig` <a name="PutOnlineStoreConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.putOnlineStoreConfig"></a>

```go
func PutOnlineStoreConfig(value SagemakerFeatureGroupOnlineStoreConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.putOnlineStoreConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfig">SagemakerFeatureGroupOnlineStoreConfig</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.resetId"></a>

```go
func ResetId()
```

##### `ResetOfflineStoreConfig` <a name="ResetOfflineStoreConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.resetOfflineStoreConfig"></a>

```go
func ResetOfflineStoreConfig()
```

##### `ResetOnlineStoreConfig` <a name="ResetOnlineStoreConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.resetOnlineStoreConfig"></a>

```go
func ResetOnlineStoreConfig()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.resetTagsAll"></a>

```go
func ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sagemakerfeaturegroup"

sagemakerfeaturegroup.SagemakerFeatureGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sagemakerfeaturegroup"

sagemakerfeaturegroup.SagemakerFeatureGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sagemakerfeaturegroup"

sagemakerfeaturegroup.SagemakerFeatureGroup_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.featureDefinition">FeatureDefinition</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionList">SagemakerFeatureGroupFeatureDefinitionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.offlineStoreConfig">OfflineStoreConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference">SagemakerFeatureGroupOfflineStoreConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.onlineStoreConfig">OnlineStoreConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference">SagemakerFeatureGroupOnlineStoreConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.eventTimeFeatureNameInput">EventTimeFeatureNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.featureDefinitionInput">FeatureDefinitionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.featureGroupNameInput">FeatureGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.offlineStoreConfigInput">OfflineStoreConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfig">SagemakerFeatureGroupOfflineStoreConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.onlineStoreConfigInput">OnlineStoreConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfig">SagemakerFeatureGroupOnlineStoreConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.recordIdentifierFeatureNameInput">RecordIdentifierFeatureNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.eventTimeFeatureName">EventTimeFeatureName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.featureGroupName">FeatureGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.recordIdentifierFeatureName">RecordIdentifierFeatureName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `FeatureDefinition`<sup>Required</sup> <a name="FeatureDefinition" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.featureDefinition"></a>

```go
func FeatureDefinition() SagemakerFeatureGroupFeatureDefinitionList
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionList">SagemakerFeatureGroupFeatureDefinitionList</a>

---

##### `OfflineStoreConfig`<sup>Required</sup> <a name="OfflineStoreConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.offlineStoreConfig"></a>

```go
func OfflineStoreConfig() SagemakerFeatureGroupOfflineStoreConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference">SagemakerFeatureGroupOfflineStoreConfigOutputReference</a>

---

##### `OnlineStoreConfig`<sup>Required</sup> <a name="OnlineStoreConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.onlineStoreConfig"></a>

```go
func OnlineStoreConfig() SagemakerFeatureGroupOnlineStoreConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference">SagemakerFeatureGroupOnlineStoreConfigOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EventTimeFeatureNameInput`<sup>Optional</sup> <a name="EventTimeFeatureNameInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.eventTimeFeatureNameInput"></a>

```go
func EventTimeFeatureNameInput() *string
```

- *Type:* *string

---

##### `FeatureDefinitionInput`<sup>Optional</sup> <a name="FeatureDefinitionInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.featureDefinitionInput"></a>

```go
func FeatureDefinitionInput() interface{}
```

- *Type:* interface{}

---

##### `FeatureGroupNameInput`<sup>Optional</sup> <a name="FeatureGroupNameInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.featureGroupNameInput"></a>

```go
func FeatureGroupNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OfflineStoreConfigInput`<sup>Optional</sup> <a name="OfflineStoreConfigInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.offlineStoreConfigInput"></a>

```go
func OfflineStoreConfigInput() SagemakerFeatureGroupOfflineStoreConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfig">SagemakerFeatureGroupOfflineStoreConfig</a>

---

##### `OnlineStoreConfigInput`<sup>Optional</sup> <a name="OnlineStoreConfigInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.onlineStoreConfigInput"></a>

```go
func OnlineStoreConfigInput() SagemakerFeatureGroupOnlineStoreConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfig">SagemakerFeatureGroupOnlineStoreConfig</a>

---

##### `RecordIdentifierFeatureNameInput`<sup>Optional</sup> <a name="RecordIdentifierFeatureNameInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.recordIdentifierFeatureNameInput"></a>

```go
func RecordIdentifierFeatureNameInput() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EventTimeFeatureName`<sup>Required</sup> <a name="EventTimeFeatureName" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.eventTimeFeatureName"></a>

```go
func EventTimeFeatureName() *string
```

- *Type:* *string

---

##### `FeatureGroupName`<sup>Required</sup> <a name="FeatureGroupName" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.featureGroupName"></a>

```go
func FeatureGroupName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `RecordIdentifierFeatureName`<sup>Required</sup> <a name="RecordIdentifierFeatureName" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.recordIdentifierFeatureName"></a>

```go
func RecordIdentifierFeatureName() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerFeatureGroupConfig <a name="SagemakerFeatureGroupConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sagemakerfeaturegroup"

&sagemakerfeaturegroup.SagemakerFeatureGroupConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	EventTimeFeatureName: *string,
	FeatureDefinition: interface{},
	FeatureGroupName: *string,
	RecordIdentifierFeatureName: *string,
	RoleArn: *string,
	Description: *string,
	Id: *string,
	OfflineStoreConfig: github.com/cdktf/cdktf-provider-aws-go/aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfig,
	OnlineStoreConfig: github.com/cdktf/cdktf-provider-aws-go/aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfig,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.eventTimeFeatureName">EventTimeFeatureName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group#event_time_feature_name SagemakerFeatureGroup#event_time_feature_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.featureDefinition">FeatureDefinition</a></code> | <code>interface{}</code> | feature_definition block. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.featureGroupName">FeatureGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group#feature_group_name SagemakerFeatureGroup#feature_group_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.recordIdentifierFeatureName">RecordIdentifierFeatureName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group#record_identifier_feature_name SagemakerFeatureGroup#record_identifier_feature_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.roleArn">RoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group#role_arn SagemakerFeatureGroup#role_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group#description SagemakerFeatureGroup#description}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group#id SagemakerFeatureGroup#id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.offlineStoreConfig">OfflineStoreConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfig">SagemakerFeatureGroupOfflineStoreConfig</a></code> | offline_store_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.onlineStoreConfig">OnlineStoreConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfig">SagemakerFeatureGroupOnlineStoreConfig</a></code> | online_store_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group#tags SagemakerFeatureGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group#tags_all SagemakerFeatureGroup#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EventTimeFeatureName`<sup>Required</sup> <a name="EventTimeFeatureName" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.eventTimeFeatureName"></a>

```go
EventTimeFeatureName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group#event_time_feature_name SagemakerFeatureGroup#event_time_feature_name}.

---

##### `FeatureDefinition`<sup>Required</sup> <a name="FeatureDefinition" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.featureDefinition"></a>

```go
FeatureDefinition interface{}
```

- *Type:* interface{}

feature_definition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group#feature_definition SagemakerFeatureGroup#feature_definition}

---

##### `FeatureGroupName`<sup>Required</sup> <a name="FeatureGroupName" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.featureGroupName"></a>

```go
FeatureGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group#feature_group_name SagemakerFeatureGroup#feature_group_name}.

---

##### `RecordIdentifierFeatureName`<sup>Required</sup> <a name="RecordIdentifierFeatureName" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.recordIdentifierFeatureName"></a>

```go
RecordIdentifierFeatureName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group#record_identifier_feature_name SagemakerFeatureGroup#record_identifier_feature_name}.

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group#role_arn SagemakerFeatureGroup#role_arn}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group#description SagemakerFeatureGroup#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group#id SagemakerFeatureGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OfflineStoreConfig`<sup>Optional</sup> <a name="OfflineStoreConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.offlineStoreConfig"></a>

```go
OfflineStoreConfig SagemakerFeatureGroupOfflineStoreConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfig">SagemakerFeatureGroupOfflineStoreConfig</a>

offline_store_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group#offline_store_config SagemakerFeatureGroup#offline_store_config}

---

##### `OnlineStoreConfig`<sup>Optional</sup> <a name="OnlineStoreConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.onlineStoreConfig"></a>

```go
OnlineStoreConfig SagemakerFeatureGroupOnlineStoreConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfig">SagemakerFeatureGroupOnlineStoreConfig</a>

online_store_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group#online_store_config SagemakerFeatureGroup#online_store_config}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group#tags SagemakerFeatureGroup#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group#tags_all SagemakerFeatureGroup#tags_all}.

---

### SagemakerFeatureGroupFeatureDefinition <a name="SagemakerFeatureGroupFeatureDefinition" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sagemakerfeaturegroup"

&sagemakerfeaturegroup.SagemakerFeatureGroupFeatureDefinition {
	FeatureName: *string,
	FeatureType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinition.property.featureName">FeatureName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group#feature_name SagemakerFeatureGroup#feature_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinition.property.featureType">FeatureType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group#feature_type SagemakerFeatureGroup#feature_type}. |

---

##### `FeatureName`<sup>Optional</sup> <a name="FeatureName" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinition.property.featureName"></a>

```go
FeatureName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group#feature_name SagemakerFeatureGroup#feature_name}.

---

##### `FeatureType`<sup>Optional</sup> <a name="FeatureType" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinition.property.featureType"></a>

```go
FeatureType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group#feature_type SagemakerFeatureGroup#feature_type}.

---

### SagemakerFeatureGroupOfflineStoreConfig <a name="SagemakerFeatureGroupOfflineStoreConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sagemakerfeaturegroup"

&sagemakerfeaturegroup.SagemakerFeatureGroupOfflineStoreConfig {
	S3StorageConfig: github.com/cdktf/cdktf-provider-aws-go/aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig,
	DataCatalogConfig: github.com/cdktf/cdktf-provider-aws-go/aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig,
	DisableGlueTableCreation: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfig.property.s3StorageConfig">S3StorageConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig">SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig</a></code> | s3_storage_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfig.property.dataCatalogConfig">DataCatalogConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig">SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig</a></code> | data_catalog_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfig.property.disableGlueTableCreation">DisableGlueTableCreation</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group#disable_glue_table_creation SagemakerFeatureGroup#disable_glue_table_creation}. |

---

##### `S3StorageConfig`<sup>Required</sup> <a name="S3StorageConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfig.property.s3StorageConfig"></a>

```go
S3StorageConfig SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig">SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig</a>

s3_storage_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group#s3_storage_config SagemakerFeatureGroup#s3_storage_config}

---

##### `DataCatalogConfig`<sup>Optional</sup> <a name="DataCatalogConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfig.property.dataCatalogConfig"></a>

```go
DataCatalogConfig SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig">SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig</a>

data_catalog_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group#data_catalog_config SagemakerFeatureGroup#data_catalog_config}

---

##### `DisableGlueTableCreation`<sup>Optional</sup> <a name="DisableGlueTableCreation" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfig.property.disableGlueTableCreation"></a>

```go
DisableGlueTableCreation interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group#disable_glue_table_creation SagemakerFeatureGroup#disable_glue_table_creation}.

---

### SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig <a name="SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sagemakerfeaturegroup"

&sagemakerfeaturegroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig {
	Catalog: *string,
	Database: *string,
	TableName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig.property.catalog">Catalog</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group#catalog SagemakerFeatureGroup#catalog}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig.property.database">Database</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group#database SagemakerFeatureGroup#database}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig.property.tableName">TableName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group#table_name SagemakerFeatureGroup#table_name}. |

---

##### `Catalog`<sup>Optional</sup> <a name="Catalog" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig.property.catalog"></a>

```go
Catalog *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group#catalog SagemakerFeatureGroup#catalog}.

---

##### `Database`<sup>Optional</sup> <a name="Database" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig.property.database"></a>

```go
Database *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group#database SagemakerFeatureGroup#database}.

---

##### `TableName`<sup>Optional</sup> <a name="TableName" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig.property.tableName"></a>

```go
TableName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group#table_name SagemakerFeatureGroup#table_name}.

---

### SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig <a name="SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sagemakerfeaturegroup"

&sagemakerfeaturegroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig {
	S3Uri: *string,
	KmsKeyId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig.property.s3Uri">S3Uri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group#s3_uri SagemakerFeatureGroup#s3_uri}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group#kms_key_id SagemakerFeatureGroup#kms_key_id}. |

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig.property.s3Uri"></a>

```go
S3Uri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group#s3_uri SagemakerFeatureGroup#s3_uri}.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group#kms_key_id SagemakerFeatureGroup#kms_key_id}.

---

### SagemakerFeatureGroupOnlineStoreConfig <a name="SagemakerFeatureGroupOnlineStoreConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sagemakerfeaturegroup"

&sagemakerfeaturegroup.SagemakerFeatureGroupOnlineStoreConfig {
	EnableOnlineStore: interface{},
	SecurityConfig: github.com/cdktf/cdktf-provider-aws-go/aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfig.property.enableOnlineStore">EnableOnlineStore</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group#enable_online_store SagemakerFeatureGroup#enable_online_store}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfig.property.securityConfig">SecurityConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfig">SagemakerFeatureGroupOnlineStoreConfigSecurityConfig</a></code> | security_config block. |

---

##### `EnableOnlineStore`<sup>Optional</sup> <a name="EnableOnlineStore" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfig.property.enableOnlineStore"></a>

```go
EnableOnlineStore interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group#enable_online_store SagemakerFeatureGroup#enable_online_store}.

---

##### `SecurityConfig`<sup>Optional</sup> <a name="SecurityConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfig.property.securityConfig"></a>

```go
SecurityConfig SagemakerFeatureGroupOnlineStoreConfigSecurityConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfig">SagemakerFeatureGroupOnlineStoreConfigSecurityConfig</a>

security_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group#security_config SagemakerFeatureGroup#security_config}

---

### SagemakerFeatureGroupOnlineStoreConfigSecurityConfig <a name="SagemakerFeatureGroupOnlineStoreConfigSecurityConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sagemakerfeaturegroup"

&sagemakerfeaturegroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfig {
	KmsKeyId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group#kms_key_id SagemakerFeatureGroup#kms_key_id}. |

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfig.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group#kms_key_id SagemakerFeatureGroup#kms_key_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerFeatureGroupFeatureDefinitionList <a name="SagemakerFeatureGroupFeatureDefinitionList" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sagemakerfeaturegroup"

sagemakerfeaturegroup.NewSagemakerFeatureGroupFeatureDefinitionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SagemakerFeatureGroupFeatureDefinitionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionList.get"></a>

```go
func Get(index *f64) SagemakerFeatureGroupFeatureDefinitionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerFeatureGroupFeatureDefinitionOutputReference <a name="SagemakerFeatureGroupFeatureDefinitionOutputReference" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sagemakerfeaturegroup"

sagemakerfeaturegroup.NewSagemakerFeatureGroupFeatureDefinitionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SagemakerFeatureGroupFeatureDefinitionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.resetFeatureName">ResetFeatureName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.resetFeatureType">ResetFeatureType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFeatureName` <a name="ResetFeatureName" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.resetFeatureName"></a>

```go
func ResetFeatureName()
```

##### `ResetFeatureType` <a name="ResetFeatureType" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.resetFeatureType"></a>

```go
func ResetFeatureType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.property.featureNameInput">FeatureNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.property.featureTypeInput">FeatureTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.property.featureName">FeatureName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.property.featureType">FeatureType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FeatureNameInput`<sup>Optional</sup> <a name="FeatureNameInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.property.featureNameInput"></a>

```go
func FeatureNameInput() *string
```

- *Type:* *string

---

##### `FeatureTypeInput`<sup>Optional</sup> <a name="FeatureTypeInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.property.featureTypeInput"></a>

```go
func FeatureTypeInput() *string
```

- *Type:* *string

---

##### `FeatureName`<sup>Required</sup> <a name="FeatureName" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.property.featureName"></a>

```go
func FeatureName() *string
```

- *Type:* *string

---

##### `FeatureType`<sup>Required</sup> <a name="FeatureType" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.property.featureType"></a>

```go
func FeatureType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference <a name="SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sagemakerfeaturegroup"

sagemakerfeaturegroup.NewSagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.resetCatalog">ResetCatalog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.resetDatabase">ResetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.resetTableName">ResetTableName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCatalog` <a name="ResetCatalog" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.resetCatalog"></a>

```go
func ResetCatalog()
```

##### `ResetDatabase` <a name="ResetDatabase" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.resetDatabase"></a>

```go
func ResetDatabase()
```

##### `ResetTableName` <a name="ResetTableName" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.resetTableName"></a>

```go
func ResetTableName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.catalogInput">CatalogInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.databaseInput">DatabaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.tableNameInput">TableNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.catalog">Catalog</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.database">Database</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig">SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CatalogInput`<sup>Optional</sup> <a name="CatalogInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.catalogInput"></a>

```go
func CatalogInput() *string
```

- *Type:* *string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.databaseInput"></a>

```go
func DatabaseInput() *string
```

- *Type:* *string

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.tableNameInput"></a>

```go
func TableNameInput() *string
```

- *Type:* *string

---

##### `Catalog`<sup>Required</sup> <a name="Catalog" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.catalog"></a>

```go
func Catalog() *string
```

- *Type:* *string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.database"></a>

```go
func Database() *string
```

- *Type:* *string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig">SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig</a>

---


### SagemakerFeatureGroupOfflineStoreConfigOutputReference <a name="SagemakerFeatureGroupOfflineStoreConfigOutputReference" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sagemakerfeaturegroup"

sagemakerfeaturegroup.NewSagemakerFeatureGroupOfflineStoreConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerFeatureGroupOfflineStoreConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.putDataCatalogConfig">PutDataCatalogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.putS3StorageConfig">PutS3StorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.resetDataCatalogConfig">ResetDataCatalogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.resetDisableGlueTableCreation">ResetDisableGlueTableCreation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDataCatalogConfig` <a name="PutDataCatalogConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.putDataCatalogConfig"></a>

```go
func PutDataCatalogConfig(value SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.putDataCatalogConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig">SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig</a>

---

##### `PutS3StorageConfig` <a name="PutS3StorageConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.putS3StorageConfig"></a>

```go
func PutS3StorageConfig(value SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.putS3StorageConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig">SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig</a>

---

##### `ResetDataCatalogConfig` <a name="ResetDataCatalogConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.resetDataCatalogConfig"></a>

```go
func ResetDataCatalogConfig()
```

##### `ResetDisableGlueTableCreation` <a name="ResetDisableGlueTableCreation" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.resetDisableGlueTableCreation"></a>

```go
func ResetDisableGlueTableCreation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.dataCatalogConfig">DataCatalogConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference">SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.s3StorageConfig">S3StorageConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference">SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.dataCatalogConfigInput">DataCatalogConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig">SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.disableGlueTableCreationInput">DisableGlueTableCreationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.s3StorageConfigInput">S3StorageConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig">SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.disableGlueTableCreation">DisableGlueTableCreation</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfig">SagemakerFeatureGroupOfflineStoreConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataCatalogConfig`<sup>Required</sup> <a name="DataCatalogConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.dataCatalogConfig"></a>

```go
func DataCatalogConfig() SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference">SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference</a>

---

##### `S3StorageConfig`<sup>Required</sup> <a name="S3StorageConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.s3StorageConfig"></a>

```go
func S3StorageConfig() SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference">SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference</a>

---

##### `DataCatalogConfigInput`<sup>Optional</sup> <a name="DataCatalogConfigInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.dataCatalogConfigInput"></a>

```go
func DataCatalogConfigInput() SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig">SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig</a>

---

##### `DisableGlueTableCreationInput`<sup>Optional</sup> <a name="DisableGlueTableCreationInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.disableGlueTableCreationInput"></a>

```go
func DisableGlueTableCreationInput() interface{}
```

- *Type:* interface{}

---

##### `S3StorageConfigInput`<sup>Optional</sup> <a name="S3StorageConfigInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.s3StorageConfigInput"></a>

```go
func S3StorageConfigInput() SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig">SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig</a>

---

##### `DisableGlueTableCreation`<sup>Required</sup> <a name="DisableGlueTableCreation" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.disableGlueTableCreation"></a>

```go
func DisableGlueTableCreation() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() SagemakerFeatureGroupOfflineStoreConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfig">SagemakerFeatureGroupOfflineStoreConfig</a>

---


### SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference <a name="SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sagemakerfeaturegroup"

sagemakerfeaturegroup.NewSagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.property.s3UriInput">S3UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.property.s3Uri">S3Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig">SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `S3UriInput`<sup>Optional</sup> <a name="S3UriInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.property.s3UriInput"></a>

```go
func S3UriInput() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.property.s3Uri"></a>

```go
func S3Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig">SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig</a>

---


### SagemakerFeatureGroupOnlineStoreConfigOutputReference <a name="SagemakerFeatureGroupOnlineStoreConfigOutputReference" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sagemakerfeaturegroup"

sagemakerfeaturegroup.NewSagemakerFeatureGroupOnlineStoreConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerFeatureGroupOnlineStoreConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.putSecurityConfig">PutSecurityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.resetEnableOnlineStore">ResetEnableOnlineStore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.resetSecurityConfig">ResetSecurityConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSecurityConfig` <a name="PutSecurityConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.putSecurityConfig"></a>

```go
func PutSecurityConfig(value SagemakerFeatureGroupOnlineStoreConfigSecurityConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.putSecurityConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfig">SagemakerFeatureGroupOnlineStoreConfigSecurityConfig</a>

---

##### `ResetEnableOnlineStore` <a name="ResetEnableOnlineStore" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.resetEnableOnlineStore"></a>

```go
func ResetEnableOnlineStore()
```

##### `ResetSecurityConfig` <a name="ResetSecurityConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.resetSecurityConfig"></a>

```go
func ResetSecurityConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.securityConfig">SecurityConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference">SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.enableOnlineStoreInput">EnableOnlineStoreInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.securityConfigInput">SecurityConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfig">SagemakerFeatureGroupOnlineStoreConfigSecurityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.enableOnlineStore">EnableOnlineStore</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfig">SagemakerFeatureGroupOnlineStoreConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecurityConfig`<sup>Required</sup> <a name="SecurityConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.securityConfig"></a>

```go
func SecurityConfig() SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference">SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference</a>

---

##### `EnableOnlineStoreInput`<sup>Optional</sup> <a name="EnableOnlineStoreInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.enableOnlineStoreInput"></a>

```go
func EnableOnlineStoreInput() interface{}
```

- *Type:* interface{}

---

##### `SecurityConfigInput`<sup>Optional</sup> <a name="SecurityConfigInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.securityConfigInput"></a>

```go
func SecurityConfigInput() SagemakerFeatureGroupOnlineStoreConfigSecurityConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfig">SagemakerFeatureGroupOnlineStoreConfigSecurityConfig</a>

---

##### `EnableOnlineStore`<sup>Required</sup> <a name="EnableOnlineStore" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.enableOnlineStore"></a>

```go
func EnableOnlineStore() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() SagemakerFeatureGroupOnlineStoreConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfig">SagemakerFeatureGroupOnlineStoreConfig</a>

---


### SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference <a name="SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sagemakerfeaturegroup"

sagemakerfeaturegroup.NewSagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfig">SagemakerFeatureGroupOnlineStoreConfigSecurityConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() SagemakerFeatureGroupOnlineStoreConfigSecurityConfig
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfig">SagemakerFeatureGroupOnlineStoreConfigSecurityConfig</a>

---



