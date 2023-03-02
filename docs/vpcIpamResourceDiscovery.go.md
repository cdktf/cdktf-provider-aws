# `vpcIpamResourceDiscovery` Submodule <a name="`vpcIpamResourceDiscovery` Submodule" id="@cdktf/provider-aws.vpcIpamResourceDiscovery"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcIpamResourceDiscovery <a name="VpcIpamResourceDiscovery" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery aws_vpc_ipam_resource_discovery}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpcipamresourcediscovery"

vpcipamresourcediscovery.NewVpcIpamResourceDiscovery(scope Construct, id *string, config VpcIpamResourceDiscoveryConfig) VpcIpamResourceDiscovery
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryConfig">VpcIpamResourceDiscoveryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryConfig">VpcIpamResourceDiscoveryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.putOperatingRegions">PutOperatingRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutOperatingRegions` <a name="PutOperatingRegions" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.putOperatingRegions"></a>

```go
func PutOperatingRegions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.putOperatingRegions.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.putTimeouts"></a>

```go
func PutTimeouts(value VpcIpamResourceDiscoveryTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeouts">VpcIpamResourceDiscoveryTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpcipamresourcediscovery"

vpcipamresourcediscovery.VpcIpamResourceDiscovery_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpcipamresourcediscovery"

vpcipamresourcediscovery.VpcIpamResourceDiscovery_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpcipamresourcediscovery"

vpcipamresourcediscovery.VpcIpamResourceDiscovery_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.ipamResourceDiscoveryRegion">IpamResourceDiscoveryRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.isDefault">IsDefault</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.operatingRegions">OperatingRegions</a></code> | <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsList">VpcIpamResourceDiscoveryOperatingRegionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.ownerId">OwnerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference">VpcIpamResourceDiscoveryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.operatingRegionsInput">OperatingRegionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `IpamResourceDiscoveryRegion`<sup>Required</sup> <a name="IpamResourceDiscoveryRegion" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.ipamResourceDiscoveryRegion"></a>

```go
func IpamResourceDiscoveryRegion() *string
```

- *Type:* *string

---

##### `IsDefault`<sup>Required</sup> <a name="IsDefault" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.isDefault"></a>

```go
func IsDefault() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `OperatingRegions`<sup>Required</sup> <a name="OperatingRegions" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.operatingRegions"></a>

```go
func OperatingRegions() VpcIpamResourceDiscoveryOperatingRegionsList
```

- *Type:* <a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsList">VpcIpamResourceDiscoveryOperatingRegionsList</a>

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.ownerId"></a>

```go
func OwnerId() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.timeouts"></a>

```go
func Timeouts() VpcIpamResourceDiscoveryTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference">VpcIpamResourceDiscoveryTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OperatingRegionsInput`<sup>Optional</sup> <a name="OperatingRegionsInput" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.operatingRegionsInput"></a>

```go
func OperatingRegionsInput() interface{}
```

- *Type:* interface{}

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscovery.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VpcIpamResourceDiscoveryConfig <a name="VpcIpamResourceDiscoveryConfig" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpcipamresourcediscovery"

&vpcipamresourcediscovery.VpcIpamResourceDiscoveryConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	OperatingRegions: interface{},
	Description: *string,
	Id: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryConfig.property.operatingRegions">OperatingRegions</a></code> | <code>interface{}</code> | operating_regions block. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery#description VpcIpamResourceDiscovery#description}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery#id VpcIpamResourceDiscovery#id}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery#tags VpcIpamResourceDiscovery#tags}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery#tags_all VpcIpamResourceDiscovery#tags_all}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeouts">VpcIpamResourceDiscoveryTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `OperatingRegions`<sup>Required</sup> <a name="OperatingRegions" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryConfig.property.operatingRegions"></a>

```go
OperatingRegions interface{}
```

- *Type:* interface{}

operating_regions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery#operating_regions VpcIpamResourceDiscovery#operating_regions}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery#description VpcIpamResourceDiscovery#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery#id VpcIpamResourceDiscovery#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery#tags VpcIpamResourceDiscovery#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery#tags_all VpcIpamResourceDiscovery#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryConfig.property.timeouts"></a>

```go
Timeouts VpcIpamResourceDiscoveryTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeouts">VpcIpamResourceDiscoveryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery#timeouts VpcIpamResourceDiscovery#timeouts}

---

### VpcIpamResourceDiscoveryOperatingRegions <a name="VpcIpamResourceDiscoveryOperatingRegions" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpcipamresourcediscovery"

&vpcipamresourcediscovery.VpcIpamResourceDiscoveryOperatingRegions {
	RegionName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegions.property.regionName">RegionName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery#region_name VpcIpamResourceDiscovery#region_name}. |

---

##### `RegionName`<sup>Required</sup> <a name="RegionName" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegions.property.regionName"></a>

```go
RegionName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery#region_name VpcIpamResourceDiscovery#region_name}.

---

### VpcIpamResourceDiscoveryTimeouts <a name="VpcIpamResourceDiscoveryTimeouts" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpcipamresourcediscovery"

&vpcipamresourcediscovery.VpcIpamResourceDiscoveryTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery#create VpcIpamResourceDiscovery#create}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery#delete VpcIpamResourceDiscovery#delete}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery#update VpcIpamResourceDiscovery#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery#create VpcIpamResourceDiscovery#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery#delete VpcIpamResourceDiscovery#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery#update VpcIpamResourceDiscovery#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpcIpamResourceDiscoveryOperatingRegionsList <a name="VpcIpamResourceDiscoveryOperatingRegionsList" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpcipamresourcediscovery"

vpcipamresourcediscovery.NewVpcIpamResourceDiscoveryOperatingRegionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VpcIpamResourceDiscoveryOperatingRegionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsList.get"></a>

```go
func Get(index *f64) VpcIpamResourceDiscoveryOperatingRegionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VpcIpamResourceDiscoveryOperatingRegionsOutputReference <a name="VpcIpamResourceDiscoveryOperatingRegionsOutputReference" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpcipamresourcediscovery"

vpcipamresourcediscovery.NewVpcIpamResourceDiscoveryOperatingRegionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VpcIpamResourceDiscoveryOperatingRegionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.property.regionNameInput">RegionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.property.regionName">RegionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RegionNameInput`<sup>Optional</sup> <a name="RegionNameInput" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.property.regionNameInput"></a>

```go
func RegionNameInput() *string
```

- *Type:* *string

---

##### `RegionName`<sup>Required</sup> <a name="RegionName" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.property.regionName"></a>

```go
func RegionName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryOperatingRegionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VpcIpamResourceDiscoveryTimeoutsOutputReference <a name="VpcIpamResourceDiscoveryTimeoutsOutputReference" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpcipamresourcediscovery"

vpcipamresourcediscovery.NewVpcIpamResourceDiscoveryTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VpcIpamResourceDiscoveryTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.vpcIpamResourceDiscovery.VpcIpamResourceDiscoveryTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



