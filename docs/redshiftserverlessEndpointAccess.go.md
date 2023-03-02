# `redshiftserverlessEndpointAccess` Submodule <a name="`redshiftserverlessEndpointAccess` Submodule" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftserverlessEndpointAccess <a name="RedshiftserverlessEndpointAccess" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_endpoint_access aws_redshiftserverless_endpoint_access}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/redshiftserverlessendpointaccess"

redshiftserverlessendpointaccess.NewRedshiftserverlessEndpointAccess(scope Construct, id *string, config RedshiftserverlessEndpointAccessConfig) RedshiftserverlessEndpointAccess
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessConfig">RedshiftserverlessEndpointAccessConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessConfig">RedshiftserverlessEndpointAccessConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.resetVpcSecurityGroupIds">ResetVpcSecurityGroupIds</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.resetId"></a>

```go
func ResetId()
```

##### `ResetVpcSecurityGroupIds` <a name="ResetVpcSecurityGroupIds" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.resetVpcSecurityGroupIds"></a>

```go
func ResetVpcSecurityGroupIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/redshiftserverlessendpointaccess"

redshiftserverlessendpointaccess.RedshiftserverlessEndpointAccess_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/redshiftserverlessendpointaccess"

redshiftserverlessendpointaccess.RedshiftserverlessEndpointAccess_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/redshiftserverlessendpointaccess"

redshiftserverlessendpointaccess.RedshiftserverlessEndpointAccess_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.vpcEndpoint">VpcEndpoint</a></code> | <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointList">RedshiftserverlessEndpointAccessVpcEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.endpointNameInput">EndpointNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.vpcSecurityGroupIdsInput">VpcSecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.workgroupNameInput">WorkgroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.endpointName">EndpointName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.vpcSecurityGroupIds">VpcSecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.workgroupName">WorkgroupName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `VpcEndpoint`<sup>Required</sup> <a name="VpcEndpoint" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.vpcEndpoint"></a>

```go
func VpcEndpoint() RedshiftserverlessEndpointAccessVpcEndpointList
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointList">RedshiftserverlessEndpointAccessVpcEndpointList</a>

---

##### `EndpointNameInput`<sup>Optional</sup> <a name="EndpointNameInput" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.endpointNameInput"></a>

```go
func EndpointNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.subnetIdsInput"></a>

```go
func SubnetIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `VpcSecurityGroupIdsInput`<sup>Optional</sup> <a name="VpcSecurityGroupIdsInput" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.vpcSecurityGroupIdsInput"></a>

```go
func VpcSecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `WorkgroupNameInput`<sup>Optional</sup> <a name="WorkgroupNameInput" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.workgroupNameInput"></a>

```go
func WorkgroupNameInput() *string
```

- *Type:* *string

---

##### `EndpointName`<sup>Required</sup> <a name="EndpointName" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.endpointName"></a>

```go
func EndpointName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `VpcSecurityGroupIds`<sup>Required</sup> <a name="VpcSecurityGroupIds" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.vpcSecurityGroupIds"></a>

```go
func VpcSecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `WorkgroupName`<sup>Required</sup> <a name="WorkgroupName" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.workgroupName"></a>

```go
func WorkgroupName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccess.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftserverlessEndpointAccessConfig <a name="RedshiftserverlessEndpointAccessConfig" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/redshiftserverlessendpointaccess"

&redshiftserverlessendpointaccess.RedshiftserverlessEndpointAccessConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	EndpointName: *string,
	SubnetIds: *[]*string,
	WorkgroupName: *string,
	Id: *string,
	VpcSecurityGroupIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessConfig.property.endpointName">EndpointName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_endpoint_access#endpoint_name RedshiftserverlessEndpointAccess#endpoint_name}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessConfig.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_endpoint_access#subnet_ids RedshiftserverlessEndpointAccess#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessConfig.property.workgroupName">WorkgroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_endpoint_access#workgroup_name RedshiftserverlessEndpointAccess#workgroup_name}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_endpoint_access#id RedshiftserverlessEndpointAccess#id}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessConfig.property.vpcSecurityGroupIds">VpcSecurityGroupIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_endpoint_access#vpc_security_group_ids RedshiftserverlessEndpointAccess#vpc_security_group_ids}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EndpointName`<sup>Required</sup> <a name="EndpointName" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessConfig.property.endpointName"></a>

```go
EndpointName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_endpoint_access#endpoint_name RedshiftserverlessEndpointAccess#endpoint_name}.

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessConfig.property.subnetIds"></a>

```go
SubnetIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_endpoint_access#subnet_ids RedshiftserverlessEndpointAccess#subnet_ids}.

---

##### `WorkgroupName`<sup>Required</sup> <a name="WorkgroupName" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessConfig.property.workgroupName"></a>

```go
WorkgroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_endpoint_access#workgroup_name RedshiftserverlessEndpointAccess#workgroup_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_endpoint_access#id RedshiftserverlessEndpointAccess#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `VpcSecurityGroupIds`<sup>Optional</sup> <a name="VpcSecurityGroupIds" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessConfig.property.vpcSecurityGroupIds"></a>

```go
VpcSecurityGroupIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshiftserverless_endpoint_access#vpc_security_group_ids RedshiftserverlessEndpointAccess#vpc_security_group_ids}.

---

### RedshiftserverlessEndpointAccessVpcEndpoint <a name="RedshiftserverlessEndpointAccessVpcEndpoint" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpoint.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/redshiftserverlessendpointaccess"

&redshiftserverlessendpointaccess.RedshiftserverlessEndpointAccessVpcEndpoint {

}
```


### RedshiftserverlessEndpointAccessVpcEndpointNetworkInterface <a name="RedshiftserverlessEndpointAccessVpcEndpointNetworkInterface" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterface.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/redshiftserverlessendpointaccess"

&redshiftserverlessendpointaccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterface {

}
```


## Classes <a name="Classes" id="Classes"></a>

### RedshiftserverlessEndpointAccessVpcEndpointList <a name="RedshiftserverlessEndpointAccessVpcEndpointList" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/redshiftserverlessendpointaccess"

redshiftserverlessendpointaccess.NewRedshiftserverlessEndpointAccessVpcEndpointList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RedshiftserverlessEndpointAccessVpcEndpointList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointList.get"></a>

```go
func Get(index *f64) RedshiftserverlessEndpointAccessVpcEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList <a name="RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/redshiftserverlessendpointaccess"

redshiftserverlessendpointaccess.NewRedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList.get"></a>

```go
func Get(index *f64) RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference <a name="RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/redshiftserverlessendpointaccess"

redshiftserverlessendpointaccess.NewRedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.property.networkInterfaceId">NetworkInterfaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.property.privateIpAddress">PrivateIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterface">RedshiftserverlessEndpointAccessVpcEndpointNetworkInterface</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.property.availabilityZone"></a>

```go
func AvailabilityZone() *string
```

- *Type:* *string

---

##### `NetworkInterfaceId`<sup>Required</sup> <a name="NetworkInterfaceId" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.property.networkInterfaceId"></a>

```go
func NetworkInterfaceId() *string
```

- *Type:* *string

---

##### `PrivateIpAddress`<sup>Required</sup> <a name="PrivateIpAddress" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.property.privateIpAddress"></a>

```go
func PrivateIpAddress() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference.property.internalValue"></a>

```go
func InternalValue() RedshiftserverlessEndpointAccessVpcEndpointNetworkInterface
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterface">RedshiftserverlessEndpointAccessVpcEndpointNetworkInterface</a>

---


### RedshiftserverlessEndpointAccessVpcEndpointOutputReference <a name="RedshiftserverlessEndpointAccessVpcEndpointOutputReference" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/redshiftserverlessendpointaccess"

redshiftserverlessendpointaccess.NewRedshiftserverlessEndpointAccessVpcEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RedshiftserverlessEndpointAccessVpcEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.property.networkInterface">NetworkInterface</a></code> | <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList">RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.property.vpcEndpointId">VpcEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpoint">RedshiftserverlessEndpointAccessVpcEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NetworkInterface`<sup>Required</sup> <a name="NetworkInterface" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.property.networkInterface"></a>

```go
func NetworkInterface() RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList">RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList</a>

---

##### `VpcEndpointId`<sup>Required</sup> <a name="VpcEndpointId" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.property.vpcEndpointId"></a>

```go
func VpcEndpointId() *string
```

- *Type:* *string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() RedshiftserverlessEndpointAccessVpcEndpoint
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftserverlessEndpointAccess.RedshiftserverlessEndpointAccessVpcEndpoint">RedshiftserverlessEndpointAccessVpcEndpoint</a>

---



