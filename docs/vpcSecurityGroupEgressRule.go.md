# `vpcSecurityGroupEgressRule` Submodule <a name="`vpcSecurityGroupEgressRule` Submodule" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcSecurityGroupEgressRule <a name="VpcSecurityGroupEgressRule" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_egress_rule aws_vpc_security_group_egress_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpcsecuritygroupegressrule"

vpcsecuritygroupegressrule.NewVpcSecurityGroupEgressRule(scope Construct, id *string, config VpcSecurityGroupEgressRuleConfig) VpcSecurityGroupEgressRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig">VpcSecurityGroupEgressRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig">VpcSecurityGroupEgressRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetCidrIpv4">ResetCidrIpv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetCidrIpv6">ResetCidrIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetFromPort">ResetFromPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetPrefixListId">ResetPrefixListId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetReferencedSecurityGroupId">ResetReferencedSecurityGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetSecurityGroupId">ResetSecurityGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetToPort">ResetToPort</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetCidrIpv4` <a name="ResetCidrIpv4" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetCidrIpv4"></a>

```go
func ResetCidrIpv4()
```

##### `ResetCidrIpv6` <a name="ResetCidrIpv6" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetCidrIpv6"></a>

```go
func ResetCidrIpv6()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetFromPort` <a name="ResetFromPort" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetFromPort"></a>

```go
func ResetFromPort()
```

##### `ResetPrefixListId` <a name="ResetPrefixListId" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetPrefixListId"></a>

```go
func ResetPrefixListId()
```

##### `ResetReferencedSecurityGroupId` <a name="ResetReferencedSecurityGroupId" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetReferencedSecurityGroupId"></a>

```go
func ResetReferencedSecurityGroupId()
```

##### `ResetSecurityGroupId` <a name="ResetSecurityGroupId" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetSecurityGroupId"></a>

```go
func ResetSecurityGroupId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetTags"></a>

```go
func ResetTags()
```

##### `ResetToPort` <a name="ResetToPort" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.resetToPort"></a>

```go
func ResetToPort()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpcsecuritygroupegressrule"

vpcsecuritygroupegressrule.VpcSecurityGroupEgressRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpcsecuritygroupegressrule"

vpcsecuritygroupegressrule.VpcSecurityGroupEgressRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpcsecuritygroupegressrule"

vpcsecuritygroupegressrule.VpcSecurityGroupEgressRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.securityGroupRuleId">SecurityGroupRuleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.tagsAll">TagsAll</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.cidrIpv4Input">CidrIpv4Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.cidrIpv6Input">CidrIpv6Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.fromPortInput">FromPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.ipProtocolInput">IpProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.prefixListIdInput">PrefixListIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.referencedSecurityGroupIdInput">ReferencedSecurityGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.securityGroupIdInput">SecurityGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.toPortInput">ToPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.cidrIpv4">CidrIpv4</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.cidrIpv6">CidrIpv6</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.fromPort">FromPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.ipProtocol">IpProtocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.prefixListId">PrefixListId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.referencedSecurityGroupId">ReferencedSecurityGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.securityGroupId">SecurityGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.toPort">ToPort</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SecurityGroupRuleId`<sup>Required</sup> <a name="SecurityGroupRuleId" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.securityGroupRuleId"></a>

```go
func SecurityGroupRuleId() *string
```

- *Type:* *string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.tagsAll"></a>

```go
func TagsAll() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `CidrIpv4Input`<sup>Optional</sup> <a name="CidrIpv4Input" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.cidrIpv4Input"></a>

```go
func CidrIpv4Input() *string
```

- *Type:* *string

---

##### `CidrIpv6Input`<sup>Optional</sup> <a name="CidrIpv6Input" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.cidrIpv6Input"></a>

```go
func CidrIpv6Input() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FromPortInput`<sup>Optional</sup> <a name="FromPortInput" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.fromPortInput"></a>

```go
func FromPortInput() *f64
```

- *Type:* *f64

---

##### `IpProtocolInput`<sup>Optional</sup> <a name="IpProtocolInput" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.ipProtocolInput"></a>

```go
func IpProtocolInput() *string
```

- *Type:* *string

---

##### `PrefixListIdInput`<sup>Optional</sup> <a name="PrefixListIdInput" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.prefixListIdInput"></a>

```go
func PrefixListIdInput() *string
```

- *Type:* *string

---

##### `ReferencedSecurityGroupIdInput`<sup>Optional</sup> <a name="ReferencedSecurityGroupIdInput" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.referencedSecurityGroupIdInput"></a>

```go
func ReferencedSecurityGroupIdInput() *string
```

- *Type:* *string

---

##### `SecurityGroupIdInput`<sup>Optional</sup> <a name="SecurityGroupIdInput" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.securityGroupIdInput"></a>

```go
func SecurityGroupIdInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ToPortInput`<sup>Optional</sup> <a name="ToPortInput" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.toPortInput"></a>

```go
func ToPortInput() *f64
```

- *Type:* *f64

---

##### `CidrIpv4`<sup>Required</sup> <a name="CidrIpv4" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.cidrIpv4"></a>

```go
func CidrIpv4() *string
```

- *Type:* *string

---

##### `CidrIpv6`<sup>Required</sup> <a name="CidrIpv6" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.cidrIpv6"></a>

```go
func CidrIpv6() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.fromPort"></a>

```go
func FromPort() *f64
```

- *Type:* *f64

---

##### `IpProtocol`<sup>Required</sup> <a name="IpProtocol" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.ipProtocol"></a>

```go
func IpProtocol() *string
```

- *Type:* *string

---

##### `PrefixListId`<sup>Required</sup> <a name="PrefixListId" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.prefixListId"></a>

```go
func PrefixListId() *string
```

- *Type:* *string

---

##### `ReferencedSecurityGroupId`<sup>Required</sup> <a name="ReferencedSecurityGroupId" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.referencedSecurityGroupId"></a>

```go
func ReferencedSecurityGroupId() *string
```

- *Type:* *string

---

##### `SecurityGroupId`<sup>Required</sup> <a name="SecurityGroupId" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.securityGroupId"></a>

```go
func SecurityGroupId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.toPort"></a>

```go
func ToPort() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VpcSecurityGroupEgressRuleConfig <a name="VpcSecurityGroupEgressRuleConfig" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpcsecuritygroupegressrule"

&vpcsecuritygroupegressrule.VpcSecurityGroupEgressRuleConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	IpProtocol: *string,
	CidrIpv4: *string,
	CidrIpv6: *string,
	Description: *string,
	FromPort: *f64,
	PrefixListId: *string,
	ReferencedSecurityGroupId: *string,
	SecurityGroupId: *string,
	Tags: *map[string]*string,
	ToPort: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.ipProtocol">IpProtocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_egress_rule#ip_protocol VpcSecurityGroupEgressRule#ip_protocol}. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.cidrIpv4">CidrIpv4</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_egress_rule#cidr_ipv4 VpcSecurityGroupEgressRule#cidr_ipv4}. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.cidrIpv6">CidrIpv6</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_egress_rule#cidr_ipv6 VpcSecurityGroupEgressRule#cidr_ipv6}. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_egress_rule#description VpcSecurityGroupEgressRule#description}. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.fromPort">FromPort</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_egress_rule#from_port VpcSecurityGroupEgressRule#from_port}. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.prefixListId">PrefixListId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_egress_rule#prefix_list_id VpcSecurityGroupEgressRule#prefix_list_id}. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.referencedSecurityGroupId">ReferencedSecurityGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_egress_rule#referenced_security_group_id VpcSecurityGroupEgressRule#referenced_security_group_id}. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.securityGroupId">SecurityGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_egress_rule#security_group_id VpcSecurityGroupEgressRule#security_group_id}. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_egress_rule#tags VpcSecurityGroupEgressRule#tags}. |
| <code><a href="#@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.toPort">ToPort</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_egress_rule#to_port VpcSecurityGroupEgressRule#to_port}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IpProtocol`<sup>Required</sup> <a name="IpProtocol" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.ipProtocol"></a>

```go
IpProtocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_egress_rule#ip_protocol VpcSecurityGroupEgressRule#ip_protocol}.

---

##### `CidrIpv4`<sup>Optional</sup> <a name="CidrIpv4" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.cidrIpv4"></a>

```go
CidrIpv4 *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_egress_rule#cidr_ipv4 VpcSecurityGroupEgressRule#cidr_ipv4}.

---

##### `CidrIpv6`<sup>Optional</sup> <a name="CidrIpv6" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.cidrIpv6"></a>

```go
CidrIpv6 *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_egress_rule#cidr_ipv6 VpcSecurityGroupEgressRule#cidr_ipv6}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_egress_rule#description VpcSecurityGroupEgressRule#description}.

---

##### `FromPort`<sup>Optional</sup> <a name="FromPort" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.fromPort"></a>

```go
FromPort *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_egress_rule#from_port VpcSecurityGroupEgressRule#from_port}.

---

##### `PrefixListId`<sup>Optional</sup> <a name="PrefixListId" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.prefixListId"></a>

```go
PrefixListId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_egress_rule#prefix_list_id VpcSecurityGroupEgressRule#prefix_list_id}.

---

##### `ReferencedSecurityGroupId`<sup>Optional</sup> <a name="ReferencedSecurityGroupId" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.referencedSecurityGroupId"></a>

```go
ReferencedSecurityGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_egress_rule#referenced_security_group_id VpcSecurityGroupEgressRule#referenced_security_group_id}.

---

##### `SecurityGroupId`<sup>Optional</sup> <a name="SecurityGroupId" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.securityGroupId"></a>

```go
SecurityGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_egress_rule#security_group_id VpcSecurityGroupEgressRule#security_group_id}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_egress_rule#tags VpcSecurityGroupEgressRule#tags}.

---

##### `ToPort`<sup>Optional</sup> <a name="ToPort" id="@cdktf/provider-aws.vpcSecurityGroupEgressRule.VpcSecurityGroupEgressRuleConfig.property.toPort"></a>

```go
ToPort *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_security_group_egress_rule#to_port VpcSecurityGroupEgressRule#to_port}.

---



