# `kendraIndex` Submodule <a name="`kendraIndex` Submodule" id="@cdktf/provider-aws.kendraIndex"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KendraIndex <a name="KendraIndex" id="@cdktf/provider-aws.kendraIndex.KendraIndex"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/kendra_index aws_kendra_index}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraIndex.KendraIndex.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/kendraindex"

kendraindex.NewKendraIndex(scope Construct, id *string, config KendraIndexConfig) KendraIndex
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig">KendraIndexConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.kendraIndex.KendraIndex.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.kendraIndex.KendraIndex.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.kendraIndex.KendraIndex.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig">KendraIndexConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.putCapacityUnits">PutCapacityUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.putDocumentMetadataConfigurationUpdates">PutDocumentMetadataConfigurationUpdates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.putServerSideEncryptionConfiguration">PutServerSideEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.putUserGroupResolutionConfiguration">PutUserGroupResolutionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.putUserTokenConfigurations">PutUserTokenConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.resetCapacityUnits">ResetCapacityUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.resetDocumentMetadataConfigurationUpdates">ResetDocumentMetadataConfigurationUpdates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.resetEdition">ResetEdition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.resetServerSideEncryptionConfiguration">ResetServerSideEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.resetUserContextPolicy">ResetUserContextPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.resetUserGroupResolutionConfiguration">ResetUserGroupResolutionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.resetUserTokenConfigurations">ResetUserTokenConfigurations</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kendraIndex.KendraIndex.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.kendraIndex.KendraIndex.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.kendraIndex.KendraIndex.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kendraIndex.KendraIndex.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.kendraIndex.KendraIndex.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.kendraIndex.KendraIndex.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.kendraIndex.KendraIndex.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.kendraIndex.KendraIndex.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.kendraIndex.KendraIndex.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndex.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndex.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndex.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndex.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndex.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndex.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndex.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndex.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndex.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndex.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndex.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndex.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndex.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndex.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndex.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndex.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndex.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndex.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndex.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndex.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutCapacityUnits` <a name="PutCapacityUnits" id="@cdktf/provider-aws.kendraIndex.KendraIndex.putCapacityUnits"></a>

```go
func PutCapacityUnits(value KendraIndexCapacityUnits)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kendraIndex.KendraIndex.putCapacityUnits.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnits">KendraIndexCapacityUnits</a>

---

##### `PutDocumentMetadataConfigurationUpdates` <a name="PutDocumentMetadataConfigurationUpdates" id="@cdktf/provider-aws.kendraIndex.KendraIndex.putDocumentMetadataConfigurationUpdates"></a>

```go
func PutDocumentMetadataConfigurationUpdates(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kendraIndex.KendraIndex.putDocumentMetadataConfigurationUpdates.parameter.value"></a>

- *Type:* interface{}

---

##### `PutServerSideEncryptionConfiguration` <a name="PutServerSideEncryptionConfiguration" id="@cdktf/provider-aws.kendraIndex.KendraIndex.putServerSideEncryptionConfiguration"></a>

```go
func PutServerSideEncryptionConfiguration(value KendraIndexServerSideEncryptionConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kendraIndex.KendraIndex.putServerSideEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfiguration">KendraIndexServerSideEncryptionConfiguration</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.kendraIndex.KendraIndex.putTimeouts"></a>

```go
func PutTimeouts(value KendraIndexTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kendraIndex.KendraIndex.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeouts">KendraIndexTimeouts</a>

---

##### `PutUserGroupResolutionConfiguration` <a name="PutUserGroupResolutionConfiguration" id="@cdktf/provider-aws.kendraIndex.KendraIndex.putUserGroupResolutionConfiguration"></a>

```go
func PutUserGroupResolutionConfiguration(value KendraIndexUserGroupResolutionConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kendraIndex.KendraIndex.putUserGroupResolutionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfiguration">KendraIndexUserGroupResolutionConfiguration</a>

---

##### `PutUserTokenConfigurations` <a name="PutUserTokenConfigurations" id="@cdktf/provider-aws.kendraIndex.KendraIndex.putUserTokenConfigurations"></a>

```go
func PutUserTokenConfigurations(value KendraIndexUserTokenConfigurations)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kendraIndex.KendraIndex.putUserTokenConfigurations.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurations">KendraIndexUserTokenConfigurations</a>

---

##### `ResetCapacityUnits` <a name="ResetCapacityUnits" id="@cdktf/provider-aws.kendraIndex.KendraIndex.resetCapacityUnits"></a>

```go
func ResetCapacityUnits()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.kendraIndex.KendraIndex.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDocumentMetadataConfigurationUpdates` <a name="ResetDocumentMetadataConfigurationUpdates" id="@cdktf/provider-aws.kendraIndex.KendraIndex.resetDocumentMetadataConfigurationUpdates"></a>

```go
func ResetDocumentMetadataConfigurationUpdates()
```

##### `ResetEdition` <a name="ResetEdition" id="@cdktf/provider-aws.kendraIndex.KendraIndex.resetEdition"></a>

```go
func ResetEdition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.kendraIndex.KendraIndex.resetId"></a>

```go
func ResetId()
```

##### `ResetServerSideEncryptionConfiguration` <a name="ResetServerSideEncryptionConfiguration" id="@cdktf/provider-aws.kendraIndex.KendraIndex.resetServerSideEncryptionConfiguration"></a>

```go
func ResetServerSideEncryptionConfiguration()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.kendraIndex.KendraIndex.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.kendraIndex.KendraIndex.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.kendraIndex.KendraIndex.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUserContextPolicy` <a name="ResetUserContextPolicy" id="@cdktf/provider-aws.kendraIndex.KendraIndex.resetUserContextPolicy"></a>

```go
func ResetUserContextPolicy()
```

##### `ResetUserGroupResolutionConfiguration` <a name="ResetUserGroupResolutionConfiguration" id="@cdktf/provider-aws.kendraIndex.KendraIndex.resetUserGroupResolutionConfiguration"></a>

```go
func ResetUserGroupResolutionConfiguration()
```

##### `ResetUserTokenConfigurations` <a name="ResetUserTokenConfigurations" id="@cdktf/provider-aws.kendraIndex.KendraIndex.resetUserTokenConfigurations"></a>

```go
func ResetUserTokenConfigurations()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.kendraIndex.KendraIndex.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/kendraindex"

kendraindex.KendraIndex_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kendraIndex.KendraIndex.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.kendraIndex.KendraIndex.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/kendraindex"

kendraindex.KendraIndex_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kendraIndex.KendraIndex.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.kendraIndex.KendraIndex.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/kendraindex"

kendraindex.KendraIndex_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kendraIndex.KendraIndex.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.capacityUnits">CapacityUnits</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference">KendraIndexCapacityUnitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.documentMetadataConfigurationUpdates">DocumentMetadataConfigurationUpdates</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList">KendraIndexDocumentMetadataConfigurationUpdatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.errorMessage">ErrorMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.indexStatistics">IndexStatistics</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList">KendraIndexIndexStatisticsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.serverSideEncryptionConfiguration">ServerSideEncryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference">KendraIndexServerSideEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference">KendraIndexTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.userGroupResolutionConfiguration">UserGroupResolutionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference">KendraIndexUserGroupResolutionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.userTokenConfigurations">UserTokenConfigurations</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference">KendraIndexUserTokenConfigurationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.capacityUnitsInput">CapacityUnitsInput</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnits">KendraIndexCapacityUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.documentMetadataConfigurationUpdatesInput">DocumentMetadataConfigurationUpdatesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.editionInput">EditionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.serverSideEncryptionConfigurationInput">ServerSideEncryptionConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfiguration">KendraIndexServerSideEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.userContextPolicyInput">UserContextPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.userGroupResolutionConfigurationInput">UserGroupResolutionConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfiguration">KendraIndexUserGroupResolutionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.userTokenConfigurationsInput">UserTokenConfigurationsInput</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurations">KendraIndexUserTokenConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.edition">Edition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.userContextPolicy">UserContextPolicy</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CapacityUnits`<sup>Required</sup> <a name="CapacityUnits" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.capacityUnits"></a>

```go
func CapacityUnits() KendraIndexCapacityUnitsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference">KendraIndexCapacityUnitsOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `DocumentMetadataConfigurationUpdates`<sup>Required</sup> <a name="DocumentMetadataConfigurationUpdates" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.documentMetadataConfigurationUpdates"></a>

```go
func DocumentMetadataConfigurationUpdates() KendraIndexDocumentMetadataConfigurationUpdatesList
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList">KendraIndexDocumentMetadataConfigurationUpdatesList</a>

---

##### `ErrorMessage`<sup>Required</sup> <a name="ErrorMessage" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.errorMessage"></a>

```go
func ErrorMessage() *string
```

- *Type:* *string

---

##### `IndexStatistics`<sup>Required</sup> <a name="IndexStatistics" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.indexStatistics"></a>

```go
func IndexStatistics() KendraIndexIndexStatisticsList
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList">KendraIndexIndexStatisticsList</a>

---

##### `ServerSideEncryptionConfiguration`<sup>Required</sup> <a name="ServerSideEncryptionConfiguration" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.serverSideEncryptionConfiguration"></a>

```go
func ServerSideEncryptionConfiguration() KendraIndexServerSideEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference">KendraIndexServerSideEncryptionConfigurationOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.timeouts"></a>

```go
func Timeouts() KendraIndexTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference">KendraIndexTimeoutsOutputReference</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `UserGroupResolutionConfiguration`<sup>Required</sup> <a name="UserGroupResolutionConfiguration" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.userGroupResolutionConfiguration"></a>

```go
func UserGroupResolutionConfiguration() KendraIndexUserGroupResolutionConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference">KendraIndexUserGroupResolutionConfigurationOutputReference</a>

---

##### `UserTokenConfigurations`<sup>Required</sup> <a name="UserTokenConfigurations" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.userTokenConfigurations"></a>

```go
func UserTokenConfigurations() KendraIndexUserTokenConfigurationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference">KendraIndexUserTokenConfigurationsOutputReference</a>

---

##### `CapacityUnitsInput`<sup>Optional</sup> <a name="CapacityUnitsInput" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.capacityUnitsInput"></a>

```go
func CapacityUnitsInput() KendraIndexCapacityUnits
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnits">KendraIndexCapacityUnits</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DocumentMetadataConfigurationUpdatesInput`<sup>Optional</sup> <a name="DocumentMetadataConfigurationUpdatesInput" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.documentMetadataConfigurationUpdatesInput"></a>

```go
func DocumentMetadataConfigurationUpdatesInput() interface{}
```

- *Type:* interface{}

---

##### `EditionInput`<sup>Optional</sup> <a name="EditionInput" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.editionInput"></a>

```go
func EditionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `ServerSideEncryptionConfigurationInput`<sup>Optional</sup> <a name="ServerSideEncryptionConfigurationInput" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.serverSideEncryptionConfigurationInput"></a>

```go
func ServerSideEncryptionConfigurationInput() KendraIndexServerSideEncryptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfiguration">KendraIndexServerSideEncryptionConfiguration</a>

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UserContextPolicyInput`<sup>Optional</sup> <a name="UserContextPolicyInput" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.userContextPolicyInput"></a>

```go
func UserContextPolicyInput() *string
```

- *Type:* *string

---

##### `UserGroupResolutionConfigurationInput`<sup>Optional</sup> <a name="UserGroupResolutionConfigurationInput" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.userGroupResolutionConfigurationInput"></a>

```go
func UserGroupResolutionConfigurationInput() KendraIndexUserGroupResolutionConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfiguration">KendraIndexUserGroupResolutionConfiguration</a>

---

##### `UserTokenConfigurationsInput`<sup>Optional</sup> <a name="UserTokenConfigurationsInput" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.userTokenConfigurationsInput"></a>

```go
func UserTokenConfigurationsInput() KendraIndexUserTokenConfigurations
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurations">KendraIndexUserTokenConfigurations</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Edition`<sup>Required</sup> <a name="Edition" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.edition"></a>

```go
func Edition() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `UserContextPolicy`<sup>Required</sup> <a name="UserContextPolicy" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.userContextPolicy"></a>

```go
func UserContextPolicy() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndex.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.kendraIndex.KendraIndex.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### KendraIndexCapacityUnits <a name="KendraIndexCapacityUnits" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnits.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/kendraindex"

&kendraindex.KendraIndexCapacityUnits {
	QueryCapacityUnits: *f64,
	StorageCapacityUnits: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnits.property.queryCapacityUnits">QueryCapacityUnits</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#query_capacity_units KendraIndex#query_capacity_units}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnits.property.storageCapacityUnits">StorageCapacityUnits</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#storage_capacity_units KendraIndex#storage_capacity_units}. |

---

##### `QueryCapacityUnits`<sup>Optional</sup> <a name="QueryCapacityUnits" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnits.property.queryCapacityUnits"></a>

```go
QueryCapacityUnits *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#query_capacity_units KendraIndex#query_capacity_units}.

---

##### `StorageCapacityUnits`<sup>Optional</sup> <a name="StorageCapacityUnits" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnits.property.storageCapacityUnits"></a>

```go
StorageCapacityUnits *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#storage_capacity_units KendraIndex#storage_capacity_units}.

---

### KendraIndexConfig <a name="KendraIndexConfig" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/kendraindex"

&kendraindex.KendraIndexConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	RoleArn: *string,
	CapacityUnits: github.com/cdktf/cdktf-provider-aws-go/aws.kendraIndex.KendraIndexCapacityUnits,
	Description: *string,
	DocumentMetadataConfigurationUpdates: interface{},
	Edition: *string,
	Id: *string,
	ServerSideEncryptionConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws.kendraIndex.KendraIndexServerSideEncryptionConfiguration,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.kendraIndex.KendraIndexTimeouts,
	UserContextPolicy: *string,
	UserGroupResolutionConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws.kendraIndex.KendraIndexUserGroupResolutionConfiguration,
	UserTokenConfigurations: github.com/cdktf/cdktf-provider-aws-go/aws.kendraIndex.KendraIndexUserTokenConfigurations,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#name KendraIndex#name}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.roleArn">RoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#role_arn KendraIndex#role_arn}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.capacityUnits">CapacityUnits</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnits">KendraIndexCapacityUnits</a></code> | capacity_units block. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#description KendraIndex#description}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.documentMetadataConfigurationUpdates">DocumentMetadataConfigurationUpdates</a></code> | <code>interface{}</code> | document_metadata_configuration_updates block. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.edition">Edition</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#edition KendraIndex#edition}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#id KendraIndex#id}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.serverSideEncryptionConfiguration">ServerSideEncryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfiguration">KendraIndexServerSideEncryptionConfiguration</a></code> | server_side_encryption_configuration block. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#tags KendraIndex#tags}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#tags_all KendraIndex#tags_all}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeouts">KendraIndexTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.userContextPolicy">UserContextPolicy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#user_context_policy KendraIndex#user_context_policy}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.userGroupResolutionConfiguration">UserGroupResolutionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfiguration">KendraIndexUserGroupResolutionConfiguration</a></code> | user_group_resolution_configuration block. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.userTokenConfigurations">UserTokenConfigurations</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurations">KendraIndexUserTokenConfigurations</a></code> | user_token_configurations block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#name KendraIndex#name}.

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#role_arn KendraIndex#role_arn}.

---

##### `CapacityUnits`<sup>Optional</sup> <a name="CapacityUnits" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.capacityUnits"></a>

```go
CapacityUnits KendraIndexCapacityUnits
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnits">KendraIndexCapacityUnits</a>

capacity_units block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#capacity_units KendraIndex#capacity_units}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#description KendraIndex#description}.

---

##### `DocumentMetadataConfigurationUpdates`<sup>Optional</sup> <a name="DocumentMetadataConfigurationUpdates" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.documentMetadataConfigurationUpdates"></a>

```go
DocumentMetadataConfigurationUpdates interface{}
```

- *Type:* interface{}

document_metadata_configuration_updates block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#document_metadata_configuration_updates KendraIndex#document_metadata_configuration_updates}

---

##### `Edition`<sup>Optional</sup> <a name="Edition" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.edition"></a>

```go
Edition *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#edition KendraIndex#edition}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#id KendraIndex#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ServerSideEncryptionConfiguration`<sup>Optional</sup> <a name="ServerSideEncryptionConfiguration" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.serverSideEncryptionConfiguration"></a>

```go
ServerSideEncryptionConfiguration KendraIndexServerSideEncryptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfiguration">KendraIndexServerSideEncryptionConfiguration</a>

server_side_encryption_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#server_side_encryption_configuration KendraIndex#server_side_encryption_configuration}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#tags KendraIndex#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#tags_all KendraIndex#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.timeouts"></a>

```go
Timeouts KendraIndexTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeouts">KendraIndexTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#timeouts KendraIndex#timeouts}

---

##### `UserContextPolicy`<sup>Optional</sup> <a name="UserContextPolicy" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.userContextPolicy"></a>

```go
UserContextPolicy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#user_context_policy KendraIndex#user_context_policy}.

---

##### `UserGroupResolutionConfiguration`<sup>Optional</sup> <a name="UserGroupResolutionConfiguration" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.userGroupResolutionConfiguration"></a>

```go
UserGroupResolutionConfiguration KendraIndexUserGroupResolutionConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfiguration">KendraIndexUserGroupResolutionConfiguration</a>

user_group_resolution_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#user_group_resolution_configuration KendraIndex#user_group_resolution_configuration}

---

##### `UserTokenConfigurations`<sup>Optional</sup> <a name="UserTokenConfigurations" id="@cdktf/provider-aws.kendraIndex.KendraIndexConfig.property.userTokenConfigurations"></a>

```go
UserTokenConfigurations KendraIndexUserTokenConfigurations
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurations">KendraIndexUserTokenConfigurations</a>

user_token_configurations block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#user_token_configurations KendraIndex#user_token_configurations}

---

### KendraIndexDocumentMetadataConfigurationUpdates <a name="KendraIndexDocumentMetadataConfigurationUpdates" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdates.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/kendraindex"

&kendraindex.KendraIndexDocumentMetadataConfigurationUpdates {
	Name: *string,
	Type: *string,
	Relevance: github.com/cdktf/cdktf-provider-aws-go/aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevance,
	Search: github.com/cdktf/cdktf-provider-aws-go/aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearch,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdates.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#name KendraIndex#name}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdates.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#type KendraIndex#type}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdates.property.relevance">Relevance</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevance">KendraIndexDocumentMetadataConfigurationUpdatesRelevance</a></code> | relevance block. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdates.property.search">Search</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearch">KendraIndexDocumentMetadataConfigurationUpdatesSearch</a></code> | search block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdates.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#name KendraIndex#name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdates.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#type KendraIndex#type}.

---

##### `Relevance`<sup>Optional</sup> <a name="Relevance" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdates.property.relevance"></a>

```go
Relevance KendraIndexDocumentMetadataConfigurationUpdatesRelevance
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevance">KendraIndexDocumentMetadataConfigurationUpdatesRelevance</a>

relevance block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#relevance KendraIndex#relevance}

---

##### `Search`<sup>Optional</sup> <a name="Search" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdates.property.search"></a>

```go
Search KendraIndexDocumentMetadataConfigurationUpdatesSearch
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearch">KendraIndexDocumentMetadataConfigurationUpdatesSearch</a>

search block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#search KendraIndex#search}

---

### KendraIndexDocumentMetadataConfigurationUpdatesRelevance <a name="KendraIndexDocumentMetadataConfigurationUpdatesRelevance" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevance"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevance.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/kendraindex"

&kendraindex.KendraIndexDocumentMetadataConfigurationUpdatesRelevance {
	Duration: *string,
	Freshness: interface{},
	Importance: *f64,
	RankOrder: *string,
	ValuesImportanceMap: *map[string]*f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevance.property.duration">Duration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#duration KendraIndex#duration}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevance.property.freshness">Freshness</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#freshness KendraIndex#freshness}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevance.property.importance">Importance</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#importance KendraIndex#importance}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevance.property.rankOrder">RankOrder</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#rank_order KendraIndex#rank_order}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevance.property.valuesImportanceMap">ValuesImportanceMap</a></code> | <code>*map[string]*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#values_importance_map KendraIndex#values_importance_map}. |

---

##### `Duration`<sup>Optional</sup> <a name="Duration" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevance.property.duration"></a>

```go
Duration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#duration KendraIndex#duration}.

---

##### `Freshness`<sup>Optional</sup> <a name="Freshness" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevance.property.freshness"></a>

```go
Freshness interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#freshness KendraIndex#freshness}.

---

##### `Importance`<sup>Optional</sup> <a name="Importance" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevance.property.importance"></a>

```go
Importance *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#importance KendraIndex#importance}.

---

##### `RankOrder`<sup>Optional</sup> <a name="RankOrder" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevance.property.rankOrder"></a>

```go
RankOrder *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#rank_order KendraIndex#rank_order}.

---

##### `ValuesImportanceMap`<sup>Optional</sup> <a name="ValuesImportanceMap" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevance.property.valuesImportanceMap"></a>

```go
ValuesImportanceMap *map[string]*f64
```

- *Type:* *map[string]*f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#values_importance_map KendraIndex#values_importance_map}.

---

### KendraIndexDocumentMetadataConfigurationUpdatesSearch <a name="KendraIndexDocumentMetadataConfigurationUpdatesSearch" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearch.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/kendraindex"

&kendraindex.KendraIndexDocumentMetadataConfigurationUpdatesSearch {
	Displayable: interface{},
	Facetable: interface{},
	Searchable: interface{},
	Sortable: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearch.property.displayable">Displayable</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#displayable KendraIndex#displayable}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearch.property.facetable">Facetable</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#facetable KendraIndex#facetable}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearch.property.searchable">Searchable</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#searchable KendraIndex#searchable}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearch.property.sortable">Sortable</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#sortable KendraIndex#sortable}. |

---

##### `Displayable`<sup>Optional</sup> <a name="Displayable" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearch.property.displayable"></a>

```go
Displayable interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#displayable KendraIndex#displayable}.

---

##### `Facetable`<sup>Optional</sup> <a name="Facetable" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearch.property.facetable"></a>

```go
Facetable interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#facetable KendraIndex#facetable}.

---

##### `Searchable`<sup>Optional</sup> <a name="Searchable" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearch.property.searchable"></a>

```go
Searchable interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#searchable KendraIndex#searchable}.

---

##### `Sortable`<sup>Optional</sup> <a name="Sortable" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearch.property.sortable"></a>

```go
Sortable interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#sortable KendraIndex#sortable}.

---

### KendraIndexIndexStatistics <a name="KendraIndexIndexStatistics" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatistics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatistics.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/kendraindex"

&kendraindex.KendraIndexIndexStatistics {

}
```


### KendraIndexIndexStatisticsFaqStatistics <a name="KendraIndexIndexStatisticsFaqStatistics" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatistics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatistics.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/kendraindex"

&kendraindex.KendraIndexIndexStatisticsFaqStatistics {

}
```


### KendraIndexIndexStatisticsTextDocumentStatistics <a name="KendraIndexIndexStatisticsTextDocumentStatistics" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatistics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatistics.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/kendraindex"

&kendraindex.KendraIndexIndexStatisticsTextDocumentStatistics {

}
```


### KendraIndexServerSideEncryptionConfiguration <a name="KendraIndexServerSideEncryptionConfiguration" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/kendraindex"

&kendraindex.KendraIndexServerSideEncryptionConfiguration {
	KmsKeyId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfiguration.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#kms_key_id KendraIndex#kms_key_id}. |

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfiguration.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#kms_key_id KendraIndex#kms_key_id}.

---

### KendraIndexTimeouts <a name="KendraIndexTimeouts" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/kendraindex"

&kendraindex.KendraIndexTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#create KendraIndex#create}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#delete KendraIndex#delete}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#update KendraIndex#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#create KendraIndex#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#delete KendraIndex#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#update KendraIndex#update}.

---

### KendraIndexUserGroupResolutionConfiguration <a name="KendraIndexUserGroupResolutionConfiguration" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/kendraindex"

&kendraindex.KendraIndexUserGroupResolutionConfiguration {
	UserGroupResolutionMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfiguration.property.userGroupResolutionMode">UserGroupResolutionMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#user_group_resolution_mode KendraIndex#user_group_resolution_mode}. |

---

##### `UserGroupResolutionMode`<sup>Required</sup> <a name="UserGroupResolutionMode" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfiguration.property.userGroupResolutionMode"></a>

```go
UserGroupResolutionMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#user_group_resolution_mode KendraIndex#user_group_resolution_mode}.

---

### KendraIndexUserTokenConfigurations <a name="KendraIndexUserTokenConfigurations" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/kendraindex"

&kendraindex.KendraIndexUserTokenConfigurations {
	JsonTokenTypeConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration,
	JwtTokenTypeConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurations.property.jsonTokenTypeConfiguration">JsonTokenTypeConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration">KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration</a></code> | json_token_type_configuration block. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurations.property.jwtTokenTypeConfiguration">JwtTokenTypeConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration">KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration</a></code> | jwt_token_type_configuration block. |

---

##### `JsonTokenTypeConfiguration`<sup>Optional</sup> <a name="JsonTokenTypeConfiguration" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurations.property.jsonTokenTypeConfiguration"></a>

```go
JsonTokenTypeConfiguration KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration">KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration</a>

json_token_type_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#json_token_type_configuration KendraIndex#json_token_type_configuration}

---

##### `JwtTokenTypeConfiguration`<sup>Optional</sup> <a name="JwtTokenTypeConfiguration" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurations.property.jwtTokenTypeConfiguration"></a>

```go
JwtTokenTypeConfiguration KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration">KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration</a>

jwt_token_type_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#jwt_token_type_configuration KendraIndex#jwt_token_type_configuration}

---

### KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration <a name="KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/kendraindex"

&kendraindex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration {
	GroupAttributeField: *string,
	UserNameAttributeField: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration.property.groupAttributeField">GroupAttributeField</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#group_attribute_field KendraIndex#group_attribute_field}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration.property.userNameAttributeField">UserNameAttributeField</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#user_name_attribute_field KendraIndex#user_name_attribute_field}. |

---

##### `GroupAttributeField`<sup>Required</sup> <a name="GroupAttributeField" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration.property.groupAttributeField"></a>

```go
GroupAttributeField *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#group_attribute_field KendraIndex#group_attribute_field}.

---

##### `UserNameAttributeField`<sup>Required</sup> <a name="UserNameAttributeField" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration.property.userNameAttributeField"></a>

```go
UserNameAttributeField *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#user_name_attribute_field KendraIndex#user_name_attribute_field}.

---

### KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration <a name="KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/kendraindex"

&kendraindex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration {
	KeyLocation: *string,
	ClaimRegex: *string,
	GroupAttributeField: *string,
	Issuer: *string,
	SecretsManagerArn: *string,
	Url: *string,
	UserNameAttributeField: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration.property.keyLocation">KeyLocation</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#key_location KendraIndex#key_location}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration.property.claimRegex">ClaimRegex</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#claim_regex KendraIndex#claim_regex}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration.property.groupAttributeField">GroupAttributeField</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#group_attribute_field KendraIndex#group_attribute_field}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration.property.issuer">Issuer</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#issuer KendraIndex#issuer}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration.property.secretsManagerArn">SecretsManagerArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#secrets_manager_arn KendraIndex#secrets_manager_arn}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration.property.url">Url</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#url KendraIndex#url}. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration.property.userNameAttributeField">UserNameAttributeField</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#user_name_attribute_field KendraIndex#user_name_attribute_field}. |

---

##### `KeyLocation`<sup>Required</sup> <a name="KeyLocation" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration.property.keyLocation"></a>

```go
KeyLocation *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#key_location KendraIndex#key_location}.

---

##### `ClaimRegex`<sup>Optional</sup> <a name="ClaimRegex" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration.property.claimRegex"></a>

```go
ClaimRegex *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#claim_regex KendraIndex#claim_regex}.

---

##### `GroupAttributeField`<sup>Optional</sup> <a name="GroupAttributeField" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration.property.groupAttributeField"></a>

```go
GroupAttributeField *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#group_attribute_field KendraIndex#group_attribute_field}.

---

##### `Issuer`<sup>Optional</sup> <a name="Issuer" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration.property.issuer"></a>

```go
Issuer *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#issuer KendraIndex#issuer}.

---

##### `SecretsManagerArn`<sup>Optional</sup> <a name="SecretsManagerArn" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration.property.secretsManagerArn"></a>

```go
SecretsManagerArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#secrets_manager_arn KendraIndex#secrets_manager_arn}.

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration.property.url"></a>

```go
Url *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#url KendraIndex#url}.

---

##### `UserNameAttributeField`<sup>Optional</sup> <a name="UserNameAttributeField" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration.property.userNameAttributeField"></a>

```go
UserNameAttributeField *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#user_name_attribute_field KendraIndex#user_name_attribute_field}.

---

## Classes <a name="Classes" id="Classes"></a>

### KendraIndexCapacityUnitsOutputReference <a name="KendraIndexCapacityUnitsOutputReference" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/kendraindex"

kendraindex.NewKendraIndexCapacityUnitsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KendraIndexCapacityUnitsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.resetQueryCapacityUnits">ResetQueryCapacityUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.resetStorageCapacityUnits">ResetStorageCapacityUnits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetQueryCapacityUnits` <a name="ResetQueryCapacityUnits" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.resetQueryCapacityUnits"></a>

```go
func ResetQueryCapacityUnits()
```

##### `ResetStorageCapacityUnits` <a name="ResetStorageCapacityUnits" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.resetStorageCapacityUnits"></a>

```go
func ResetStorageCapacityUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.property.queryCapacityUnitsInput">QueryCapacityUnitsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.property.storageCapacityUnitsInput">StorageCapacityUnitsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.property.queryCapacityUnits">QueryCapacityUnits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.property.storageCapacityUnits">StorageCapacityUnits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnits">KendraIndexCapacityUnits</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `QueryCapacityUnitsInput`<sup>Optional</sup> <a name="QueryCapacityUnitsInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.property.queryCapacityUnitsInput"></a>

```go
func QueryCapacityUnitsInput() *f64
```

- *Type:* *f64

---

##### `StorageCapacityUnitsInput`<sup>Optional</sup> <a name="StorageCapacityUnitsInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.property.storageCapacityUnitsInput"></a>

```go
func StorageCapacityUnitsInput() *f64
```

- *Type:* *f64

---

##### `QueryCapacityUnits`<sup>Required</sup> <a name="QueryCapacityUnits" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.property.queryCapacityUnits"></a>

```go
func QueryCapacityUnits() *f64
```

- *Type:* *f64

---

##### `StorageCapacityUnits`<sup>Required</sup> <a name="StorageCapacityUnits" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.property.storageCapacityUnits"></a>

```go
func StorageCapacityUnits() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnitsOutputReference.property.internalValue"></a>

```go
func InternalValue() KendraIndexCapacityUnits
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexCapacityUnits">KendraIndexCapacityUnits</a>

---


### KendraIndexDocumentMetadataConfigurationUpdatesList <a name="KendraIndexDocumentMetadataConfigurationUpdatesList" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/kendraindex"

kendraindex.NewKendraIndexDocumentMetadataConfigurationUpdatesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) KendraIndexDocumentMetadataConfigurationUpdatesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.get"></a>

```go
func Get(index *f64) KendraIndexDocumentMetadataConfigurationUpdatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KendraIndexDocumentMetadataConfigurationUpdatesOutputReference <a name="KendraIndexDocumentMetadataConfigurationUpdatesOutputReference" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/kendraindex"

kendraindex.NewKendraIndexDocumentMetadataConfigurationUpdatesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) KendraIndexDocumentMetadataConfigurationUpdatesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.putRelevance">PutRelevance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.putSearch">PutSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.resetRelevance">ResetRelevance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.resetSearch">ResetSearch</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRelevance` <a name="PutRelevance" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.putRelevance"></a>

```go
func PutRelevance(value KendraIndexDocumentMetadataConfigurationUpdatesRelevance)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.putRelevance.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevance">KendraIndexDocumentMetadataConfigurationUpdatesRelevance</a>

---

##### `PutSearch` <a name="PutSearch" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.putSearch"></a>

```go
func PutSearch(value KendraIndexDocumentMetadataConfigurationUpdatesSearch)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.putSearch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearch">KendraIndexDocumentMetadataConfigurationUpdatesSearch</a>

---

##### `ResetRelevance` <a name="ResetRelevance" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.resetRelevance"></a>

```go
func ResetRelevance()
```

##### `ResetSearch` <a name="ResetSearch" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.resetSearch"></a>

```go
func ResetSearch()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.relevance">Relevance</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference">KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.search">Search</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference">KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.relevanceInput">RelevanceInput</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevance">KendraIndexDocumentMetadataConfigurationUpdatesRelevance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.searchInput">SearchInput</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearch">KendraIndexDocumentMetadataConfigurationUpdatesSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Relevance`<sup>Required</sup> <a name="Relevance" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.relevance"></a>

```go
func Relevance() KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference">KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference</a>

---

##### `Search`<sup>Required</sup> <a name="Search" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.search"></a>

```go
func Search() KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference">KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RelevanceInput`<sup>Optional</sup> <a name="RelevanceInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.relevanceInput"></a>

```go
func RelevanceInput() KendraIndexDocumentMetadataConfigurationUpdatesRelevance
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevance">KendraIndexDocumentMetadataConfigurationUpdatesRelevance</a>

---

##### `SearchInput`<sup>Optional</sup> <a name="SearchInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.searchInput"></a>

```go
func SearchInput() KendraIndexDocumentMetadataConfigurationUpdatesSearch
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearch">KendraIndexDocumentMetadataConfigurationUpdatesSearch</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference <a name="KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/kendraindex"

kendraindex.NewKendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.resetDuration">ResetDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.resetFreshness">ResetFreshness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.resetImportance">ResetImportance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.resetRankOrder">ResetRankOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.resetValuesImportanceMap">ResetValuesImportanceMap</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDuration` <a name="ResetDuration" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.resetDuration"></a>

```go
func ResetDuration()
```

##### `ResetFreshness` <a name="ResetFreshness" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.resetFreshness"></a>

```go
func ResetFreshness()
```

##### `ResetImportance` <a name="ResetImportance" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.resetImportance"></a>

```go
func ResetImportance()
```

##### `ResetRankOrder` <a name="ResetRankOrder" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.resetRankOrder"></a>

```go
func ResetRankOrder()
```

##### `ResetValuesImportanceMap` <a name="ResetValuesImportanceMap" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.resetValuesImportanceMap"></a>

```go
func ResetValuesImportanceMap()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.durationInput">DurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.freshnessInput">FreshnessInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.importanceInput">ImportanceInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.rankOrderInput">RankOrderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.valuesImportanceMapInput">ValuesImportanceMapInput</a></code> | <code>*map[string]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.duration">Duration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.freshness">Freshness</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.importance">Importance</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.rankOrder">RankOrder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.valuesImportanceMap">ValuesImportanceMap</a></code> | <code>*map[string]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevance">KendraIndexDocumentMetadataConfigurationUpdatesRelevance</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.durationInput"></a>

```go
func DurationInput() *string
```

- *Type:* *string

---

##### `FreshnessInput`<sup>Optional</sup> <a name="FreshnessInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.freshnessInput"></a>

```go
func FreshnessInput() interface{}
```

- *Type:* interface{}

---

##### `ImportanceInput`<sup>Optional</sup> <a name="ImportanceInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.importanceInput"></a>

```go
func ImportanceInput() *f64
```

- *Type:* *f64

---

##### `RankOrderInput`<sup>Optional</sup> <a name="RankOrderInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.rankOrderInput"></a>

```go
func RankOrderInput() *string
```

- *Type:* *string

---

##### `ValuesImportanceMapInput`<sup>Optional</sup> <a name="ValuesImportanceMapInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.valuesImportanceMapInput"></a>

```go
func ValuesImportanceMapInput() *map[string]*f64
```

- *Type:* *map[string]*f64

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.duration"></a>

```go
func Duration() *string
```

- *Type:* *string

---

##### `Freshness`<sup>Required</sup> <a name="Freshness" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.freshness"></a>

```go
func Freshness() interface{}
```

- *Type:* interface{}

---

##### `Importance`<sup>Required</sup> <a name="Importance" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.importance"></a>

```go
func Importance() *f64
```

- *Type:* *f64

---

##### `RankOrder`<sup>Required</sup> <a name="RankOrder" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.rankOrder"></a>

```go
func RankOrder() *string
```

- *Type:* *string

---

##### `ValuesImportanceMap`<sup>Required</sup> <a name="ValuesImportanceMap" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.valuesImportanceMap"></a>

```go
func ValuesImportanceMap() *map[string]*f64
```

- *Type:* *map[string]*f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference.property.internalValue"></a>

```go
func InternalValue() KendraIndexDocumentMetadataConfigurationUpdatesRelevance
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesRelevance">KendraIndexDocumentMetadataConfigurationUpdatesRelevance</a>

---


### KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference <a name="KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/kendraindex"

kendraindex.NewKendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.resetDisplayable">ResetDisplayable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.resetFacetable">ResetFacetable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.resetSearchable">ResetSearchable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.resetSortable">ResetSortable</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisplayable` <a name="ResetDisplayable" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.resetDisplayable"></a>

```go
func ResetDisplayable()
```

##### `ResetFacetable` <a name="ResetFacetable" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.resetFacetable"></a>

```go
func ResetFacetable()
```

##### `ResetSearchable` <a name="ResetSearchable" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.resetSearchable"></a>

```go
func ResetSearchable()
```

##### `ResetSortable` <a name="ResetSortable" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.resetSortable"></a>

```go
func ResetSortable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.displayableInput">DisplayableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.facetableInput">FacetableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.searchableInput">SearchableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.sortableInput">SortableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.displayable">Displayable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.facetable">Facetable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.searchable">Searchable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.sortable">Sortable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearch">KendraIndexDocumentMetadataConfigurationUpdatesSearch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayableInput`<sup>Optional</sup> <a name="DisplayableInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.displayableInput"></a>

```go
func DisplayableInput() interface{}
```

- *Type:* interface{}

---

##### `FacetableInput`<sup>Optional</sup> <a name="FacetableInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.facetableInput"></a>

```go
func FacetableInput() interface{}
```

- *Type:* interface{}

---

##### `SearchableInput`<sup>Optional</sup> <a name="SearchableInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.searchableInput"></a>

```go
func SearchableInput() interface{}
```

- *Type:* interface{}

---

##### `SortableInput`<sup>Optional</sup> <a name="SortableInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.sortableInput"></a>

```go
func SortableInput() interface{}
```

- *Type:* interface{}

---

##### `Displayable`<sup>Required</sup> <a name="Displayable" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.displayable"></a>

```go
func Displayable() interface{}
```

- *Type:* interface{}

---

##### `Facetable`<sup>Required</sup> <a name="Facetable" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.facetable"></a>

```go
func Facetable() interface{}
```

- *Type:* interface{}

---

##### `Searchable`<sup>Required</sup> <a name="Searchable" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.searchable"></a>

```go
func Searchable() interface{}
```

- *Type:* interface{}

---

##### `Sortable`<sup>Required</sup> <a name="Sortable" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.sortable"></a>

```go
func Sortable() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference.property.internalValue"></a>

```go
func InternalValue() KendraIndexDocumentMetadataConfigurationUpdatesSearch
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexDocumentMetadataConfigurationUpdatesSearch">KendraIndexDocumentMetadataConfigurationUpdatesSearch</a>

---


### KendraIndexIndexStatisticsFaqStatisticsList <a name="KendraIndexIndexStatisticsFaqStatisticsList" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/kendraindex"

kendraindex.NewKendraIndexIndexStatisticsFaqStatisticsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) KendraIndexIndexStatisticsFaqStatisticsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList.get"></a>

```go
func Get(index *f64) KendraIndexIndexStatisticsFaqStatisticsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### KendraIndexIndexStatisticsFaqStatisticsOutputReference <a name="KendraIndexIndexStatisticsFaqStatisticsOutputReference" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/kendraindex"

kendraindex.NewKendraIndexIndexStatisticsFaqStatisticsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) KendraIndexIndexStatisticsFaqStatisticsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.property.indexedQuestionAnswersCount">IndexedQuestionAnswersCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatistics">KendraIndexIndexStatisticsFaqStatistics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IndexedQuestionAnswersCount`<sup>Required</sup> <a name="IndexedQuestionAnswersCount" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.property.indexedQuestionAnswersCount"></a>

```go
func IndexedQuestionAnswersCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsOutputReference.property.internalValue"></a>

```go
func InternalValue() KendraIndexIndexStatisticsFaqStatistics
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatistics">KendraIndexIndexStatisticsFaqStatistics</a>

---


### KendraIndexIndexStatisticsList <a name="KendraIndexIndexStatisticsList" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/kendraindex"

kendraindex.NewKendraIndexIndexStatisticsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) KendraIndexIndexStatisticsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList.get"></a>

```go
func Get(index *f64) KendraIndexIndexStatisticsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### KendraIndexIndexStatisticsOutputReference <a name="KendraIndexIndexStatisticsOutputReference" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/kendraindex"

kendraindex.NewKendraIndexIndexStatisticsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) KendraIndexIndexStatisticsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.property.faqStatistics">FaqStatistics</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList">KendraIndexIndexStatisticsFaqStatisticsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.property.textDocumentStatistics">TextDocumentStatistics</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList">KendraIndexIndexStatisticsTextDocumentStatisticsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatistics">KendraIndexIndexStatistics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FaqStatistics`<sup>Required</sup> <a name="FaqStatistics" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.property.faqStatistics"></a>

```go
func FaqStatistics() KendraIndexIndexStatisticsFaqStatisticsList
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsFaqStatisticsList">KendraIndexIndexStatisticsFaqStatisticsList</a>

---

##### `TextDocumentStatistics`<sup>Required</sup> <a name="TextDocumentStatistics" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.property.textDocumentStatistics"></a>

```go
func TextDocumentStatistics() KendraIndexIndexStatisticsTextDocumentStatisticsList
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList">KendraIndexIndexStatisticsTextDocumentStatisticsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsOutputReference.property.internalValue"></a>

```go
func InternalValue() KendraIndexIndexStatistics
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatistics">KendraIndexIndexStatistics</a>

---


### KendraIndexIndexStatisticsTextDocumentStatisticsList <a name="KendraIndexIndexStatisticsTextDocumentStatisticsList" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/kendraindex"

kendraindex.NewKendraIndexIndexStatisticsTextDocumentStatisticsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) KendraIndexIndexStatisticsTextDocumentStatisticsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList.get"></a>

```go
func Get(index *f64) KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference <a name="KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/kendraindex"

kendraindex.NewKendraIndexIndexStatisticsTextDocumentStatisticsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.indexedTextBytes">IndexedTextBytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.indexedTextDocumentsCount">IndexedTextDocumentsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatistics">KendraIndexIndexStatisticsTextDocumentStatistics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IndexedTextBytes`<sup>Required</sup> <a name="IndexedTextBytes" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.indexedTextBytes"></a>

```go
func IndexedTextBytes() *f64
```

- *Type:* *f64

---

##### `IndexedTextDocumentsCount`<sup>Required</sup> <a name="IndexedTextDocumentsCount" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.indexedTextDocumentsCount"></a>

```go
func IndexedTextDocumentsCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference.property.internalValue"></a>

```go
func InternalValue() KendraIndexIndexStatisticsTextDocumentStatistics
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexIndexStatisticsTextDocumentStatistics">KendraIndexIndexStatisticsTextDocumentStatistics</a>

---


### KendraIndexServerSideEncryptionConfigurationOutputReference <a name="KendraIndexServerSideEncryptionConfigurationOutputReference" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/kendraindex"

kendraindex.NewKendraIndexServerSideEncryptionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KendraIndexServerSideEncryptionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfiguration">KendraIndexServerSideEncryptionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() KendraIndexServerSideEncryptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexServerSideEncryptionConfiguration">KendraIndexServerSideEncryptionConfiguration</a>

---


### KendraIndexTimeoutsOutputReference <a name="KendraIndexTimeoutsOutputReference" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/kendraindex"

kendraindex.NewKendraIndexTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KendraIndexTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kendraIndex.KendraIndexTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KendraIndexUserGroupResolutionConfigurationOutputReference <a name="KendraIndexUserGroupResolutionConfigurationOutputReference" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/kendraindex"

kendraindex.NewKendraIndexUserGroupResolutionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KendraIndexUserGroupResolutionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.property.userGroupResolutionModeInput">UserGroupResolutionModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.property.userGroupResolutionMode">UserGroupResolutionMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfiguration">KendraIndexUserGroupResolutionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UserGroupResolutionModeInput`<sup>Optional</sup> <a name="UserGroupResolutionModeInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.property.userGroupResolutionModeInput"></a>

```go
func UserGroupResolutionModeInput() *string
```

- *Type:* *string

---

##### `UserGroupResolutionMode`<sup>Required</sup> <a name="UserGroupResolutionMode" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.property.userGroupResolutionMode"></a>

```go
func UserGroupResolutionMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() KendraIndexUserGroupResolutionConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserGroupResolutionConfiguration">KendraIndexUserGroupResolutionConfiguration</a>

---


### KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference <a name="KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/kendraindex"

kendraindex.NewKendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.groupAttributeFieldInput">GroupAttributeFieldInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.userNameAttributeFieldInput">UserNameAttributeFieldInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.groupAttributeField">GroupAttributeField</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.userNameAttributeField">UserNameAttributeField</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration">KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GroupAttributeFieldInput`<sup>Optional</sup> <a name="GroupAttributeFieldInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.groupAttributeFieldInput"></a>

```go
func GroupAttributeFieldInput() *string
```

- *Type:* *string

---

##### `UserNameAttributeFieldInput`<sup>Optional</sup> <a name="UserNameAttributeFieldInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.userNameAttributeFieldInput"></a>

```go
func UserNameAttributeFieldInput() *string
```

- *Type:* *string

---

##### `GroupAttributeField`<sup>Required</sup> <a name="GroupAttributeField" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.groupAttributeField"></a>

```go
func GroupAttributeField() *string
```

- *Type:* *string

---

##### `UserNameAttributeField`<sup>Required</sup> <a name="UserNameAttributeField" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.userNameAttributeField"></a>

```go
func UserNameAttributeField() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration">KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration</a>

---


### KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference <a name="KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/kendraindex"

kendraindex.NewKendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resetClaimRegex">ResetClaimRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resetGroupAttributeField">ResetGroupAttributeField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resetIssuer">ResetIssuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resetSecretsManagerArn">ResetSecretsManagerArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resetUrl">ResetUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resetUserNameAttributeField">ResetUserNameAttributeField</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClaimRegex` <a name="ResetClaimRegex" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resetClaimRegex"></a>

```go
func ResetClaimRegex()
```

##### `ResetGroupAttributeField` <a name="ResetGroupAttributeField" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resetGroupAttributeField"></a>

```go
func ResetGroupAttributeField()
```

##### `ResetIssuer` <a name="ResetIssuer" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resetIssuer"></a>

```go
func ResetIssuer()
```

##### `ResetSecretsManagerArn` <a name="ResetSecretsManagerArn" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resetSecretsManagerArn"></a>

```go
func ResetSecretsManagerArn()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resetUrl"></a>

```go
func ResetUrl()
```

##### `ResetUserNameAttributeField` <a name="ResetUserNameAttributeField" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.resetUserNameAttributeField"></a>

```go
func ResetUserNameAttributeField()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.claimRegexInput">ClaimRegexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.groupAttributeFieldInput">GroupAttributeFieldInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.issuerInput">IssuerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.keyLocationInput">KeyLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.secretsManagerArnInput">SecretsManagerArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.userNameAttributeFieldInput">UserNameAttributeFieldInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.claimRegex">ClaimRegex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.groupAttributeField">GroupAttributeField</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.issuer">Issuer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.keyLocation">KeyLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.secretsManagerArn">SecretsManagerArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.userNameAttributeField">UserNameAttributeField</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration">KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClaimRegexInput`<sup>Optional</sup> <a name="ClaimRegexInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.claimRegexInput"></a>

```go
func ClaimRegexInput() *string
```

- *Type:* *string

---

##### `GroupAttributeFieldInput`<sup>Optional</sup> <a name="GroupAttributeFieldInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.groupAttributeFieldInput"></a>

```go
func GroupAttributeFieldInput() *string
```

- *Type:* *string

---

##### `IssuerInput`<sup>Optional</sup> <a name="IssuerInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.issuerInput"></a>

```go
func IssuerInput() *string
```

- *Type:* *string

---

##### `KeyLocationInput`<sup>Optional</sup> <a name="KeyLocationInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.keyLocationInput"></a>

```go
func KeyLocationInput() *string
```

- *Type:* *string

---

##### `SecretsManagerArnInput`<sup>Optional</sup> <a name="SecretsManagerArnInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.secretsManagerArnInput"></a>

```go
func SecretsManagerArnInput() *string
```

- *Type:* *string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `UserNameAttributeFieldInput`<sup>Optional</sup> <a name="UserNameAttributeFieldInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.userNameAttributeFieldInput"></a>

```go
func UserNameAttributeFieldInput() *string
```

- *Type:* *string

---

##### `ClaimRegex`<sup>Required</sup> <a name="ClaimRegex" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.claimRegex"></a>

```go
func ClaimRegex() *string
```

- *Type:* *string

---

##### `GroupAttributeField`<sup>Required</sup> <a name="GroupAttributeField" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.groupAttributeField"></a>

```go
func GroupAttributeField() *string
```

- *Type:* *string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.issuer"></a>

```go
func Issuer() *string
```

- *Type:* *string

---

##### `KeyLocation`<sup>Required</sup> <a name="KeyLocation" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.keyLocation"></a>

```go
func KeyLocation() *string
```

- *Type:* *string

---

##### `SecretsManagerArn`<sup>Required</sup> <a name="SecretsManagerArn" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.secretsManagerArn"></a>

```go
func SecretsManagerArn() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `UserNameAttributeField`<sup>Required</sup> <a name="UserNameAttributeField" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.userNameAttributeField"></a>

```go
func UserNameAttributeField() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration">KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration</a>

---


### KendraIndexUserTokenConfigurationsOutputReference <a name="KendraIndexUserTokenConfigurationsOutputReference" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/kendraindex"

kendraindex.NewKendraIndexUserTokenConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KendraIndexUserTokenConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.putJsonTokenTypeConfiguration">PutJsonTokenTypeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.putJwtTokenTypeConfiguration">PutJwtTokenTypeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.resetJsonTokenTypeConfiguration">ResetJsonTokenTypeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.resetJwtTokenTypeConfiguration">ResetJwtTokenTypeConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutJsonTokenTypeConfiguration` <a name="PutJsonTokenTypeConfiguration" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.putJsonTokenTypeConfiguration"></a>

```go
func PutJsonTokenTypeConfiguration(value KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.putJsonTokenTypeConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration">KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration</a>

---

##### `PutJwtTokenTypeConfiguration` <a name="PutJwtTokenTypeConfiguration" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.putJwtTokenTypeConfiguration"></a>

```go
func PutJwtTokenTypeConfiguration(value KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.putJwtTokenTypeConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration">KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration</a>

---

##### `ResetJsonTokenTypeConfiguration` <a name="ResetJsonTokenTypeConfiguration" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.resetJsonTokenTypeConfiguration"></a>

```go
func ResetJsonTokenTypeConfiguration()
```

##### `ResetJwtTokenTypeConfiguration` <a name="ResetJwtTokenTypeConfiguration" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.resetJwtTokenTypeConfiguration"></a>

```go
func ResetJwtTokenTypeConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.property.jsonTokenTypeConfiguration">JsonTokenTypeConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference">KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.property.jwtTokenTypeConfiguration">JwtTokenTypeConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference">KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.property.jsonTokenTypeConfigurationInput">JsonTokenTypeConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration">KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.property.jwtTokenTypeConfigurationInput">JwtTokenTypeConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration">KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurations">KendraIndexUserTokenConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `JsonTokenTypeConfiguration`<sup>Required</sup> <a name="JsonTokenTypeConfiguration" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.property.jsonTokenTypeConfiguration"></a>

```go
func JsonTokenTypeConfiguration() KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference">KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference</a>

---

##### `JwtTokenTypeConfiguration`<sup>Required</sup> <a name="JwtTokenTypeConfiguration" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.property.jwtTokenTypeConfiguration"></a>

```go
func JwtTokenTypeConfiguration() KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference">KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference</a>

---

##### `JsonTokenTypeConfigurationInput`<sup>Optional</sup> <a name="JsonTokenTypeConfigurationInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.property.jsonTokenTypeConfigurationInput"></a>

```go
func JsonTokenTypeConfigurationInput() KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration">KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration</a>

---

##### `JwtTokenTypeConfigurationInput`<sup>Optional</sup> <a name="JwtTokenTypeConfigurationInput" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.property.jwtTokenTypeConfigurationInput"></a>

```go
func JwtTokenTypeConfigurationInput() KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration">KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() KendraIndexUserTokenConfigurations
```

- *Type:* <a href="#@cdktf/provider-aws.kendraIndex.KendraIndexUserTokenConfigurations">KendraIndexUserTokenConfigurations</a>

---



