# `dataAwsNetworkmanagerSite` Submodule <a name="`dataAwsNetworkmanagerSite` Submodule" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsNetworkmanagerSite <a name="DataAwsNetworkmanagerSite" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_site aws_networkmanager_site}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsnetworkmanagersite"

dataawsnetworkmanagersite.NewDataAwsNetworkmanagerSite(scope Construct, id *string, config DataAwsNetworkmanagerSiteConfig) DataAwsNetworkmanagerSite
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteConfig">DataAwsNetworkmanagerSiteConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteConfig">DataAwsNetworkmanagerSiteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsnetworkmanagersite"

dataawsnetworkmanagersite.DataAwsNetworkmanagerSite_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsnetworkmanagersite"

dataawsnetworkmanagersite.DataAwsNetworkmanagerSite_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsnetworkmanagersite"

dataawsnetworkmanagersite.DataAwsNetworkmanagerSite_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.location">Location</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationList">DataAwsNetworkmanagerSiteLocationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.globalNetworkIdInput">GlobalNetworkIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.siteIdInput">SiteIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.globalNetworkId">GlobalNetworkId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.siteId">SiteId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.location"></a>

```go
func Location() DataAwsNetworkmanagerSiteLocationList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationList">DataAwsNetworkmanagerSiteLocationList</a>

---

##### `GlobalNetworkIdInput`<sup>Optional</sup> <a name="GlobalNetworkIdInput" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.globalNetworkIdInput"></a>

```go
func GlobalNetworkIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `SiteIdInput`<sup>Optional</sup> <a name="SiteIdInput" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.siteIdInput"></a>

```go
func SiteIdInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `GlobalNetworkId`<sup>Required</sup> <a name="GlobalNetworkId" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.globalNetworkId"></a>

```go
func GlobalNetworkId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SiteId`<sup>Required</sup> <a name="SiteId" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.siteId"></a>

```go
func SiteId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSite.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsNetworkmanagerSiteConfig <a name="DataAwsNetworkmanagerSiteConfig" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsnetworkmanagersite"

&dataawsnetworkmanagersite.DataAwsNetworkmanagerSiteConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	GlobalNetworkId: *string,
	SiteId: *string,
	Id: *string,
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteConfig.property.globalNetworkId">GlobalNetworkId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_site#global_network_id DataAwsNetworkmanagerSite#global_network_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteConfig.property.siteId">SiteId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_site#site_id DataAwsNetworkmanagerSite#site_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_site#id DataAwsNetworkmanagerSite#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_site#tags DataAwsNetworkmanagerSite#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GlobalNetworkId`<sup>Required</sup> <a name="GlobalNetworkId" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteConfig.property.globalNetworkId"></a>

```go
GlobalNetworkId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_site#global_network_id DataAwsNetworkmanagerSite#global_network_id}.

---

##### `SiteId`<sup>Required</sup> <a name="SiteId" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteConfig.property.siteId"></a>

```go
SiteId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_site#site_id DataAwsNetworkmanagerSite#site_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_site#id DataAwsNetworkmanagerSite#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_site#tags DataAwsNetworkmanagerSite#tags}.

---

### DataAwsNetworkmanagerSiteLocation <a name="DataAwsNetworkmanagerSiteLocation" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsnetworkmanagersite"

&dataawsnetworkmanagersite.DataAwsNetworkmanagerSiteLocation {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsNetworkmanagerSiteLocationList <a name="DataAwsNetworkmanagerSiteLocationList" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsnetworkmanagersite"

dataawsnetworkmanagersite.NewDataAwsNetworkmanagerSiteLocationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsNetworkmanagerSiteLocationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationList.get"></a>

```go
func Get(index *f64) DataAwsNetworkmanagerSiteLocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsNetworkmanagerSiteLocationOutputReference <a name="DataAwsNetworkmanagerSiteLocationOutputReference" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsnetworkmanagersite"

dataawsnetworkmanagersite.NewDataAwsNetworkmanagerSiteLocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsNetworkmanagerSiteLocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.property.latitude">Latitude</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.property.longitude">Longitude</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocation">DataAwsNetworkmanagerSiteLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `Latitude`<sup>Required</sup> <a name="Latitude" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.property.latitude"></a>

```go
func Latitude() *string
```

- *Type:* *string

---

##### `Longitude`<sup>Required</sup> <a name="Longitude" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.property.longitude"></a>

```go
func Longitude() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsNetworkmanagerSiteLocation
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsNetworkmanagerSite.DataAwsNetworkmanagerSiteLocation">DataAwsNetworkmanagerSiteLocation</a>

---



