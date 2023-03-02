# `securityGroup` Submodule <a name="`securityGroup` Submodule" id="@cdktf/provider-aws.securityGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityGroup <a name="SecurityGroup" id="@cdktf/provider-aws.securityGroup.SecurityGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/security_group aws_security_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securityGroup.SecurityGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/securitygroup"

securitygroup.NewSecurityGroup(scope Construct, id *string, config SecurityGroupConfig) SecurityGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupConfig">SecurityGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.securityGroup.SecurityGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securityGroup.SecurityGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.securityGroup.SecurityGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.securityGroup.SecurityGroupConfig">SecurityGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.putEgress">PutEgress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.putIngress">PutIngress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.resetEgress">ResetEgress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.resetIngress">ResetIngress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.resetNamePrefix">ResetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.resetRevokeRulesOnDelete">ResetRevokeRulesOnDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.resetVpcId">ResetVpcId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securityGroup.SecurityGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.securityGroup.SecurityGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.securityGroup.SecurityGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securityGroup.SecurityGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.securityGroup.SecurityGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.securityGroup.SecurityGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.securityGroup.SecurityGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.securityGroup.SecurityGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.securityGroup.SecurityGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutEgress` <a name="PutEgress" id="@cdktf/provider-aws.securityGroup.SecurityGroup.putEgress"></a>

```go
func PutEgress(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securityGroup.SecurityGroup.putEgress.parameter.value"></a>

- *Type:* interface{}

---

##### `PutIngress` <a name="PutIngress" id="@cdktf/provider-aws.securityGroup.SecurityGroup.putIngress"></a>

```go
func PutIngress(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securityGroup.SecurityGroup.putIngress.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.securityGroup.SecurityGroup.putTimeouts"></a>

```go
func PutTimeouts(value SecurityGroupTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securityGroup.SecurityGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeouts">SecurityGroupTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.securityGroup.SecurityGroup.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEgress` <a name="ResetEgress" id="@cdktf/provider-aws.securityGroup.SecurityGroup.resetEgress"></a>

```go
func ResetEgress()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.securityGroup.SecurityGroup.resetId"></a>

```go
func ResetId()
```

##### `ResetIngress` <a name="ResetIngress" id="@cdktf/provider-aws.securityGroup.SecurityGroup.resetIngress"></a>

```go
func ResetIngress()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.securityGroup.SecurityGroup.resetName"></a>

```go
func ResetName()
```

##### `ResetNamePrefix` <a name="ResetNamePrefix" id="@cdktf/provider-aws.securityGroup.SecurityGroup.resetNamePrefix"></a>

```go
func ResetNamePrefix()
```

##### `ResetRevokeRulesOnDelete` <a name="ResetRevokeRulesOnDelete" id="@cdktf/provider-aws.securityGroup.SecurityGroup.resetRevokeRulesOnDelete"></a>

```go
func ResetRevokeRulesOnDelete()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.securityGroup.SecurityGroup.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.securityGroup.SecurityGroup.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.securityGroup.SecurityGroup.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVpcId` <a name="ResetVpcId" id="@cdktf/provider-aws.securityGroup.SecurityGroup.resetVpcId"></a>

```go
func ResetVpcId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.securityGroup.SecurityGroup.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/securitygroup"

securitygroup.SecurityGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.securityGroup.SecurityGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.securityGroup.SecurityGroup.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/securitygroup"

securitygroup.SecurityGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.securityGroup.SecurityGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.securityGroup.SecurityGroup.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/securitygroup"

securitygroup.SecurityGroup_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.securityGroup.SecurityGroup.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.egress">Egress</a></code> | <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressList">SecurityGroupEgressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.ingress">Ingress</a></code> | <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressList">SecurityGroupIngressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.ownerId">OwnerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference">SecurityGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.egressInput">EgressInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.ingressInput">IngressInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.namePrefixInput">NamePrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.revokeRulesOnDeleteInput">RevokeRulesOnDeleteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.vpcIdInput">VpcIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.namePrefix">NamePrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.revokeRulesOnDelete">RevokeRulesOnDelete</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Egress`<sup>Required</sup> <a name="Egress" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.egress"></a>

```go
func Egress() SecurityGroupEgressList
```

- *Type:* <a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressList">SecurityGroupEgressList</a>

---

##### `Ingress`<sup>Required</sup> <a name="Ingress" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.ingress"></a>

```go
func Ingress() SecurityGroupIngressList
```

- *Type:* <a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressList">SecurityGroupIngressList</a>

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.ownerId"></a>

```go
func OwnerId() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.timeouts"></a>

```go
func Timeouts() SecurityGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference">SecurityGroupTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EgressInput`<sup>Optional</sup> <a name="EgressInput" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.egressInput"></a>

```go
func EgressInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IngressInput`<sup>Optional</sup> <a name="IngressInput" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.ingressInput"></a>

```go
func IngressInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamePrefixInput`<sup>Optional</sup> <a name="NamePrefixInput" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.namePrefixInput"></a>

```go
func NamePrefixInput() *string
```

- *Type:* *string

---

##### `RevokeRulesOnDeleteInput`<sup>Optional</sup> <a name="RevokeRulesOnDeleteInput" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.revokeRulesOnDeleteInput"></a>

```go
func RevokeRulesOnDeleteInput() interface{}
```

- *Type:* interface{}

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.vpcIdInput"></a>

```go
func VpcIdInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NamePrefix`<sup>Required</sup> <a name="NamePrefix" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.namePrefix"></a>

```go
func NamePrefix() *string
```

- *Type:* *string

---

##### `RevokeRulesOnDelete`<sup>Required</sup> <a name="RevokeRulesOnDelete" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.revokeRulesOnDelete"></a>

```go
func RevokeRulesOnDelete() interface{}
```

- *Type:* interface{}

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityGroupConfig <a name="SecurityGroupConfig" id="@cdktf/provider-aws.securityGroup.SecurityGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securityGroup.SecurityGroupConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/securitygroup"

&securitygroup.SecurityGroupConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Description: *string,
	Egress: interface{},
	Id: *string,
	Ingress: interface{},
	Name: *string,
	NamePrefix: *string,
	RevokeRulesOnDelete: interface{},
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.securityGroup.SecurityGroupTimeouts,
	VpcId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#description SecurityGroup#description}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.egress">Egress</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#egress SecurityGroup#egress}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#id SecurityGroup#id}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.ingress">Ingress</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#ingress SecurityGroup#ingress}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#name SecurityGroup#name}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.namePrefix">NamePrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#name_prefix SecurityGroup#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.revokeRulesOnDelete">RevokeRulesOnDelete</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#revoke_rules_on_delete SecurityGroup#revoke_rules_on_delete}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#tags SecurityGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#tags_all SecurityGroup#tags_all}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeouts">SecurityGroupTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.vpcId">VpcId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#vpc_id SecurityGroup#vpc_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#description SecurityGroup#description}.

---

##### `Egress`<sup>Optional</sup> <a name="Egress" id="@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.egress"></a>

```go
Egress interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#egress SecurityGroup#egress}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#id SecurityGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Ingress`<sup>Optional</sup> <a name="Ingress" id="@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.ingress"></a>

```go
Ingress interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#ingress SecurityGroup#ingress}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#name SecurityGroup#name}.

---

##### `NamePrefix`<sup>Optional</sup> <a name="NamePrefix" id="@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.namePrefix"></a>

```go
NamePrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#name_prefix SecurityGroup#name_prefix}.

---

##### `RevokeRulesOnDelete`<sup>Optional</sup> <a name="RevokeRulesOnDelete" id="@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.revokeRulesOnDelete"></a>

```go
RevokeRulesOnDelete interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#revoke_rules_on_delete SecurityGroup#revoke_rules_on_delete}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#tags SecurityGroup#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#tags_all SecurityGroup#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.timeouts"></a>

```go
Timeouts SecurityGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeouts">SecurityGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#timeouts SecurityGroup#timeouts}

---

##### `VpcId`<sup>Optional</sup> <a name="VpcId" id="@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.vpcId"></a>

```go
VpcId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#vpc_id SecurityGroup#vpc_id}.

---

### SecurityGroupEgress <a name="SecurityGroupEgress" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgress.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/securitygroup"

&securitygroup.SecurityGroupEgress {
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
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgress.property.cidrBlocks">CidrBlocks</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#cidr_blocks SecurityGroup#cidr_blocks}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgress.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#description SecurityGroup#description}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgress.property.fromPort">FromPort</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#from_port SecurityGroup#from_port}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgress.property.ipv6CidrBlocks">Ipv6CidrBlocks</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#ipv6_cidr_blocks SecurityGroup#ipv6_cidr_blocks}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgress.property.prefixListIds">PrefixListIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#prefix_list_ids SecurityGroup#prefix_list_ids}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgress.property.protocol">Protocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#protocol SecurityGroup#protocol}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgress.property.securityGroups">SecurityGroups</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#security_groups SecurityGroup#security_groups}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgress.property.selfAttribute">SelfAttribute</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#self SecurityGroup#self}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgress.property.toPort">ToPort</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#to_port SecurityGroup#to_port}. |

---

##### `CidrBlocks`<sup>Optional</sup> <a name="CidrBlocks" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgress.property.cidrBlocks"></a>

```go
CidrBlocks *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#cidr_blocks SecurityGroup#cidr_blocks}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgress.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#description SecurityGroup#description}.

---

##### `FromPort`<sup>Optional</sup> <a name="FromPort" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgress.property.fromPort"></a>

```go
FromPort *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#from_port SecurityGroup#from_port}.

---

##### `Ipv6CidrBlocks`<sup>Optional</sup> <a name="Ipv6CidrBlocks" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgress.property.ipv6CidrBlocks"></a>

```go
Ipv6CidrBlocks *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#ipv6_cidr_blocks SecurityGroup#ipv6_cidr_blocks}.

---

##### `PrefixListIds`<sup>Optional</sup> <a name="PrefixListIds" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgress.property.prefixListIds"></a>

```go
PrefixListIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#prefix_list_ids SecurityGroup#prefix_list_ids}.

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgress.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#protocol SecurityGroup#protocol}.

---

##### `SecurityGroups`<sup>Optional</sup> <a name="SecurityGroups" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgress.property.securityGroups"></a>

```go
SecurityGroups *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#security_groups SecurityGroup#security_groups}.

---

##### `SelfAttribute`<sup>Optional</sup> <a name="SelfAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgress.property.selfAttribute"></a>

```go
SelfAttribute interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#self SecurityGroup#self}.

---

##### `ToPort`<sup>Optional</sup> <a name="ToPort" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgress.property.toPort"></a>

```go
ToPort *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#to_port SecurityGroup#to_port}.

---

### SecurityGroupIngress <a name="SecurityGroupIngress" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngress.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/securitygroup"

&securitygroup.SecurityGroupIngress {
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
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngress.property.cidrBlocks">CidrBlocks</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#cidr_blocks SecurityGroup#cidr_blocks}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngress.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#description SecurityGroup#description}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngress.property.fromPort">FromPort</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#from_port SecurityGroup#from_port}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngress.property.ipv6CidrBlocks">Ipv6CidrBlocks</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#ipv6_cidr_blocks SecurityGroup#ipv6_cidr_blocks}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngress.property.prefixListIds">PrefixListIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#prefix_list_ids SecurityGroup#prefix_list_ids}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngress.property.protocol">Protocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#protocol SecurityGroup#protocol}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngress.property.securityGroups">SecurityGroups</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#security_groups SecurityGroup#security_groups}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngress.property.selfAttribute">SelfAttribute</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#self SecurityGroup#self}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngress.property.toPort">ToPort</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#to_port SecurityGroup#to_port}. |

---

##### `CidrBlocks`<sup>Optional</sup> <a name="CidrBlocks" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngress.property.cidrBlocks"></a>

```go
CidrBlocks *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#cidr_blocks SecurityGroup#cidr_blocks}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngress.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#description SecurityGroup#description}.

---

##### `FromPort`<sup>Optional</sup> <a name="FromPort" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngress.property.fromPort"></a>

```go
FromPort *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#from_port SecurityGroup#from_port}.

---

##### `Ipv6CidrBlocks`<sup>Optional</sup> <a name="Ipv6CidrBlocks" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngress.property.ipv6CidrBlocks"></a>

```go
Ipv6CidrBlocks *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#ipv6_cidr_blocks SecurityGroup#ipv6_cidr_blocks}.

---

##### `PrefixListIds`<sup>Optional</sup> <a name="PrefixListIds" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngress.property.prefixListIds"></a>

```go
PrefixListIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#prefix_list_ids SecurityGroup#prefix_list_ids}.

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngress.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#protocol SecurityGroup#protocol}.

---

##### `SecurityGroups`<sup>Optional</sup> <a name="SecurityGroups" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngress.property.securityGroups"></a>

```go
SecurityGroups *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#security_groups SecurityGroup#security_groups}.

---

##### `SelfAttribute`<sup>Optional</sup> <a name="SelfAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngress.property.selfAttribute"></a>

```go
SelfAttribute interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#self SecurityGroup#self}.

---

##### `ToPort`<sup>Optional</sup> <a name="ToPort" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngress.property.toPort"></a>

```go
ToPort *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#to_port SecurityGroup#to_port}.

---

### SecurityGroupTimeouts <a name="SecurityGroupTimeouts" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/securitygroup"

&securitygroup.SecurityGroupTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#create SecurityGroup#create}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#delete SecurityGroup#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#create SecurityGroup#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#delete SecurityGroup#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityGroupEgressList <a name="SecurityGroupEgressList" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/securitygroup"

securitygroup.NewSecurityGroupEgressList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SecurityGroupEgressList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressList.get"></a>

```go
func Get(index *f64) SecurityGroupEgressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecurityGroupEgressOutputReference <a name="SecurityGroupEgressOutputReference" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/securitygroup"

securitygroup.NewSecurityGroupEgressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SecurityGroupEgressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.resetCidrBlocks">ResetCidrBlocks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.resetFromPort">ResetFromPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.resetIpv6CidrBlocks">ResetIpv6CidrBlocks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.resetPrefixListIds">ResetPrefixListIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.resetSecurityGroups">ResetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.resetSelfAttribute">ResetSelfAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.resetToPort">ResetToPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCidrBlocks` <a name="ResetCidrBlocks" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.resetCidrBlocks"></a>

```go
func ResetCidrBlocks()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetFromPort` <a name="ResetFromPort" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.resetFromPort"></a>

```go
func ResetFromPort()
```

##### `ResetIpv6CidrBlocks` <a name="ResetIpv6CidrBlocks" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.resetIpv6CidrBlocks"></a>

```go
func ResetIpv6CidrBlocks()
```

##### `ResetPrefixListIds` <a name="ResetPrefixListIds" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.resetPrefixListIds"></a>

```go
func ResetPrefixListIds()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.resetProtocol"></a>

```go
func ResetProtocol()
```

##### `ResetSecurityGroups` <a name="ResetSecurityGroups" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.resetSecurityGroups"></a>

```go
func ResetSecurityGroups()
```

##### `ResetSelfAttribute` <a name="ResetSelfAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.resetSelfAttribute"></a>

```go
func ResetSelfAttribute()
```

##### `ResetToPort` <a name="ResetToPort" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.resetToPort"></a>

```go
func ResetToPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.cidrBlocksInput">CidrBlocksInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.fromPortInput">FromPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.ipv6CidrBlocksInput">Ipv6CidrBlocksInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.prefixListIdsInput">PrefixListIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.securityGroupsInput">SecurityGroupsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.selfAttributeInput">SelfAttributeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.toPortInput">ToPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.cidrBlocks">CidrBlocks</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.fromPort">FromPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.ipv6CidrBlocks">Ipv6CidrBlocks</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.prefixListIds">PrefixListIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.securityGroups">SecurityGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.selfAttribute">SelfAttribute</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.toPort">ToPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CidrBlocksInput`<sup>Optional</sup> <a name="CidrBlocksInput" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.cidrBlocksInput"></a>

```go
func CidrBlocksInput() *[]*string
```

- *Type:* *[]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FromPortInput`<sup>Optional</sup> <a name="FromPortInput" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.fromPortInput"></a>

```go
func FromPortInput() *f64
```

- *Type:* *f64

---

##### `Ipv6CidrBlocksInput`<sup>Optional</sup> <a name="Ipv6CidrBlocksInput" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.ipv6CidrBlocksInput"></a>

```go
func Ipv6CidrBlocksInput() *[]*string
```

- *Type:* *[]*string

---

##### `PrefixListIdsInput`<sup>Optional</sup> <a name="PrefixListIdsInput" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.prefixListIdsInput"></a>

```go
func PrefixListIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `SecurityGroupsInput`<sup>Optional</sup> <a name="SecurityGroupsInput" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.securityGroupsInput"></a>

```go
func SecurityGroupsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SelfAttributeInput`<sup>Optional</sup> <a name="SelfAttributeInput" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.selfAttributeInput"></a>

```go
func SelfAttributeInput() interface{}
```

- *Type:* interface{}

---

##### `ToPortInput`<sup>Optional</sup> <a name="ToPortInput" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.toPortInput"></a>

```go
func ToPortInput() *f64
```

- *Type:* *f64

---

##### `CidrBlocks`<sup>Required</sup> <a name="CidrBlocks" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.cidrBlocks"></a>

```go
func CidrBlocks() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.fromPort"></a>

```go
func FromPort() *f64
```

- *Type:* *f64

---

##### `Ipv6CidrBlocks`<sup>Required</sup> <a name="Ipv6CidrBlocks" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.ipv6CidrBlocks"></a>

```go
func Ipv6CidrBlocks() *[]*string
```

- *Type:* *[]*string

---

##### `PrefixListIds`<sup>Required</sup> <a name="PrefixListIds" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.prefixListIds"></a>

```go
func PrefixListIds() *[]*string
```

- *Type:* *[]*string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.securityGroups"></a>

```go
func SecurityGroups() *[]*string
```

- *Type:* *[]*string

---

##### `SelfAttribute`<sup>Required</sup> <a name="SelfAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.selfAttribute"></a>

```go
func SelfAttribute() interface{}
```

- *Type:* interface{}

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.toPort"></a>

```go
func ToPort() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecurityGroupIngressList <a name="SecurityGroupIngressList" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/securitygroup"

securitygroup.NewSecurityGroupIngressList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SecurityGroupIngressList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressList.get"></a>

```go
func Get(index *f64) SecurityGroupIngressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecurityGroupIngressOutputReference <a name="SecurityGroupIngressOutputReference" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/securitygroup"

securitygroup.NewSecurityGroupIngressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SecurityGroupIngressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.resetCidrBlocks">ResetCidrBlocks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.resetFromPort">ResetFromPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.resetIpv6CidrBlocks">ResetIpv6CidrBlocks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.resetPrefixListIds">ResetPrefixListIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.resetSecurityGroups">ResetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.resetSelfAttribute">ResetSelfAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.resetToPort">ResetToPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCidrBlocks` <a name="ResetCidrBlocks" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.resetCidrBlocks"></a>

```go
func ResetCidrBlocks()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetFromPort` <a name="ResetFromPort" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.resetFromPort"></a>

```go
func ResetFromPort()
```

##### `ResetIpv6CidrBlocks` <a name="ResetIpv6CidrBlocks" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.resetIpv6CidrBlocks"></a>

```go
func ResetIpv6CidrBlocks()
```

##### `ResetPrefixListIds` <a name="ResetPrefixListIds" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.resetPrefixListIds"></a>

```go
func ResetPrefixListIds()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.resetProtocol"></a>

```go
func ResetProtocol()
```

##### `ResetSecurityGroups` <a name="ResetSecurityGroups" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.resetSecurityGroups"></a>

```go
func ResetSecurityGroups()
```

##### `ResetSelfAttribute` <a name="ResetSelfAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.resetSelfAttribute"></a>

```go
func ResetSelfAttribute()
```

##### `ResetToPort` <a name="ResetToPort" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.resetToPort"></a>

```go
func ResetToPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.cidrBlocksInput">CidrBlocksInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.fromPortInput">FromPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.ipv6CidrBlocksInput">Ipv6CidrBlocksInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.prefixListIdsInput">PrefixListIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.securityGroupsInput">SecurityGroupsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.selfAttributeInput">SelfAttributeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.toPortInput">ToPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.cidrBlocks">CidrBlocks</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.fromPort">FromPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.ipv6CidrBlocks">Ipv6CidrBlocks</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.prefixListIds">PrefixListIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.securityGroups">SecurityGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.selfAttribute">SelfAttribute</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.toPort">ToPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CidrBlocksInput`<sup>Optional</sup> <a name="CidrBlocksInput" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.cidrBlocksInput"></a>

```go
func CidrBlocksInput() *[]*string
```

- *Type:* *[]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FromPortInput`<sup>Optional</sup> <a name="FromPortInput" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.fromPortInput"></a>

```go
func FromPortInput() *f64
```

- *Type:* *f64

---

##### `Ipv6CidrBlocksInput`<sup>Optional</sup> <a name="Ipv6CidrBlocksInput" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.ipv6CidrBlocksInput"></a>

```go
func Ipv6CidrBlocksInput() *[]*string
```

- *Type:* *[]*string

---

##### `PrefixListIdsInput`<sup>Optional</sup> <a name="PrefixListIdsInput" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.prefixListIdsInput"></a>

```go
func PrefixListIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `SecurityGroupsInput`<sup>Optional</sup> <a name="SecurityGroupsInput" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.securityGroupsInput"></a>

```go
func SecurityGroupsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SelfAttributeInput`<sup>Optional</sup> <a name="SelfAttributeInput" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.selfAttributeInput"></a>

```go
func SelfAttributeInput() interface{}
```

- *Type:* interface{}

---

##### `ToPortInput`<sup>Optional</sup> <a name="ToPortInput" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.toPortInput"></a>

```go
func ToPortInput() *f64
```

- *Type:* *f64

---

##### `CidrBlocks`<sup>Required</sup> <a name="CidrBlocks" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.cidrBlocks"></a>

```go
func CidrBlocks() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.fromPort"></a>

```go
func FromPort() *f64
```

- *Type:* *f64

---

##### `Ipv6CidrBlocks`<sup>Required</sup> <a name="Ipv6CidrBlocks" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.ipv6CidrBlocks"></a>

```go
func Ipv6CidrBlocks() *[]*string
```

- *Type:* *[]*string

---

##### `PrefixListIds`<sup>Required</sup> <a name="PrefixListIds" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.prefixListIds"></a>

```go
func PrefixListIds() *[]*string
```

- *Type:* *[]*string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.securityGroups"></a>

```go
func SecurityGroups() *[]*string
```

- *Type:* *[]*string

---

##### `SelfAttribute`<sup>Required</sup> <a name="SelfAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.selfAttribute"></a>

```go
func SelfAttribute() interface{}
```

- *Type:* interface{}

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.toPort"></a>

```go
func ToPort() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecurityGroupTimeoutsOutputReference <a name="SecurityGroupTimeoutsOutputReference" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/securitygroup"

securitygroup.NewSecurityGroupTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SecurityGroupTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



