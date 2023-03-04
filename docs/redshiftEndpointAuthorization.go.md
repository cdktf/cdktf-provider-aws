# `redshiftEndpointAuthorization` Submodule <a name="`redshiftEndpointAuthorization` Submodule" id="@cdktf/provider-aws.redshiftEndpointAuthorization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftEndpointAuthorization <a name="RedshiftEndpointAuthorization" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/redshift_endpoint_authorization aws_redshift_endpoint_authorization}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/redshiftendpointauthorization"

redshiftendpointauthorization.NewRedshiftEndpointAuthorization(scope Construct, id *string, config RedshiftEndpointAuthorizationConfig) RedshiftEndpointAuthorization
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig">RedshiftEndpointAuthorizationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig">RedshiftEndpointAuthorizationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.resetForceDelete">ResetForceDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.resetVpcIds">ResetVpcIds</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetForceDelete` <a name="ResetForceDelete" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.resetForceDelete"></a>

```go
func ResetForceDelete()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.resetId"></a>

```go
func ResetId()
```

##### `ResetVpcIds` <a name="ResetVpcIds" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.resetVpcIds"></a>

```go
func ResetVpcIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/redshiftendpointauthorization"

redshiftendpointauthorization.RedshiftEndpointAuthorization_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/redshiftendpointauthorization"

redshiftendpointauthorization.RedshiftEndpointAuthorization_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/redshiftendpointauthorization"

redshiftendpointauthorization.RedshiftEndpointAuthorization_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.allowedAllVpcs">AllowedAllVpcs</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.endpointCount">EndpointCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.grantee">Grantee</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.grantor">Grantor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.accountInput">AccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.clusterIdentifierInput">ClusterIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.forceDeleteInput">ForceDeleteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.vpcIdsInput">VpcIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.account">Account</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.clusterIdentifier">ClusterIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.forceDelete">ForceDelete</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.vpcIds">VpcIds</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AllowedAllVpcs`<sup>Required</sup> <a name="AllowedAllVpcs" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.allowedAllVpcs"></a>

```go
func AllowedAllVpcs() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `EndpointCount`<sup>Required</sup> <a name="EndpointCount" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.endpointCount"></a>

```go
func EndpointCount() *f64
```

- *Type:* *f64

---

##### `Grantee`<sup>Required</sup> <a name="Grantee" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.grantee"></a>

```go
func Grantee() *string
```

- *Type:* *string

---

##### `Grantor`<sup>Required</sup> <a name="Grantor" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.grantor"></a>

```go
func Grantor() *string
```

- *Type:* *string

---

##### `AccountInput`<sup>Optional</sup> <a name="AccountInput" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.accountInput"></a>

```go
func AccountInput() *string
```

- *Type:* *string

---

##### `ClusterIdentifierInput`<sup>Optional</sup> <a name="ClusterIdentifierInput" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.clusterIdentifierInput"></a>

```go
func ClusterIdentifierInput() *string
```

- *Type:* *string

---

##### `ForceDeleteInput`<sup>Optional</sup> <a name="ForceDeleteInput" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.forceDeleteInput"></a>

```go
func ForceDeleteInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `VpcIdsInput`<sup>Optional</sup> <a name="VpcIdsInput" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.vpcIdsInput"></a>

```go
func VpcIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Account`<sup>Required</sup> <a name="Account" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.account"></a>

```go
func Account() *string
```

- *Type:* *string

---

##### `ClusterIdentifier`<sup>Required</sup> <a name="ClusterIdentifier" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.clusterIdentifier"></a>

```go
func ClusterIdentifier() *string
```

- *Type:* *string

---

##### `ForceDelete`<sup>Required</sup> <a name="ForceDelete" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.forceDelete"></a>

```go
func ForceDelete() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `VpcIds`<sup>Required</sup> <a name="VpcIds" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.vpcIds"></a>

```go
func VpcIds() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorization.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftEndpointAuthorizationConfig <a name="RedshiftEndpointAuthorizationConfig" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/redshiftendpointauthorization"

&redshiftendpointauthorization.RedshiftEndpointAuthorizationConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Account: *string,
	ClusterIdentifier: *string,
	ForceDelete: interface{},
	Id: *string,
	VpcIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.account">Account</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_endpoint_authorization#account RedshiftEndpointAuthorization#account}. |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.clusterIdentifier">ClusterIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_endpoint_authorization#cluster_identifier RedshiftEndpointAuthorization#cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.forceDelete">ForceDelete</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_endpoint_authorization#force_delete RedshiftEndpointAuthorization#force_delete}. |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_endpoint_authorization#id RedshiftEndpointAuthorization#id}. |
| <code><a href="#@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.vpcIds">VpcIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_endpoint_authorization#vpc_ids RedshiftEndpointAuthorization#vpc_ids}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Account`<sup>Required</sup> <a name="Account" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.account"></a>

```go
Account *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_endpoint_authorization#account RedshiftEndpointAuthorization#account}.

---

##### `ClusterIdentifier`<sup>Required</sup> <a name="ClusterIdentifier" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.clusterIdentifier"></a>

```go
ClusterIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_endpoint_authorization#cluster_identifier RedshiftEndpointAuthorization#cluster_identifier}.

---

##### `ForceDelete`<sup>Optional</sup> <a name="ForceDelete" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.forceDelete"></a>

```go
ForceDelete interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_endpoint_authorization#force_delete RedshiftEndpointAuthorization#force_delete}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_endpoint_authorization#id RedshiftEndpointAuthorization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `VpcIds`<sup>Optional</sup> <a name="VpcIds" id="@cdktf/provider-aws.redshiftEndpointAuthorization.RedshiftEndpointAuthorizationConfig.property.vpcIds"></a>

```go
VpcIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_endpoint_authorization#vpc_ids RedshiftEndpointAuthorization#vpc_ids}.

---



