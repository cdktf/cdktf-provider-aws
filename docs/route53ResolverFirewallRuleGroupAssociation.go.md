# `route53ResolverFirewallRuleGroupAssociation` Submodule <a name="`route53ResolverFirewallRuleGroupAssociation` Submodule" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53ResolverFirewallRuleGroupAssociation <a name="Route53ResolverFirewallRuleGroupAssociation" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association aws_route53_resolver_firewall_rule_group_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/route53resolverfirewallrulegroupassociation"

route53resolverfirewallrulegroupassociation.NewRoute53ResolverFirewallRuleGroupAssociation(scope Construct, id *string, config Route53ResolverFirewallRuleGroupAssociationConfig) Route53ResolverFirewallRuleGroupAssociation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig">Route53ResolverFirewallRuleGroupAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig">Route53ResolverFirewallRuleGroupAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.resetMutationProtection">ResetMutationProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.resetId"></a>

```go
func ResetId()
```

##### `ResetMutationProtection` <a name="ResetMutationProtection" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.resetMutationProtection"></a>

```go
func ResetMutationProtection()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.resetTagsAll"></a>

```go
func ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/route53resolverfirewallrulegroupassociation"

route53resolverfirewallrulegroupassociation.Route53ResolverFirewallRuleGroupAssociation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/route53resolverfirewallrulegroupassociation"

route53resolverfirewallrulegroupassociation.Route53ResolverFirewallRuleGroupAssociation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/route53resolverfirewallrulegroupassociation"

route53resolverfirewallrulegroupassociation.Route53ResolverFirewallRuleGroupAssociation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.firewallRuleGroupIdInput">FirewallRuleGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.mutationProtectionInput">MutationProtectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.vpcIdInput">VpcIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.firewallRuleGroupId">FirewallRuleGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.mutationProtection">MutationProtection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `FirewallRuleGroupIdInput`<sup>Optional</sup> <a name="FirewallRuleGroupIdInput" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.firewallRuleGroupIdInput"></a>

```go
func FirewallRuleGroupIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MutationProtectionInput`<sup>Optional</sup> <a name="MutationProtectionInput" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.mutationProtectionInput"></a>

```go
func MutationProtectionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.vpcIdInput"></a>

```go
func VpcIdInput() *string
```

- *Type:* *string

---

##### `FirewallRuleGroupId`<sup>Required</sup> <a name="FirewallRuleGroupId" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.firewallRuleGroupId"></a>

```go
func FirewallRuleGroupId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MutationProtection`<sup>Required</sup> <a name="MutationProtection" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.mutationProtection"></a>

```go
func MutationProtection() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Route53ResolverFirewallRuleGroupAssociationConfig <a name="Route53ResolverFirewallRuleGroupAssociationConfig" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/route53resolverfirewallrulegroupassociation"

&route53resolverfirewallrulegroupassociation.Route53ResolverFirewallRuleGroupAssociationConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	FirewallRuleGroupId: *string,
	Name: *string,
	Priority: *f64,
	VpcId: *string,
	Id: *string,
	MutationProtection: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.firewallRuleGroupId">FirewallRuleGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association#firewall_rule_group_id Route53ResolverFirewallRuleGroupAssociation#firewall_rule_group_id}. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association#name Route53ResolverFirewallRuleGroupAssociation#name}. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.priority">Priority</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association#priority Route53ResolverFirewallRuleGroupAssociation#priority}. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.vpcId">VpcId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association#vpc_id Route53ResolverFirewallRuleGroupAssociation#vpc_id}. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association#id Route53ResolverFirewallRuleGroupAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.mutationProtection">MutationProtection</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association#mutation_protection Route53ResolverFirewallRuleGroupAssociation#mutation_protection}. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association#tags Route53ResolverFirewallRuleGroupAssociation#tags}. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association#tags_all Route53ResolverFirewallRuleGroupAssociation#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FirewallRuleGroupId`<sup>Required</sup> <a name="FirewallRuleGroupId" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.firewallRuleGroupId"></a>

```go
FirewallRuleGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association#firewall_rule_group_id Route53ResolverFirewallRuleGroupAssociation#firewall_rule_group_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association#name Route53ResolverFirewallRuleGroupAssociation#name}.

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association#priority Route53ResolverFirewallRuleGroupAssociation#priority}.

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.vpcId"></a>

```go
VpcId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association#vpc_id Route53ResolverFirewallRuleGroupAssociation#vpc_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association#id Route53ResolverFirewallRuleGroupAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MutationProtection`<sup>Optional</sup> <a name="MutationProtection" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.mutationProtection"></a>

```go
MutationProtection *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association#mutation_protection Route53ResolverFirewallRuleGroupAssociation#mutation_protection}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association#tags Route53ResolverFirewallRuleGroupAssociation#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association#tags_all Route53ResolverFirewallRuleGroupAssociation#tags_all}.

---



