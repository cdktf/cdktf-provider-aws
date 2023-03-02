# `defaultSecurityGroup` Submodule <a name="`defaultSecurityGroup` Submodule" id="@cdktf/provider-aws.defaultSecurityGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DefaultSecurityGroup <a name="DefaultSecurityGroup" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/default_security_group aws_default_security_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/defaultsecuritygroup"

defaultsecuritygroup.NewDefaultSecurityGroup(scope Construct, id *string, config DefaultSecurityGroupConfig) DefaultSecurityGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig">DefaultSecurityGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig">DefaultSecurityGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.putEgress">PutEgress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.putIngress">PutIngress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.resetEgress">ResetEgress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.resetIngress">ResetIngress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.resetRevokeRulesOnDelete">ResetRevokeRulesOnDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.resetVpcId">ResetVpcId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutEgress` <a name="PutEgress" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.putEgress"></a>

```go
func PutEgress(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.putEgress.parameter.value"></a>

- *Type:* interface{}

---

##### `PutIngress` <a name="PutIngress" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.putIngress"></a>

```go
func PutIngress(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.putIngress.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetEgress` <a name="ResetEgress" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.resetEgress"></a>

```go
func ResetEgress()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.resetId"></a>

```go
func ResetId()
```

##### `ResetIngress` <a name="ResetIngress" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.resetIngress"></a>

```go
func ResetIngress()
```

##### `ResetRevokeRulesOnDelete` <a name="ResetRevokeRulesOnDelete" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.resetRevokeRulesOnDelete"></a>

```go
func ResetRevokeRulesOnDelete()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetVpcId` <a name="ResetVpcId" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.resetVpcId"></a>

```go
func ResetVpcId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/defaultsecuritygroup"

defaultsecuritygroup.DefaultSecurityGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/defaultsecuritygroup"

defaultsecuritygroup.DefaultSecurityGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/defaultsecuritygroup"

defaultsecuritygroup.DefaultSecurityGroup_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.egress">Egress</a></code> | <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList">DefaultSecurityGroupEgressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.ingress">Ingress</a></code> | <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList">DefaultSecurityGroupIngressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.namePrefix">NamePrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.ownerId">OwnerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.egressInput">EgressInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.ingressInput">IngressInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.revokeRulesOnDeleteInput">RevokeRulesOnDeleteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.vpcIdInput">VpcIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.revokeRulesOnDelete">RevokeRulesOnDelete</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Egress`<sup>Required</sup> <a name="Egress" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.egress"></a>

```go
func Egress() DefaultSecurityGroupEgressList
```

- *Type:* <a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList">DefaultSecurityGroupEgressList</a>

---

##### `Ingress`<sup>Required</sup> <a name="Ingress" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.ingress"></a>

```go
func Ingress() DefaultSecurityGroupIngressList
```

- *Type:* <a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList">DefaultSecurityGroupIngressList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NamePrefix`<sup>Required</sup> <a name="NamePrefix" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.namePrefix"></a>

```go
func NamePrefix() *string
```

- *Type:* *string

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.ownerId"></a>

```go
func OwnerId() *string
```

- *Type:* *string

---

##### `EgressInput`<sup>Optional</sup> <a name="EgressInput" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.egressInput"></a>

```go
func EgressInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IngressInput`<sup>Optional</sup> <a name="IngressInput" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.ingressInput"></a>

```go
func IngressInput() interface{}
```

- *Type:* interface{}

---

##### `RevokeRulesOnDeleteInput`<sup>Optional</sup> <a name="RevokeRulesOnDeleteInput" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.revokeRulesOnDeleteInput"></a>

```go
func RevokeRulesOnDeleteInput() interface{}
```

- *Type:* interface{}

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.vpcIdInput"></a>

```go
func VpcIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `RevokeRulesOnDelete`<sup>Required</sup> <a name="RevokeRulesOnDelete" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.revokeRulesOnDelete"></a>

```go
func RevokeRulesOnDelete() interface{}
```

- *Type:* interface{}

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DefaultSecurityGroupConfig <a name="DefaultSecurityGroupConfig" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/defaultsecuritygroup"

&defaultsecuritygroup.DefaultSecurityGroupConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Egress: interface{},
	Id: *string,
	Ingress: interface{},
	RevokeRulesOnDelete: interface{},
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	VpcId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.egress">Egress</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#egress DefaultSecurityGroup#egress}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#id DefaultSecurityGroup#id}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.ingress">Ingress</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#ingress DefaultSecurityGroup#ingress}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.revokeRulesOnDelete">RevokeRulesOnDelete</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#revoke_rules_on_delete DefaultSecurityGroup#revoke_rules_on_delete}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#tags DefaultSecurityGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#tags_all DefaultSecurityGroup#tags_all}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.vpcId">VpcId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#vpc_id DefaultSecurityGroup#vpc_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Egress`<sup>Optional</sup> <a name="Egress" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.egress"></a>

```go
Egress interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#egress DefaultSecurityGroup#egress}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#id DefaultSecurityGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Ingress`<sup>Optional</sup> <a name="Ingress" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.ingress"></a>

```go
Ingress interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#ingress DefaultSecurityGroup#ingress}.

---

##### `RevokeRulesOnDelete`<sup>Optional</sup> <a name="RevokeRulesOnDelete" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.revokeRulesOnDelete"></a>

```go
RevokeRulesOnDelete interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#revoke_rules_on_delete DefaultSecurityGroup#revoke_rules_on_delete}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#tags DefaultSecurityGroup#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#tags_all DefaultSecurityGroup#tags_all}.

---

##### `VpcId`<sup>Optional</sup> <a name="VpcId" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.vpcId"></a>

```go
VpcId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#vpc_id DefaultSecurityGroup#vpc_id}.

---

### DefaultSecurityGroupEgress <a name="DefaultSecurityGroupEgress" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/defaultsecuritygroup"

&defaultsecuritygroup.DefaultSecurityGroupEgress {
	CidrBlocks: *[]*string,
	Description: *string,
	FromPort: *f64,
	Ipv6CidrBlocks: *[]*string,
	PrefixListIds: *[]*string,
	Protocol: *string,
	SecurityGroups: *[]*string,
	SelfAttribute: interface{},
	ToPort: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress.property.cidrBlocks">CidrBlocks</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#cidr_blocks DefaultSecurityGroup#cidr_blocks}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#description DefaultSecurityGroup#description}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress.property.fromPort">FromPort</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#from_port DefaultSecurityGroup#from_port}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress.property.ipv6CidrBlocks">Ipv6CidrBlocks</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#ipv6_cidr_blocks DefaultSecurityGroup#ipv6_cidr_blocks}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress.property.prefixListIds">PrefixListIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#prefix_list_ids DefaultSecurityGroup#prefix_list_ids}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress.property.protocol">Protocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#protocol DefaultSecurityGroup#protocol}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress.property.securityGroups">SecurityGroups</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#security_groups DefaultSecurityGroup#security_groups}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress.property.selfAttribute">SelfAttribute</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#self DefaultSecurityGroup#self}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress.property.toPort">ToPort</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#to_port DefaultSecurityGroup#to_port}. |

---

##### `CidrBlocks`<sup>Optional</sup> <a name="CidrBlocks" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress.property.cidrBlocks"></a>

```go
CidrBlocks *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#cidr_blocks DefaultSecurityGroup#cidr_blocks}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#description DefaultSecurityGroup#description}.

---

##### `FromPort`<sup>Optional</sup> <a name="FromPort" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress.property.fromPort"></a>

```go
FromPort *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#from_port DefaultSecurityGroup#from_port}.

---

##### `Ipv6CidrBlocks`<sup>Optional</sup> <a name="Ipv6CidrBlocks" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress.property.ipv6CidrBlocks"></a>

```go
Ipv6CidrBlocks *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#ipv6_cidr_blocks DefaultSecurityGroup#ipv6_cidr_blocks}.

---

##### `PrefixListIds`<sup>Optional</sup> <a name="PrefixListIds" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress.property.prefixListIds"></a>

```go
PrefixListIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#prefix_list_ids DefaultSecurityGroup#prefix_list_ids}.

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#protocol DefaultSecurityGroup#protocol}.

---

##### `SecurityGroups`<sup>Optional</sup> <a name="SecurityGroups" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress.property.securityGroups"></a>

```go
SecurityGroups *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#security_groups DefaultSecurityGroup#security_groups}.

---

##### `SelfAttribute`<sup>Optional</sup> <a name="SelfAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress.property.selfAttribute"></a>

```go
SelfAttribute interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#self DefaultSecurityGroup#self}.

---

##### `ToPort`<sup>Optional</sup> <a name="ToPort" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress.property.toPort"></a>

```go
ToPort *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#to_port DefaultSecurityGroup#to_port}.

---

### DefaultSecurityGroupIngress <a name="DefaultSecurityGroupIngress" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/defaultsecuritygroup"

&defaultsecuritygroup.DefaultSecurityGroupIngress {
	CidrBlocks: *[]*string,
	Description: *string,
	FromPort: *f64,
	Ipv6CidrBlocks: *[]*string,
	PrefixListIds: *[]*string,
	Protocol: *string,
	SecurityGroups: *[]*string,
	SelfAttribute: interface{},
	ToPort: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress.property.cidrBlocks">CidrBlocks</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#cidr_blocks DefaultSecurityGroup#cidr_blocks}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#description DefaultSecurityGroup#description}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress.property.fromPort">FromPort</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#from_port DefaultSecurityGroup#from_port}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress.property.ipv6CidrBlocks">Ipv6CidrBlocks</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#ipv6_cidr_blocks DefaultSecurityGroup#ipv6_cidr_blocks}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress.property.prefixListIds">PrefixListIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#prefix_list_ids DefaultSecurityGroup#prefix_list_ids}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress.property.protocol">Protocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#protocol DefaultSecurityGroup#protocol}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress.property.securityGroups">SecurityGroups</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#security_groups DefaultSecurityGroup#security_groups}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress.property.selfAttribute">SelfAttribute</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#self DefaultSecurityGroup#self}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress.property.toPort">ToPort</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#to_port DefaultSecurityGroup#to_port}. |

---

##### `CidrBlocks`<sup>Optional</sup> <a name="CidrBlocks" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress.property.cidrBlocks"></a>

```go
CidrBlocks *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#cidr_blocks DefaultSecurityGroup#cidr_blocks}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#description DefaultSecurityGroup#description}.

---

##### `FromPort`<sup>Optional</sup> <a name="FromPort" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress.property.fromPort"></a>

```go
FromPort *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#from_port DefaultSecurityGroup#from_port}.

---

##### `Ipv6CidrBlocks`<sup>Optional</sup> <a name="Ipv6CidrBlocks" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress.property.ipv6CidrBlocks"></a>

```go
Ipv6CidrBlocks *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#ipv6_cidr_blocks DefaultSecurityGroup#ipv6_cidr_blocks}.

---

##### `PrefixListIds`<sup>Optional</sup> <a name="PrefixListIds" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress.property.prefixListIds"></a>

```go
PrefixListIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#prefix_list_ids DefaultSecurityGroup#prefix_list_ids}.

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#protocol DefaultSecurityGroup#protocol}.

---

##### `SecurityGroups`<sup>Optional</sup> <a name="SecurityGroups" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress.property.securityGroups"></a>

```go
SecurityGroups *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#security_groups DefaultSecurityGroup#security_groups}.

---

##### `SelfAttribute`<sup>Optional</sup> <a name="SelfAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress.property.selfAttribute"></a>

```go
SelfAttribute interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#self DefaultSecurityGroup#self}.

---

##### `ToPort`<sup>Optional</sup> <a name="ToPort" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress.property.toPort"></a>

```go
ToPort *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#to_port DefaultSecurityGroup#to_port}.

---

## Classes <a name="Classes" id="Classes"></a>

### DefaultSecurityGroupEgressList <a name="DefaultSecurityGroupEgressList" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/defaultsecuritygroup"

defaultsecuritygroup.NewDefaultSecurityGroupEgressList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DefaultSecurityGroupEgressList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.get"></a>

```go
func Get(index *f64) DefaultSecurityGroupEgressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DefaultSecurityGroupEgressOutputReference <a name="DefaultSecurityGroupEgressOutputReference" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/defaultsecuritygroup"

defaultsecuritygroup.NewDefaultSecurityGroupEgressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DefaultSecurityGroupEgressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.resetCidrBlocks">ResetCidrBlocks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.resetFromPort">ResetFromPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.resetIpv6CidrBlocks">ResetIpv6CidrBlocks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.resetPrefixListIds">ResetPrefixListIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.resetSecurityGroups">ResetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.resetSelfAttribute">ResetSelfAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.resetToPort">ResetToPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCidrBlocks` <a name="ResetCidrBlocks" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.resetCidrBlocks"></a>

```go
func ResetCidrBlocks()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetFromPort` <a name="ResetFromPort" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.resetFromPort"></a>

```go
func ResetFromPort()
```

##### `ResetIpv6CidrBlocks` <a name="ResetIpv6CidrBlocks" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.resetIpv6CidrBlocks"></a>

```go
func ResetIpv6CidrBlocks()
```

##### `ResetPrefixListIds` <a name="ResetPrefixListIds" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.resetPrefixListIds"></a>

```go
func ResetPrefixListIds()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.resetProtocol"></a>

```go
func ResetProtocol()
```

##### `ResetSecurityGroups` <a name="ResetSecurityGroups" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.resetSecurityGroups"></a>

```go
func ResetSecurityGroups()
```

##### `ResetSelfAttribute` <a name="ResetSelfAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.resetSelfAttribute"></a>

```go
func ResetSelfAttribute()
```

##### `ResetToPort` <a name="ResetToPort" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.resetToPort"></a>

```go
func ResetToPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.cidrBlocksInput">CidrBlocksInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.fromPortInput">FromPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.ipv6CidrBlocksInput">Ipv6CidrBlocksInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.prefixListIdsInput">PrefixListIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.securityGroupsInput">SecurityGroupsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.selfAttributeInput">SelfAttributeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.toPortInput">ToPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.cidrBlocks">CidrBlocks</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.fromPort">FromPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.ipv6CidrBlocks">Ipv6CidrBlocks</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.prefixListIds">PrefixListIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.securityGroups">SecurityGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.selfAttribute">SelfAttribute</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.toPort">ToPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CidrBlocksInput`<sup>Optional</sup> <a name="CidrBlocksInput" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.cidrBlocksInput"></a>

```go
func CidrBlocksInput() *[]*string
```

- *Type:* *[]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FromPortInput`<sup>Optional</sup> <a name="FromPortInput" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.fromPortInput"></a>

```go
func FromPortInput() *f64
```

- *Type:* *f64

---

##### `Ipv6CidrBlocksInput`<sup>Optional</sup> <a name="Ipv6CidrBlocksInput" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.ipv6CidrBlocksInput"></a>

```go
func Ipv6CidrBlocksInput() *[]*string
```

- *Type:* *[]*string

---

##### `PrefixListIdsInput`<sup>Optional</sup> <a name="PrefixListIdsInput" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.prefixListIdsInput"></a>

```go
func PrefixListIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `SecurityGroupsInput`<sup>Optional</sup> <a name="SecurityGroupsInput" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.securityGroupsInput"></a>

```go
func SecurityGroupsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SelfAttributeInput`<sup>Optional</sup> <a name="SelfAttributeInput" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.selfAttributeInput"></a>

```go
func SelfAttributeInput() interface{}
```

- *Type:* interface{}

---

##### `ToPortInput`<sup>Optional</sup> <a name="ToPortInput" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.toPortInput"></a>

```go
func ToPortInput() *f64
```

- *Type:* *f64

---

##### `CidrBlocks`<sup>Required</sup> <a name="CidrBlocks" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.cidrBlocks"></a>

```go
func CidrBlocks() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.fromPort"></a>

```go
func FromPort() *f64
```

- *Type:* *f64

---

##### `Ipv6CidrBlocks`<sup>Required</sup> <a name="Ipv6CidrBlocks" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.ipv6CidrBlocks"></a>

```go
func Ipv6CidrBlocks() *[]*string
```

- *Type:* *[]*string

---

##### `PrefixListIds`<sup>Required</sup> <a name="PrefixListIds" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.prefixListIds"></a>

```go
func PrefixListIds() *[]*string
```

- *Type:* *[]*string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.securityGroups"></a>

```go
func SecurityGroups() *[]*string
```

- *Type:* *[]*string

---

##### `SelfAttribute`<sup>Required</sup> <a name="SelfAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.selfAttribute"></a>

```go
func SelfAttribute() interface{}
```

- *Type:* interface{}

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.toPort"></a>

```go
func ToPort() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DefaultSecurityGroupIngressList <a name="DefaultSecurityGroupIngressList" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/defaultsecuritygroup"

defaultsecuritygroup.NewDefaultSecurityGroupIngressList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DefaultSecurityGroupIngressList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.get"></a>

```go
func Get(index *f64) DefaultSecurityGroupIngressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DefaultSecurityGroupIngressOutputReference <a name="DefaultSecurityGroupIngressOutputReference" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/defaultsecuritygroup"

defaultsecuritygroup.NewDefaultSecurityGroupIngressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DefaultSecurityGroupIngressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.resetCidrBlocks">ResetCidrBlocks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.resetFromPort">ResetFromPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.resetIpv6CidrBlocks">ResetIpv6CidrBlocks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.resetPrefixListIds">ResetPrefixListIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.resetSecurityGroups">ResetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.resetSelfAttribute">ResetSelfAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.resetToPort">ResetToPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCidrBlocks` <a name="ResetCidrBlocks" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.resetCidrBlocks"></a>

```go
func ResetCidrBlocks()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetFromPort` <a name="ResetFromPort" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.resetFromPort"></a>

```go
func ResetFromPort()
```

##### `ResetIpv6CidrBlocks` <a name="ResetIpv6CidrBlocks" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.resetIpv6CidrBlocks"></a>

```go
func ResetIpv6CidrBlocks()
```

##### `ResetPrefixListIds` <a name="ResetPrefixListIds" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.resetPrefixListIds"></a>

```go
func ResetPrefixListIds()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.resetProtocol"></a>

```go
func ResetProtocol()
```

##### `ResetSecurityGroups` <a name="ResetSecurityGroups" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.resetSecurityGroups"></a>

```go
func ResetSecurityGroups()
```

##### `ResetSelfAttribute` <a name="ResetSelfAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.resetSelfAttribute"></a>

```go
func ResetSelfAttribute()
```

##### `ResetToPort` <a name="ResetToPort" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.resetToPort"></a>

```go
func ResetToPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.cidrBlocksInput">CidrBlocksInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.fromPortInput">FromPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.ipv6CidrBlocksInput">Ipv6CidrBlocksInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.prefixListIdsInput">PrefixListIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.securityGroupsInput">SecurityGroupsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.selfAttributeInput">SelfAttributeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.toPortInput">ToPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.cidrBlocks">CidrBlocks</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.fromPort">FromPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.ipv6CidrBlocks">Ipv6CidrBlocks</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.prefixListIds">PrefixListIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.securityGroups">SecurityGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.selfAttribute">SelfAttribute</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.toPort">ToPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CidrBlocksInput`<sup>Optional</sup> <a name="CidrBlocksInput" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.cidrBlocksInput"></a>

```go
func CidrBlocksInput() *[]*string
```

- *Type:* *[]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FromPortInput`<sup>Optional</sup> <a name="FromPortInput" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.fromPortInput"></a>

```go
func FromPortInput() *f64
```

- *Type:* *f64

---

##### `Ipv6CidrBlocksInput`<sup>Optional</sup> <a name="Ipv6CidrBlocksInput" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.ipv6CidrBlocksInput"></a>

```go
func Ipv6CidrBlocksInput() *[]*string
```

- *Type:* *[]*string

---

##### `PrefixListIdsInput`<sup>Optional</sup> <a name="PrefixListIdsInput" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.prefixListIdsInput"></a>

```go
func PrefixListIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `SecurityGroupsInput`<sup>Optional</sup> <a name="SecurityGroupsInput" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.securityGroupsInput"></a>

```go
func SecurityGroupsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SelfAttributeInput`<sup>Optional</sup> <a name="SelfAttributeInput" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.selfAttributeInput"></a>

```go
func SelfAttributeInput() interface{}
```

- *Type:* interface{}

---

##### `ToPortInput`<sup>Optional</sup> <a name="ToPortInput" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.toPortInput"></a>

```go
func ToPortInput() *f64
```

- *Type:* *f64

---

##### `CidrBlocks`<sup>Required</sup> <a name="CidrBlocks" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.cidrBlocks"></a>

```go
func CidrBlocks() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.fromPort"></a>

```go
func FromPort() *f64
```

- *Type:* *f64

---

##### `Ipv6CidrBlocks`<sup>Required</sup> <a name="Ipv6CidrBlocks" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.ipv6CidrBlocks"></a>

```go
func Ipv6CidrBlocks() *[]*string
```

- *Type:* *[]*string

---

##### `PrefixListIds`<sup>Required</sup> <a name="PrefixListIds" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.prefixListIds"></a>

```go
func PrefixListIds() *[]*string
```

- *Type:* *[]*string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.securityGroups"></a>

```go
func SecurityGroups() *[]*string
```

- *Type:* *[]*string

---

##### `SelfAttribute`<sup>Required</sup> <a name="SelfAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.selfAttribute"></a>

```go
func SelfAttribute() interface{}
```

- *Type:* interface{}

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.toPort"></a>

```go
func ToPort() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



