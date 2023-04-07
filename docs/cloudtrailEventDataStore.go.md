# `cloudtrailEventDataStore` Submodule <a name="`cloudtrailEventDataStore` Submodule" id="@cdktf/provider-aws.cloudtrailEventDataStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudtrailEventDataStore <a name="CloudtrailEventDataStore" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store aws_cloudtrail_event_data_store}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudtraileventdatastore"

cloudtraileventdatastore.NewCloudtrailEventDataStore(scope Construct, id *string, config CloudtrailEventDataStoreConfig) CloudtrailEventDataStore
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig">CloudtrailEventDataStoreConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig">CloudtrailEventDataStoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.putAdvancedEventSelector">PutAdvancedEventSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetAdvancedEventSelector">ResetAdvancedEventSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetMultiRegionEnabled">ResetMultiRegionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetOrganizationEnabled">ResetOrganizationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetRetentionPeriod">ResetRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetTerminationProtectionEnabled">ResetTerminationProtectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAdvancedEventSelector` <a name="PutAdvancedEventSelector" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.putAdvancedEventSelector"></a>

```go
func PutAdvancedEventSelector(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.putAdvancedEventSelector.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.putTimeouts"></a>

```go
func PutTimeouts(value CloudtrailEventDataStoreTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeouts">CloudtrailEventDataStoreTimeouts</a>

---

##### `ResetAdvancedEventSelector` <a name="ResetAdvancedEventSelector" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetAdvancedEventSelector"></a>

```go
func ResetAdvancedEventSelector()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetId"></a>

```go
func ResetId()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```

##### `ResetMultiRegionEnabled` <a name="ResetMultiRegionEnabled" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetMultiRegionEnabled"></a>

```go
func ResetMultiRegionEnabled()
```

##### `ResetOrganizationEnabled` <a name="ResetOrganizationEnabled" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetOrganizationEnabled"></a>

```go
func ResetOrganizationEnabled()
```

##### `ResetRetentionPeriod` <a name="ResetRetentionPeriod" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetRetentionPeriod"></a>

```go
func ResetRetentionPeriod()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTerminationProtectionEnabled` <a name="ResetTerminationProtectionEnabled" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetTerminationProtectionEnabled"></a>

```go
func ResetTerminationProtectionEnabled()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudtraileventdatastore"

cloudtraileventdatastore.CloudtrailEventDataStore_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudtraileventdatastore"

cloudtraileventdatastore.CloudtrailEventDataStore_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudtraileventdatastore"

cloudtraileventdatastore.CloudtrailEventDataStore_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.advancedEventSelector">AdvancedEventSelector</a></code> | <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList">CloudtrailEventDataStoreAdvancedEventSelectorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference">CloudtrailEventDataStoreTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.advancedEventSelectorInput">AdvancedEventSelectorInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.multiRegionEnabledInput">MultiRegionEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.organizationEnabledInput">OrganizationEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.retentionPeriodInput">RetentionPeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.terminationProtectionEnabledInput">TerminationProtectionEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.multiRegionEnabled">MultiRegionEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.organizationEnabled">OrganizationEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.retentionPeriod">RetentionPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.terminationProtectionEnabled">TerminationProtectionEnabled</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AdvancedEventSelector`<sup>Required</sup> <a name="AdvancedEventSelector" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.advancedEventSelector"></a>

```go
func AdvancedEventSelector() CloudtrailEventDataStoreAdvancedEventSelectorList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList">CloudtrailEventDataStoreAdvancedEventSelectorList</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.timeouts"></a>

```go
func Timeouts() CloudtrailEventDataStoreTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference">CloudtrailEventDataStoreTimeoutsOutputReference</a>

---

##### `AdvancedEventSelectorInput`<sup>Optional</sup> <a name="AdvancedEventSelectorInput" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.advancedEventSelectorInput"></a>

```go
func AdvancedEventSelectorInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `MultiRegionEnabledInput`<sup>Optional</sup> <a name="MultiRegionEnabledInput" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.multiRegionEnabledInput"></a>

```go
func MultiRegionEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OrganizationEnabledInput`<sup>Optional</sup> <a name="OrganizationEnabledInput" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.organizationEnabledInput"></a>

```go
func OrganizationEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `RetentionPeriodInput`<sup>Optional</sup> <a name="RetentionPeriodInput" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.retentionPeriodInput"></a>

```go
func RetentionPeriodInput() *f64
```

- *Type:* *f64

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TerminationProtectionEnabledInput`<sup>Optional</sup> <a name="TerminationProtectionEnabledInput" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.terminationProtectionEnabledInput"></a>

```go
func TerminationProtectionEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `MultiRegionEnabled`<sup>Required</sup> <a name="MultiRegionEnabled" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.multiRegionEnabled"></a>

```go
func MultiRegionEnabled() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OrganizationEnabled`<sup>Required</sup> <a name="OrganizationEnabled" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.organizationEnabled"></a>

```go
func OrganizationEnabled() interface{}
```

- *Type:* interface{}

---

##### `RetentionPeriod`<sup>Required</sup> <a name="RetentionPeriod" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.retentionPeriod"></a>

```go
func RetentionPeriod() *f64
```

- *Type:* *f64

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TerminationProtectionEnabled`<sup>Required</sup> <a name="TerminationProtectionEnabled" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.terminationProtectionEnabled"></a>

```go
func TerminationProtectionEnabled() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStore.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudtrailEventDataStoreAdvancedEventSelector <a name="CloudtrailEventDataStoreAdvancedEventSelector" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelector.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudtraileventdatastore"

&cloudtraileventdatastore.CloudtrailEventDataStoreAdvancedEventSelector {
	FieldSelector: interface{},
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelector.property.fieldSelector">FieldSelector</a></code> | <code>interface{}</code> | field_selector block. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelector.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#name CloudtrailEventDataStore#name}. |

---

##### `FieldSelector`<sup>Optional</sup> <a name="FieldSelector" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelector.property.fieldSelector"></a>

```go
FieldSelector interface{}
```

- *Type:* interface{}

field_selector block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#field_selector CloudtrailEventDataStore#field_selector}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelector.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#name CloudtrailEventDataStore#name}.

---

### CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector <a name="CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudtraileventdatastore"

&cloudtraileventdatastore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector {
	EndsWith: *[]*string,
	EqualTo: *[]*string,
	Field: *string,
	NotEndsWith: *[]*string,
	NotEquals: *[]*string,
	NotStartsWith: *[]*string,
	StartsWith: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector.property.endsWith">EndsWith</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#ends_with CloudtrailEventDataStore#ends_with}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector.property.equalTo">EqualTo</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#equals CloudtrailEventDataStore#equals}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector.property.field">Field</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#field CloudtrailEventDataStore#field}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector.property.notEndsWith">NotEndsWith</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#not_ends_with CloudtrailEventDataStore#not_ends_with}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector.property.notEquals">NotEquals</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#not_equals CloudtrailEventDataStore#not_equals}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector.property.notStartsWith">NotStartsWith</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#not_starts_with CloudtrailEventDataStore#not_starts_with}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector.property.startsWith">StartsWith</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#starts_with CloudtrailEventDataStore#starts_with}. |

---

##### `EndsWith`<sup>Optional</sup> <a name="EndsWith" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector.property.endsWith"></a>

```go
EndsWith *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#ends_with CloudtrailEventDataStore#ends_with}.

---

##### `EqualTo`<sup>Optional</sup> <a name="EqualTo" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector.property.equalTo"></a>

```go
EqualTo *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#equals CloudtrailEventDataStore#equals}.

---

##### `Field`<sup>Optional</sup> <a name="Field" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector.property.field"></a>

```go
Field *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#field CloudtrailEventDataStore#field}.

---

##### `NotEndsWith`<sup>Optional</sup> <a name="NotEndsWith" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector.property.notEndsWith"></a>

```go
NotEndsWith *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#not_ends_with CloudtrailEventDataStore#not_ends_with}.

---

##### `NotEquals`<sup>Optional</sup> <a name="NotEquals" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector.property.notEquals"></a>

```go
NotEquals *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#not_equals CloudtrailEventDataStore#not_equals}.

---

##### `NotStartsWith`<sup>Optional</sup> <a name="NotStartsWith" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector.property.notStartsWith"></a>

```go
NotStartsWith *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#not_starts_with CloudtrailEventDataStore#not_starts_with}.

---

##### `StartsWith`<sup>Optional</sup> <a name="StartsWith" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector.property.startsWith"></a>

```go
StartsWith *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#starts_with CloudtrailEventDataStore#starts_with}.

---

### CloudtrailEventDataStoreConfig <a name="CloudtrailEventDataStoreConfig" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudtraileventdatastore"

&cloudtraileventdatastore.CloudtrailEventDataStoreConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	AdvancedEventSelector: interface{},
	Id: *string,
	KmsKeyId: *string,
	MultiRegionEnabled: interface{},
	OrganizationEnabled: interface{},
	RetentionPeriod: *f64,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	TerminationProtectionEnabled: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#name CloudtrailEventDataStore#name}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.advancedEventSelector">AdvancedEventSelector</a></code> | <code>interface{}</code> | advanced_event_selector block. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#id CloudtrailEventDataStore#id}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#kms_key_id CloudtrailEventDataStore#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.multiRegionEnabled">MultiRegionEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#multi_region_enabled CloudtrailEventDataStore#multi_region_enabled}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.organizationEnabled">OrganizationEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#organization_enabled CloudtrailEventDataStore#organization_enabled}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.retentionPeriod">RetentionPeriod</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#retention_period CloudtrailEventDataStore#retention_period}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#tags CloudtrailEventDataStore#tags}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#tags_all CloudtrailEventDataStore#tags_all}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.terminationProtectionEnabled">TerminationProtectionEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#termination_protection_enabled CloudtrailEventDataStore#termination_protection_enabled}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeouts">CloudtrailEventDataStoreTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#name CloudtrailEventDataStore#name}.

---

##### `AdvancedEventSelector`<sup>Optional</sup> <a name="AdvancedEventSelector" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.advancedEventSelector"></a>

```go
AdvancedEventSelector interface{}
```

- *Type:* interface{}

advanced_event_selector block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#advanced_event_selector CloudtrailEventDataStore#advanced_event_selector}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#id CloudtrailEventDataStore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#kms_key_id CloudtrailEventDataStore#kms_key_id}.

---

##### `MultiRegionEnabled`<sup>Optional</sup> <a name="MultiRegionEnabled" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.multiRegionEnabled"></a>

```go
MultiRegionEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#multi_region_enabled CloudtrailEventDataStore#multi_region_enabled}.

---

##### `OrganizationEnabled`<sup>Optional</sup> <a name="OrganizationEnabled" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.organizationEnabled"></a>

```go
OrganizationEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#organization_enabled CloudtrailEventDataStore#organization_enabled}.

---

##### `RetentionPeriod`<sup>Optional</sup> <a name="RetentionPeriod" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.retentionPeriod"></a>

```go
RetentionPeriod *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#retention_period CloudtrailEventDataStore#retention_period}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#tags CloudtrailEventDataStore#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#tags_all CloudtrailEventDataStore#tags_all}.

---

##### `TerminationProtectionEnabled`<sup>Optional</sup> <a name="TerminationProtectionEnabled" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.terminationProtectionEnabled"></a>

```go
TerminationProtectionEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#termination_protection_enabled CloudtrailEventDataStore#termination_protection_enabled}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreConfig.property.timeouts"></a>

```go
Timeouts CloudtrailEventDataStoreTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeouts">CloudtrailEventDataStoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#timeouts CloudtrailEventDataStore#timeouts}

---

### CloudtrailEventDataStoreTimeouts <a name="CloudtrailEventDataStoreTimeouts" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudtraileventdatastore"

&cloudtraileventdatastore.CloudtrailEventDataStoreTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#create CloudtrailEventDataStore#create}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#delete CloudtrailEventDataStore#delete}. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#update CloudtrailEventDataStore#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#create CloudtrailEventDataStore#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#delete CloudtrailEventDataStore#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudtrail_event_data_store#update CloudtrailEventDataStore#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList <a name="CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudtraileventdatastore"

cloudtraileventdatastore.NewCloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.get"></a>

```go
func Get(index *f64) CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference <a name="CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudtraileventdatastore"

cloudtraileventdatastore.NewCloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.resetEndsWith">ResetEndsWith</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.resetEqualTo">ResetEqualTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.resetField">ResetField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.resetNotEndsWith">ResetNotEndsWith</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.resetNotEquals">ResetNotEquals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.resetNotStartsWith">ResetNotStartsWith</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.resetStartsWith">ResetStartsWith</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndsWith` <a name="ResetEndsWith" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.resetEndsWith"></a>

```go
func ResetEndsWith()
```

##### `ResetEqualTo` <a name="ResetEqualTo" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.resetEqualTo"></a>

```go
func ResetEqualTo()
```

##### `ResetField` <a name="ResetField" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.resetField"></a>

```go
func ResetField()
```

##### `ResetNotEndsWith` <a name="ResetNotEndsWith" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.resetNotEndsWith"></a>

```go
func ResetNotEndsWith()
```

##### `ResetNotEquals` <a name="ResetNotEquals" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.resetNotEquals"></a>

```go
func ResetNotEquals()
```

##### `ResetNotStartsWith` <a name="ResetNotStartsWith" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.resetNotStartsWith"></a>

```go
func ResetNotStartsWith()
```

##### `ResetStartsWith` <a name="ResetStartsWith" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.resetStartsWith"></a>

```go
func ResetStartsWith()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.endsWithInput">EndsWithInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.equalToInput">EqualToInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.fieldInput">FieldInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.notEndsWithInput">NotEndsWithInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.notEqualsInput">NotEqualsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.notStartsWithInput">NotStartsWithInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.startsWithInput">StartsWithInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.endsWith">EndsWith</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.equalTo">EqualTo</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.field">Field</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.notEndsWith">NotEndsWith</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.notEquals">NotEquals</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.notStartsWith">NotStartsWith</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.startsWith">StartsWith</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndsWithInput`<sup>Optional</sup> <a name="EndsWithInput" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.endsWithInput"></a>

```go
func EndsWithInput() *[]*string
```

- *Type:* *[]*string

---

##### `EqualToInput`<sup>Optional</sup> <a name="EqualToInput" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.equalToInput"></a>

```go
func EqualToInput() *[]*string
```

- *Type:* *[]*string

---

##### `FieldInput`<sup>Optional</sup> <a name="FieldInput" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.fieldInput"></a>

```go
func FieldInput() *string
```

- *Type:* *string

---

##### `NotEndsWithInput`<sup>Optional</sup> <a name="NotEndsWithInput" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.notEndsWithInput"></a>

```go
func NotEndsWithInput() *[]*string
```

- *Type:* *[]*string

---

##### `NotEqualsInput`<sup>Optional</sup> <a name="NotEqualsInput" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.notEqualsInput"></a>

```go
func NotEqualsInput() *[]*string
```

- *Type:* *[]*string

---

##### `NotStartsWithInput`<sup>Optional</sup> <a name="NotStartsWithInput" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.notStartsWithInput"></a>

```go
func NotStartsWithInput() *[]*string
```

- *Type:* *[]*string

---

##### `StartsWithInput`<sup>Optional</sup> <a name="StartsWithInput" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.startsWithInput"></a>

```go
func StartsWithInput() *[]*string
```

- *Type:* *[]*string

---

##### `EndsWith`<sup>Required</sup> <a name="EndsWith" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.endsWith"></a>

```go
func EndsWith() *[]*string
```

- *Type:* *[]*string

---

##### `EqualTo`<sup>Required</sup> <a name="EqualTo" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.equalTo"></a>

```go
func EqualTo() *[]*string
```

- *Type:* *[]*string

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.field"></a>

```go
func Field() *string
```

- *Type:* *string

---

##### `NotEndsWith`<sup>Required</sup> <a name="NotEndsWith" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.notEndsWith"></a>

```go
func NotEndsWith() *[]*string
```

- *Type:* *[]*string

---

##### `NotEquals`<sup>Required</sup> <a name="NotEquals" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.notEquals"></a>

```go
func NotEquals() *[]*string
```

- *Type:* *[]*string

---

##### `NotStartsWith`<sup>Required</sup> <a name="NotStartsWith" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.notStartsWith"></a>

```go
func NotStartsWith() *[]*string
```

- *Type:* *[]*string

---

##### `StartsWith`<sup>Required</sup> <a name="StartsWith" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.startsWith"></a>

```go
func StartsWith() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudtrailEventDataStoreAdvancedEventSelectorList <a name="CloudtrailEventDataStoreAdvancedEventSelectorList" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudtraileventdatastore"

cloudtraileventdatastore.NewCloudtrailEventDataStoreAdvancedEventSelectorList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudtrailEventDataStoreAdvancedEventSelectorList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.get"></a>

```go
func Get(index *f64) CloudtrailEventDataStoreAdvancedEventSelectorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudtrailEventDataStoreAdvancedEventSelectorOutputReference <a name="CloudtrailEventDataStoreAdvancedEventSelectorOutputReference" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudtraileventdatastore"

cloudtraileventdatastore.NewCloudtrailEventDataStoreAdvancedEventSelectorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudtrailEventDataStoreAdvancedEventSelectorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.putFieldSelector">PutFieldSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.resetFieldSelector">ResetFieldSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFieldSelector` <a name="PutFieldSelector" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.putFieldSelector"></a>

```go
func PutFieldSelector(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.putFieldSelector.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFieldSelector` <a name="ResetFieldSelector" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.resetFieldSelector"></a>

```go
func ResetFieldSelector()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.property.fieldSelector">FieldSelector</a></code> | <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList">CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.property.fieldSelectorInput">FieldSelectorInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FieldSelector`<sup>Required</sup> <a name="FieldSelector" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.property.fieldSelector"></a>

```go
func FieldSelector() CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList">CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList</a>

---

##### `FieldSelectorInput`<sup>Optional</sup> <a name="FieldSelectorInput" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.property.fieldSelectorInput"></a>

```go
func FieldSelectorInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreAdvancedEventSelectorOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudtrailEventDataStoreTimeoutsOutputReference <a name="CloudtrailEventDataStoreTimeoutsOutputReference" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cloudtraileventdatastore"

cloudtraileventdatastore.NewCloudtrailEventDataStoreTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudtrailEventDataStoreTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cloudtrailEventDataStore.CloudtrailEventDataStoreTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



