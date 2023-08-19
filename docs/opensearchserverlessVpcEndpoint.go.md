# `aws_opensearchserverless_vpc_endpoint`

Refer to the Terraform Registory for docs: [`aws_opensearchserverless_vpc_endpoint`](https://registry.terraform.io/providers/hashicorp/aws/5.13.1/docs/resources/opensearchserverless_vpc_endpoint).

# `opensearchserverlessVpcEndpoint` Submodule <a name="`opensearchserverlessVpcEndpoint` Submodule" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpensearchserverlessVpcEndpoint <a name="OpensearchserverlessVpcEndpoint" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.13.1/docs/resources/opensearchserverless_vpc_endpoint aws_opensearchserverless_vpc_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v16/opensearchserverlessvpcendpoint"

opensearchserverlessvpcendpoint.NewOpensearchserverlessVpcEndpoint(scope Construct, id *string, config OpensearchserverlessVpcEndpointConfig) OpensearchserverlessVpcEndpoint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointConfig">OpensearchserverlessVpcEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointConfig">OpensearchserverlessVpcEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.putTimeouts"></a>

```go
func PutTimeouts(value OpensearchserverlessVpcEndpointTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeouts">OpensearchserverlessVpcEndpointTimeouts</a>

---

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.resetSecurityGroupIds"></a>

```go
func ResetSecurityGroupIds()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v16/opensearchserverlessvpcendpoint"

opensearchserverlessvpcendpoint.OpensearchserverlessVpcEndpoint_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v16/opensearchserverlessvpcendpoint"

opensearchserverlessvpcendpoint.OpensearchserverlessVpcEndpoint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v16/opensearchserverlessvpcendpoint"

opensearchserverlessvpcendpoint.OpensearchserverlessVpcEndpoint_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference">OpensearchserverlessVpcEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.vpcIdInput">VpcIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.timeouts"></a>

```go
func Timeouts() OpensearchserverlessVpcEndpointTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference">OpensearchserverlessVpcEndpointTimeoutsOutputReference</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.securityGroupIdsInput"></a>

```go
func SecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.subnetIdsInput"></a>

```go
func SubnetIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.vpcIdInput"></a>

```go
func VpcIdInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpoint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OpensearchserverlessVpcEndpointConfig <a name="OpensearchserverlessVpcEndpointConfig" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v16/opensearchserverlessvpcendpoint"

&opensearchserverlessvpcendpoint.OpensearchserverlessVpcEndpointConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	SubnetIds: *[]*string,
	VpcId: *string,
	SecurityGroupIds: *[]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws/v16.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.13.1/docs/resources/opensearchserverless_vpc_endpoint#name OpensearchserverlessVpcEndpoint#name}. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointConfig.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.13.1/docs/resources/opensearchserverless_vpc_endpoint#subnet_ids OpensearchserverlessVpcEndpoint#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointConfig.property.vpcId">VpcId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.13.1/docs/resources/opensearchserverless_vpc_endpoint#vpc_id OpensearchserverlessVpcEndpoint#vpc_id}. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.13.1/docs/resources/opensearchserverless_vpc_endpoint#security_group_ids OpensearchserverlessVpcEndpoint#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeouts">OpensearchserverlessVpcEndpointTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.13.1/docs/resources/opensearchserverless_vpc_endpoint#name OpensearchserverlessVpcEndpoint#name}.

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointConfig.property.subnetIds"></a>

```go
SubnetIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.13.1/docs/resources/opensearchserverless_vpc_endpoint#subnet_ids OpensearchserverlessVpcEndpoint#subnet_ids}.

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointConfig.property.vpcId"></a>

```go
VpcId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.13.1/docs/resources/opensearchserverless_vpc_endpoint#vpc_id OpensearchserverlessVpcEndpoint#vpc_id}.

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointConfig.property.securityGroupIds"></a>

```go
SecurityGroupIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.13.1/docs/resources/opensearchserverless_vpc_endpoint#security_group_ids OpensearchserverlessVpcEndpoint#security_group_ids}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointConfig.property.timeouts"></a>

```go
Timeouts OpensearchserverlessVpcEndpointTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeouts">OpensearchserverlessVpcEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.13.1/docs/resources/opensearchserverless_vpc_endpoint#timeouts OpensearchserverlessVpcEndpoint#timeouts}

---

### OpensearchserverlessVpcEndpointTimeouts <a name="OpensearchserverlessVpcEndpointTimeouts" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v16/opensearchserverlessvpcendpoint"

&opensearchserverlessvpcendpoint.OpensearchserverlessVpcEndpointTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeouts.property.create">Create</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeouts.property.delete">Delete</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeouts.property.update">Update</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.13.1/docs/resources/opensearchserverless_vpc_endpoint#create OpensearchserverlessVpcEndpoint#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.13.1/docs/resources/opensearchserverless_vpc_endpoint#delete OpensearchserverlessVpcEndpoint#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.13.1/docs/resources/opensearchserverless_vpc_endpoint#update OpensearchserverlessVpcEndpoint#update}

---

## Classes <a name="Classes" id="Classes"></a>

### OpensearchserverlessVpcEndpointTimeoutsOutputReference <a name="OpensearchserverlessVpcEndpointTimeoutsOutputReference" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v16/opensearchserverlessvpcendpoint"

opensearchserverlessvpcendpoint.NewOpensearchserverlessVpcEndpointTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpensearchserverlessVpcEndpointTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opensearchserverlessVpcEndpoint.OpensearchserverlessVpcEndpointTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



