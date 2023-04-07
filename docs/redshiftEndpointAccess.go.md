# `redshiftEndpointAccess` Submodule <a name="`redshiftEndpointAccess` Submodule" id="@cdktf/provider-aws.redshiftEndpointAccess"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftEndpointAccess <a name="RedshiftEndpointAccess" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/redshift_endpoint_access aws_redshift_endpoint_access}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/redshiftendpointaccess"

redshiftendpointaccess.NewRedshiftEndpointAccess(scope Construct, id *string, config RedshiftEndpointAccessConfig) RedshiftEndpointAccess
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessConfig">RedshiftEndpointAccessConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessConfig">RedshiftEndpointAccessConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.resetResourceOwner">ResetResourceOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.resetVpcSecurityGroupIds">ResetVpcSecurityGroupIds</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.resetId"></a>

```go
func ResetId()
```

##### `ResetResourceOwner` <a name="ResetResourceOwner" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.resetResourceOwner"></a>

```go
func ResetResourceOwner()
```

##### `ResetVpcSecurityGroupIds` <a name="ResetVpcSecurityGroupIds" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.resetVpcSecurityGroupIds"></a>

```go
func ResetVpcSecurityGroupIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/redshiftendpointaccess"

redshiftendpointaccess.RedshiftEndpointAccess_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/redshiftendpointaccess"

redshiftendpointaccess.RedshiftEndpointAccess_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/redshiftendpointaccess"

redshiftendpointaccess.RedshiftEndpointAccess_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.property.vpcEndpoint">VpcEndpoint</a></code> | <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointList">RedshiftEndpointAccessVpcEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.property.clusterIdentifierInput">ClusterIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.property.endpointNameInput">EndpointNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.property.resourceOwnerInput">ResourceOwnerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.property.subnetGroupNameInput">SubnetGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.property.vpcSecurityGroupIdsInput">VpcSecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.property.clusterIdentifier">ClusterIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.property.endpointName">EndpointName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.property.resourceOwner">ResourceOwner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.property.subnetGroupName">SubnetGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.property.vpcSecurityGroupIds">VpcSecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `VpcEndpoint`<sup>Required</sup> <a name="VpcEndpoint" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.property.vpcEndpoint"></a>

```go
func VpcEndpoint() RedshiftEndpointAccessVpcEndpointList
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointList">RedshiftEndpointAccessVpcEndpointList</a>

---

##### `ClusterIdentifierInput`<sup>Optional</sup> <a name="ClusterIdentifierInput" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.property.clusterIdentifierInput"></a>

```go
func ClusterIdentifierInput() *string
```

- *Type:* *string

---

##### `EndpointNameInput`<sup>Optional</sup> <a name="EndpointNameInput" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.property.endpointNameInput"></a>

```go
func EndpointNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ResourceOwnerInput`<sup>Optional</sup> <a name="ResourceOwnerInput" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.property.resourceOwnerInput"></a>

```go
func ResourceOwnerInput() *string
```

- *Type:* *string

---

##### `SubnetGroupNameInput`<sup>Optional</sup> <a name="SubnetGroupNameInput" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.property.subnetGroupNameInput"></a>

```go
func SubnetGroupNameInput() *string
```

- *Type:* *string

---

##### `VpcSecurityGroupIdsInput`<sup>Optional</sup> <a name="VpcSecurityGroupIdsInput" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.property.vpcSecurityGroupIdsInput"></a>

```go
func VpcSecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ClusterIdentifier`<sup>Required</sup> <a name="ClusterIdentifier" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.property.clusterIdentifier"></a>

```go
func ClusterIdentifier() *string
```

- *Type:* *string

---

##### `EndpointName`<sup>Required</sup> <a name="EndpointName" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.property.endpointName"></a>

```go
func EndpointName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ResourceOwner`<sup>Required</sup> <a name="ResourceOwner" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.property.resourceOwner"></a>

```go
func ResourceOwner() *string
```

- *Type:* *string

---

##### `SubnetGroupName`<sup>Required</sup> <a name="SubnetGroupName" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.property.subnetGroupName"></a>

```go
func SubnetGroupName() *string
```

- *Type:* *string

---

##### `VpcSecurityGroupIds`<sup>Required</sup> <a name="VpcSecurityGroupIds" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.property.vpcSecurityGroupIds"></a>

```go
func VpcSecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccess.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftEndpointAccessConfig <a name="RedshiftEndpointAccessConfig" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/redshiftendpointaccess"

&redshiftendpointaccess.RedshiftEndpointAccessConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ClusterIdentifier: *string,
	EndpointName: *string,
	SubnetGroupName: *string,
	Id: *string,
	ResourceOwner: *string,
	VpcSecurityGroupIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessConfig.property.clusterIdentifier">ClusterIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_endpoint_access#cluster_identifier RedshiftEndpointAccess#cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessConfig.property.endpointName">EndpointName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_endpoint_access#endpoint_name RedshiftEndpointAccess#endpoint_name}. |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessConfig.property.subnetGroupName">SubnetGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_endpoint_access#subnet_group_name RedshiftEndpointAccess#subnet_group_name}. |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_endpoint_access#id RedshiftEndpointAccess#id}. |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessConfig.property.resourceOwner">ResourceOwner</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_endpoint_access#resource_owner RedshiftEndpointAccess#resource_owner}. |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessConfig.property.vpcSecurityGroupIds">VpcSecurityGroupIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_endpoint_access#vpc_security_group_ids RedshiftEndpointAccess#vpc_security_group_ids}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClusterIdentifier`<sup>Required</sup> <a name="ClusterIdentifier" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessConfig.property.clusterIdentifier"></a>

```go
ClusterIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_endpoint_access#cluster_identifier RedshiftEndpointAccess#cluster_identifier}.

---

##### `EndpointName`<sup>Required</sup> <a name="EndpointName" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessConfig.property.endpointName"></a>

```go
EndpointName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_endpoint_access#endpoint_name RedshiftEndpointAccess#endpoint_name}.

---

##### `SubnetGroupName`<sup>Required</sup> <a name="SubnetGroupName" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessConfig.property.subnetGroupName"></a>

```go
SubnetGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_endpoint_access#subnet_group_name RedshiftEndpointAccess#subnet_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_endpoint_access#id RedshiftEndpointAccess#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ResourceOwner`<sup>Optional</sup> <a name="ResourceOwner" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessConfig.property.resourceOwner"></a>

```go
ResourceOwner *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_endpoint_access#resource_owner RedshiftEndpointAccess#resource_owner}.

---

##### `VpcSecurityGroupIds`<sup>Optional</sup> <a name="VpcSecurityGroupIds" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessConfig.property.vpcSecurityGroupIds"></a>

```go
VpcSecurityGroupIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_endpoint_access#vpc_security_group_ids RedshiftEndpointAccess#vpc_security_group_ids}.

---

### RedshiftEndpointAccessVpcEndpoint <a name="RedshiftEndpointAccessVpcEndpoint" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpoint.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/redshiftendpointaccess"

&redshiftendpointaccess.RedshiftEndpointAccessVpcEndpoint {

}
```


### RedshiftEndpointAccessVpcEndpointNetworkInterface <a name="RedshiftEndpointAccessVpcEndpointNetworkInterface" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterface.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/redshiftendpointaccess"

&redshiftendpointaccess.RedshiftEndpointAccessVpcEndpointNetworkInterface {

}
```


## Classes <a name="Classes" id="Classes"></a>

### RedshiftEndpointAccessVpcEndpointList <a name="RedshiftEndpointAccessVpcEndpointList" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/redshiftendpointaccess"

redshiftendpointaccess.NewRedshiftEndpointAccessVpcEndpointList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RedshiftEndpointAccessVpcEndpointList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointList.get"></a>

```go
func Get(index *f64) RedshiftEndpointAccessVpcEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### RedshiftEndpointAccessVpcEndpointNetworkInterfaceList <a name="RedshiftEndpointAccessVpcEndpointNetworkInterfaceList" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/redshiftendpointaccess"

redshiftendpointaccess.NewRedshiftEndpointAccessVpcEndpointNetworkInterfaceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RedshiftEndpointAccessVpcEndpointNetworkInterfaceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaceList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaceList.get"></a>

```go
func Get(index *f64) RedshiftEndpointAccessVpcEndpointNetworkInterfaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### RedshiftEndpointAccessVpcEndpointNetworkInterfaceOutputReference <a name="RedshiftEndpointAccessVpcEndpointNetworkInterfaceOutputReference" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/redshiftendpointaccess"

redshiftendpointaccess.NewRedshiftEndpointAccessVpcEndpointNetworkInterfaceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RedshiftEndpointAccessVpcEndpointNetworkInterfaceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaceOutputReference.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaceOutputReference.property.networkInterfaceId">NetworkInterfaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaceOutputReference.property.privateIpAddress">PrivateIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaceOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterface">RedshiftEndpointAccessVpcEndpointNetworkInterface</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaceOutputReference.property.availabilityZone"></a>

```go
func AvailabilityZone() *string
```

- *Type:* *string

---

##### `NetworkInterfaceId`<sup>Required</sup> <a name="NetworkInterfaceId" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaceOutputReference.property.networkInterfaceId"></a>

```go
func NetworkInterfaceId() *string
```

- *Type:* *string

---

##### `PrivateIpAddress`<sup>Required</sup> <a name="PrivateIpAddress" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaceOutputReference.property.privateIpAddress"></a>

```go
func PrivateIpAddress() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaceOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaceOutputReference.property.internalValue"></a>

```go
func InternalValue() RedshiftEndpointAccessVpcEndpointNetworkInterface
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterface">RedshiftEndpointAccessVpcEndpointNetworkInterface</a>

---


### RedshiftEndpointAccessVpcEndpointOutputReference <a name="RedshiftEndpointAccessVpcEndpointOutputReference" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/redshiftendpointaccess"

redshiftendpointaccess.NewRedshiftEndpointAccessVpcEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RedshiftEndpointAccessVpcEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.property.networkInterface">NetworkInterface</a></code> | <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaceList">RedshiftEndpointAccessVpcEndpointNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.property.vpcEndpointId">VpcEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpoint">RedshiftEndpointAccessVpcEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NetworkInterface`<sup>Required</sup> <a name="NetworkInterface" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.property.networkInterface"></a>

```go
func NetworkInterface() RedshiftEndpointAccessVpcEndpointNetworkInterfaceList
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointNetworkInterfaceList">RedshiftEndpointAccessVpcEndpointNetworkInterfaceList</a>

---

##### `VpcEndpointId`<sup>Required</sup> <a name="VpcEndpointId" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.property.vpcEndpointId"></a>

```go
func VpcEndpointId() *string
```

- *Type:* *string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() RedshiftEndpointAccessVpcEndpoint
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftEndpointAccess.RedshiftEndpointAccessVpcEndpoint">RedshiftEndpointAccessVpcEndpoint</a>

---



