# `vpcIpamResourceDiscoveryAssociation` Submodule <a name="`vpcIpamResourceDiscoveryAssociation` Submodule" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcIpamResourceDiscoveryAssociation <a name="VpcIpamResourceDiscoveryAssociation" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery_association aws_vpc_ipam_resource_discovery_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpcipamresourcediscoveryassociation"

vpcipamresourcediscoveryassociation.NewVpcIpamResourceDiscoveryAssociation(scope Construct, id *string, config VpcIpamResourceDiscoveryAssociationConfig) VpcIpamResourceDiscoveryAssociation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig">VpcIpamResourceDiscoveryAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig">VpcIpamResourceDiscoveryAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.putTimeouts"></a>

```go
func PutTimeouts(value VpcIpamResourceDiscoveryAssociationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeouts">VpcIpamResourceDiscoveryAssociationTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpcipamresourcediscoveryassociation"

vpcipamresourcediscoveryassociation.VpcIpamResourceDiscoveryAssociation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpcipamresourcediscoveryassociation"

vpcipamresourcediscoveryassociation.VpcIpamResourceDiscoveryAssociation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpcipamresourcediscoveryassociation"

vpcipamresourcediscoveryassociation.VpcIpamResourceDiscoveryAssociation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.ipamArn">IpamArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.ipamRegion">IpamRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.isDefault">IsDefault</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.ownerId">OwnerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference">VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.ipamIdInput">IpamIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.ipamResourceDiscoveryIdInput">IpamResourceDiscoveryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.ipamId">IpamId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.ipamResourceDiscoveryId">IpamResourceDiscoveryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `IpamArn`<sup>Required</sup> <a name="IpamArn" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.ipamArn"></a>

```go
func IpamArn() *string
```

- *Type:* *string

---

##### `IpamRegion`<sup>Required</sup> <a name="IpamRegion" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.ipamRegion"></a>

```go
func IpamRegion() *string
```

- *Type:* *string

---

##### `IsDefault`<sup>Required</sup> <a name="IsDefault" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.isDefault"></a>

```go
func IsDefault() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.ownerId"></a>

```go
func OwnerId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.timeouts"></a>

```go
func Timeouts() VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference">VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IpamIdInput`<sup>Optional</sup> <a name="IpamIdInput" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.ipamIdInput"></a>

```go
func IpamIdInput() *string
```

- *Type:* *string

---

##### `IpamResourceDiscoveryIdInput`<sup>Optional</sup> <a name="IpamResourceDiscoveryIdInput" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.ipamResourceDiscoveryIdInput"></a>

```go
func IpamResourceDiscoveryIdInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IpamId`<sup>Required</sup> <a name="IpamId" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.ipamId"></a>

```go
func IpamId() *string
```

- *Type:* *string

---

##### `IpamResourceDiscoveryId`<sup>Required</sup> <a name="IpamResourceDiscoveryId" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.ipamResourceDiscoveryId"></a>

```go
func IpamResourceDiscoveryId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VpcIpamResourceDiscoveryAssociationConfig <a name="VpcIpamResourceDiscoveryAssociationConfig" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpcipamresourcediscoveryassociation"

&vpcipamresourcediscoveryassociation.VpcIpamResourceDiscoveryAssociationConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	IpamId: *string,
	IpamResourceDiscoveryId: *string,
	Id: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig.property.ipamId">IpamId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery_association#ipam_id VpcIpamResourceDiscoveryAssociation#ipam_id}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig.property.ipamResourceDiscoveryId">IpamResourceDiscoveryId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery_association#ipam_resource_discovery_id VpcIpamResourceDiscoveryAssociation#ipam_resource_discovery_id}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery_association#id VpcIpamResourceDiscoveryAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery_association#tags VpcIpamResourceDiscoveryAssociation#tags}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery_association#tags_all VpcIpamResourceDiscoveryAssociation#tags_all}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeouts">VpcIpamResourceDiscoveryAssociationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IpamId`<sup>Required</sup> <a name="IpamId" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig.property.ipamId"></a>

```go
IpamId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery_association#ipam_id VpcIpamResourceDiscoveryAssociation#ipam_id}.

---

##### `IpamResourceDiscoveryId`<sup>Required</sup> <a name="IpamResourceDiscoveryId" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig.property.ipamResourceDiscoveryId"></a>

```go
IpamResourceDiscoveryId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery_association#ipam_resource_discovery_id VpcIpamResourceDiscoveryAssociation#ipam_resource_discovery_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery_association#id VpcIpamResourceDiscoveryAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery_association#tags VpcIpamResourceDiscoveryAssociation#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery_association#tags_all VpcIpamResourceDiscoveryAssociation#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig.property.timeouts"></a>

```go
Timeouts VpcIpamResourceDiscoveryAssociationTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeouts">VpcIpamResourceDiscoveryAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery_association#timeouts VpcIpamResourceDiscoveryAssociation#timeouts}

---

### VpcIpamResourceDiscoveryAssociationTimeouts <a name="VpcIpamResourceDiscoveryAssociationTimeouts" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpcipamresourcediscoveryassociation"

&vpcipamresourcediscoveryassociation.VpcIpamResourceDiscoveryAssociationTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery_association#create VpcIpamResourceDiscoveryAssociation#create}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery_association#delete VpcIpamResourceDiscoveryAssociation#delete}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery_association#update VpcIpamResourceDiscoveryAssociation#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery_association#create VpcIpamResourceDiscoveryAssociation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery_association#delete VpcIpamResourceDiscoveryAssociation#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery_association#update VpcIpamResourceDiscoveryAssociation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference <a name="VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpcipamresourcediscoveryassociation"

vpcipamresourcediscoveryassociation.NewVpcIpamResourceDiscoveryAssociationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



