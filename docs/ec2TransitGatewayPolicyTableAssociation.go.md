# `ec2TransitGatewayPolicyTableAssociation` Submodule <a name="`ec2TransitGatewayPolicyTableAssociation` Submodule" id="@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2TransitGatewayPolicyTableAssociation <a name="Ec2TransitGatewayPolicyTableAssociation" id="@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_policy_table_association aws_ec2_transit_gateway_policy_table_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2transitgatewaypolicytableassociation"

ec2transitgatewaypolicytableassociation.NewEc2TransitGatewayPolicyTableAssociation(scope Construct, id *string, config Ec2TransitGatewayPolicyTableAssociationConfig) Ec2TransitGatewayPolicyTableAssociation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociationConfig">Ec2TransitGatewayPolicyTableAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociationConfig">Ec2TransitGatewayPolicyTableAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2transitgatewaypolicytableassociation"

ec2transitgatewaypolicytableassociation.Ec2TransitGatewayPolicyTableAssociation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2transitgatewaypolicytableassociation"

ec2transitgatewaypolicytableassociation.Ec2TransitGatewayPolicyTableAssociation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2transitgatewaypolicytableassociation"

ec2transitgatewaypolicytableassociation.Ec2TransitGatewayPolicyTableAssociation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.property.resourceId">ResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.property.transitGatewayAttachmentIdInput">TransitGatewayAttachmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.property.transitGatewayPolicyTableIdInput">TransitGatewayPolicyTableIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.property.transitGatewayAttachmentId">TransitGatewayAttachmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.property.transitGatewayPolicyTableId">TransitGatewayPolicyTableId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.property.resourceId"></a>

```go
func ResourceId() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TransitGatewayAttachmentIdInput`<sup>Optional</sup> <a name="TransitGatewayAttachmentIdInput" id="@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.property.transitGatewayAttachmentIdInput"></a>

```go
func TransitGatewayAttachmentIdInput() *string
```

- *Type:* *string

---

##### `TransitGatewayPolicyTableIdInput`<sup>Optional</sup> <a name="TransitGatewayPolicyTableIdInput" id="@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.property.transitGatewayPolicyTableIdInput"></a>

```go
func TransitGatewayPolicyTableIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `TransitGatewayAttachmentId`<sup>Required</sup> <a name="TransitGatewayAttachmentId" id="@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.property.transitGatewayAttachmentId"></a>

```go
func TransitGatewayAttachmentId() *string
```

- *Type:* *string

---

##### `TransitGatewayPolicyTableId`<sup>Required</sup> <a name="TransitGatewayPolicyTableId" id="@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.property.transitGatewayPolicyTableId"></a>

```go
func TransitGatewayPolicyTableId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2TransitGatewayPolicyTableAssociationConfig <a name="Ec2TransitGatewayPolicyTableAssociationConfig" id="@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2transitgatewaypolicytableassociation"

&ec2transitgatewaypolicytableassociation.Ec2TransitGatewayPolicyTableAssociationConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	TransitGatewayAttachmentId: *string,
	TransitGatewayPolicyTableId: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociationConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociationConfig.property.transitGatewayAttachmentId">TransitGatewayAttachmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_policy_table_association#transit_gateway_attachment_id Ec2TransitGatewayPolicyTableAssociation#transit_gateway_attachment_id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociationConfig.property.transitGatewayPolicyTableId">TransitGatewayPolicyTableId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_policy_table_association#transit_gateway_policy_table_id Ec2TransitGatewayPolicyTableAssociation#transit_gateway_policy_table_id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_policy_table_association#id Ec2TransitGatewayPolicyTableAssociation#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociationConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `TransitGatewayAttachmentId`<sup>Required</sup> <a name="TransitGatewayAttachmentId" id="@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociationConfig.property.transitGatewayAttachmentId"></a>

```go
TransitGatewayAttachmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_policy_table_association#transit_gateway_attachment_id Ec2TransitGatewayPolicyTableAssociation#transit_gateway_attachment_id}.

---

##### `TransitGatewayPolicyTableId`<sup>Required</sup> <a name="TransitGatewayPolicyTableId" id="@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociationConfig.property.transitGatewayPolicyTableId"></a>

```go
TransitGatewayPolicyTableId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_policy_table_association#transit_gateway_policy_table_id Ec2TransitGatewayPolicyTableAssociation#transit_gateway_policy_table_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.ec2TransitGatewayPolicyTableAssociation.Ec2TransitGatewayPolicyTableAssociationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_policy_table_association#id Ec2TransitGatewayPolicyTableAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



