# `directoryServiceRegion` Submodule <a name="`directoryServiceRegion` Submodule" id="@cdktf/provider-aws.directoryServiceRegion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DirectoryServiceRegion <a name="DirectoryServiceRegion" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region aws_directory_service_region}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/directoryserviceregion"

directoryserviceregion.NewDirectoryServiceRegion(scope Construct, id *string, config DirectoryServiceRegionConfig) DirectoryServiceRegion
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig">DirectoryServiceRegionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig">DirectoryServiceRegionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.putVpcSettings">PutVpcSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.resetDesiredNumberOfDomainControllers">ResetDesiredNumberOfDomainControllers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.putTimeouts"></a>

```go
func PutTimeouts(value DirectoryServiceRegionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeouts">DirectoryServiceRegionTimeouts</a>

---

##### `PutVpcSettings` <a name="PutVpcSettings" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.putVpcSettings"></a>

```go
func PutVpcSettings(value DirectoryServiceRegionVpcSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.putVpcSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettings">DirectoryServiceRegionVpcSettings</a>

---

##### `ResetDesiredNumberOfDomainControllers` <a name="ResetDesiredNumberOfDomainControllers" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.resetDesiredNumberOfDomainControllers"></a>

```go
func ResetDesiredNumberOfDomainControllers()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/directoryserviceregion"

directoryserviceregion.DirectoryServiceRegion_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/directoryserviceregion"

directoryserviceregion.DirectoryServiceRegion_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/directoryserviceregion"

directoryserviceregion.DirectoryServiceRegion_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference">DirectoryServiceRegionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.vpcSettings">VpcSettings</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference">DirectoryServiceRegionVpcSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.desiredNumberOfDomainControllersInput">DesiredNumberOfDomainControllersInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.directoryIdInput">DirectoryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.regionNameInput">RegionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.vpcSettingsInput">VpcSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettings">DirectoryServiceRegionVpcSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.desiredNumberOfDomainControllers">DesiredNumberOfDomainControllers</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.directoryId">DirectoryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.regionName">RegionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.timeouts"></a>

```go
func Timeouts() DirectoryServiceRegionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference">DirectoryServiceRegionTimeoutsOutputReference</a>

---

##### `VpcSettings`<sup>Required</sup> <a name="VpcSettings" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.vpcSettings"></a>

```go
func VpcSettings() DirectoryServiceRegionVpcSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference">DirectoryServiceRegionVpcSettingsOutputReference</a>

---

##### `DesiredNumberOfDomainControllersInput`<sup>Optional</sup> <a name="DesiredNumberOfDomainControllersInput" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.desiredNumberOfDomainControllersInput"></a>

```go
func DesiredNumberOfDomainControllersInput() *f64
```

- *Type:* *f64

---

##### `DirectoryIdInput`<sup>Optional</sup> <a name="DirectoryIdInput" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.directoryIdInput"></a>

```go
func DirectoryIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `RegionNameInput`<sup>Optional</sup> <a name="RegionNameInput" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.regionNameInput"></a>

```go
func RegionNameInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VpcSettingsInput`<sup>Optional</sup> <a name="VpcSettingsInput" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.vpcSettingsInput"></a>

```go
func VpcSettingsInput() DirectoryServiceRegionVpcSettings
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettings">DirectoryServiceRegionVpcSettings</a>

---

##### `DesiredNumberOfDomainControllers`<sup>Required</sup> <a name="DesiredNumberOfDomainControllers" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.desiredNumberOfDomainControllers"></a>

```go
func DesiredNumberOfDomainControllers() *f64
```

- *Type:* *f64

---

##### `DirectoryId`<sup>Required</sup> <a name="DirectoryId" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.directoryId"></a>

```go
func DirectoryId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `RegionName`<sup>Required</sup> <a name="RegionName" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.regionName"></a>

```go
func RegionName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegion.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DirectoryServiceRegionConfig <a name="DirectoryServiceRegionConfig" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/directoryserviceregion"

&directoryserviceregion.DirectoryServiceRegionConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DirectoryId: *string,
	RegionName: *string,
	VpcSettings: github.com/cdktf/cdktf-provider-aws-go/aws.directoryServiceRegion.DirectoryServiceRegionVpcSettings,
	DesiredNumberOfDomainControllers: *f64,
	Id: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.directoryServiceRegion.DirectoryServiceRegionTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.directoryId">DirectoryId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#directory_id DirectoryServiceRegion#directory_id}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.regionName">RegionName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#region_name DirectoryServiceRegion#region_name}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.vpcSettings">VpcSettings</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettings">DirectoryServiceRegionVpcSettings</a></code> | vpc_settings block. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.desiredNumberOfDomainControllers">DesiredNumberOfDomainControllers</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#desired_number_of_domain_controllers DirectoryServiceRegion#desired_number_of_domain_controllers}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#id DirectoryServiceRegion#id}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#tags DirectoryServiceRegion#tags}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#tags_all DirectoryServiceRegion#tags_all}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeouts">DirectoryServiceRegionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DirectoryId`<sup>Required</sup> <a name="DirectoryId" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.directoryId"></a>

```go
DirectoryId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#directory_id DirectoryServiceRegion#directory_id}.

---

##### `RegionName`<sup>Required</sup> <a name="RegionName" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.regionName"></a>

```go
RegionName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#region_name DirectoryServiceRegion#region_name}.

---

##### `VpcSettings`<sup>Required</sup> <a name="VpcSettings" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.vpcSettings"></a>

```go
VpcSettings DirectoryServiceRegionVpcSettings
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettings">DirectoryServiceRegionVpcSettings</a>

vpc_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#vpc_settings DirectoryServiceRegion#vpc_settings}

---

##### `DesiredNumberOfDomainControllers`<sup>Optional</sup> <a name="DesiredNumberOfDomainControllers" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.desiredNumberOfDomainControllers"></a>

```go
DesiredNumberOfDomainControllers *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#desired_number_of_domain_controllers DirectoryServiceRegion#desired_number_of_domain_controllers}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#id DirectoryServiceRegion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#tags DirectoryServiceRegion#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#tags_all DirectoryServiceRegion#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionConfig.property.timeouts"></a>

```go
Timeouts DirectoryServiceRegionTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeouts">DirectoryServiceRegionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#timeouts DirectoryServiceRegion#timeouts}

---

### DirectoryServiceRegionTimeouts <a name="DirectoryServiceRegionTimeouts" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/directoryserviceregion"

&directoryserviceregion.DirectoryServiceRegionTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#create DirectoryServiceRegion#create}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#delete DirectoryServiceRegion#delete}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#update DirectoryServiceRegion#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#create DirectoryServiceRegion#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#delete DirectoryServiceRegion#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#update DirectoryServiceRegion#update}.

---

### DirectoryServiceRegionVpcSettings <a name="DirectoryServiceRegionVpcSettings" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/directoryserviceregion"

&directoryserviceregion.DirectoryServiceRegionVpcSettings {
	SubnetIds: *[]*string,
	VpcId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettings.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#subnet_ids DirectoryServiceRegion#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettings.property.vpcId">VpcId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#vpc_id DirectoryServiceRegion#vpc_id}. |

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettings.property.subnetIds"></a>

```go
SubnetIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#subnet_ids DirectoryServiceRegion#subnet_ids}.

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettings.property.vpcId"></a>

```go
VpcId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_region#vpc_id DirectoryServiceRegion#vpc_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DirectoryServiceRegionTimeoutsOutputReference <a name="DirectoryServiceRegionTimeoutsOutputReference" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/directoryserviceregion"

directoryserviceregion.NewDirectoryServiceRegionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DirectoryServiceRegionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DirectoryServiceRegionVpcSettingsOutputReference <a name="DirectoryServiceRegionVpcSettingsOutputReference" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/directoryserviceregion"

directoryserviceregion.NewDirectoryServiceRegionVpcSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DirectoryServiceRegionVpcSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.property.vpcIdInput">VpcIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettings">DirectoryServiceRegionVpcSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.property.subnetIdsInput"></a>

```go
func SubnetIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.property.vpcIdInput"></a>

```go
func VpcIdInput() *string
```

- *Type:* *string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DirectoryServiceRegionVpcSettings
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceRegion.DirectoryServiceRegionVpcSettings">DirectoryServiceRegionVpcSettings</a>

---



