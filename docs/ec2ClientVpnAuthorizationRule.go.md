# `ec2ClientVpnAuthorizationRule` Submodule <a name="`ec2ClientVpnAuthorizationRule` Submodule" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2ClientVpnAuthorizationRule <a name="Ec2ClientVpnAuthorizationRule" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_authorization_rule aws_ec2_client_vpn_authorization_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2clientvpnauthorizationrule"

ec2clientvpnauthorizationrule.NewEc2ClientVpnAuthorizationRule(scope Construct, id *string, config Ec2ClientVpnAuthorizationRuleConfig) Ec2ClientVpnAuthorizationRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig">Ec2ClientVpnAuthorizationRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig">Ec2ClientVpnAuthorizationRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.resetAccessGroupId">ResetAccessGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.resetAuthorizeAllGroups">ResetAuthorizeAllGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.putTimeouts"></a>

```go
func PutTimeouts(value Ec2ClientVpnAuthorizationRuleTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeouts">Ec2ClientVpnAuthorizationRuleTimeouts</a>

---

##### `ResetAccessGroupId` <a name="ResetAccessGroupId" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.resetAccessGroupId"></a>

```go
func ResetAccessGroupId()
```

##### `ResetAuthorizeAllGroups` <a name="ResetAuthorizeAllGroups" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.resetAuthorizeAllGroups"></a>

```go
func ResetAuthorizeAllGroups()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2clientvpnauthorizationrule"

ec2clientvpnauthorizationrule.Ec2ClientVpnAuthorizationRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2clientvpnauthorizationrule"

ec2clientvpnauthorizationrule.Ec2ClientVpnAuthorizationRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2clientvpnauthorizationrule"

ec2clientvpnauthorizationrule.Ec2ClientVpnAuthorizationRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference">Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.accessGroupIdInput">AccessGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.authorizeAllGroupsInput">AuthorizeAllGroupsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.clientVpnEndpointIdInput">ClientVpnEndpointIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.targetNetworkCidrInput">TargetNetworkCidrInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.accessGroupId">AccessGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.authorizeAllGroups">AuthorizeAllGroups</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.clientVpnEndpointId">ClientVpnEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.targetNetworkCidr">TargetNetworkCidr</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.timeouts"></a>

```go
func Timeouts() Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference">Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference</a>

---

##### `AccessGroupIdInput`<sup>Optional</sup> <a name="AccessGroupIdInput" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.accessGroupIdInput"></a>

```go
func AccessGroupIdInput() *string
```

- *Type:* *string

---

##### `AuthorizeAllGroupsInput`<sup>Optional</sup> <a name="AuthorizeAllGroupsInput" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.authorizeAllGroupsInput"></a>

```go
func AuthorizeAllGroupsInput() interface{}
```

- *Type:* interface{}

---

##### `ClientVpnEndpointIdInput`<sup>Optional</sup> <a name="ClientVpnEndpointIdInput" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.clientVpnEndpointIdInput"></a>

```go
func ClientVpnEndpointIdInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TargetNetworkCidrInput`<sup>Optional</sup> <a name="TargetNetworkCidrInput" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.targetNetworkCidrInput"></a>

```go
func TargetNetworkCidrInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AccessGroupId`<sup>Required</sup> <a name="AccessGroupId" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.accessGroupId"></a>

```go
func AccessGroupId() *string
```

- *Type:* *string

---

##### `AuthorizeAllGroups`<sup>Required</sup> <a name="AuthorizeAllGroups" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.authorizeAllGroups"></a>

```go
func AuthorizeAllGroups() interface{}
```

- *Type:* interface{}

---

##### `ClientVpnEndpointId`<sup>Required</sup> <a name="ClientVpnEndpointId" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.clientVpnEndpointId"></a>

```go
func ClientVpnEndpointId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `TargetNetworkCidr`<sup>Required</sup> <a name="TargetNetworkCidr" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.targetNetworkCidr"></a>

```go
func TargetNetworkCidr() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2ClientVpnAuthorizationRuleConfig <a name="Ec2ClientVpnAuthorizationRuleConfig" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2clientvpnauthorizationrule"

&ec2clientvpnauthorizationrule.Ec2ClientVpnAuthorizationRuleConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ClientVpnEndpointId: *string,
	TargetNetworkCidr: *string,
	AccessGroupId: *string,
	AuthorizeAllGroups: interface{},
	Description: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig.property.clientVpnEndpointId">ClientVpnEndpointId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_authorization_rule#client_vpn_endpoint_id Ec2ClientVpnAuthorizationRule#client_vpn_endpoint_id}. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig.property.targetNetworkCidr">TargetNetworkCidr</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_authorization_rule#target_network_cidr Ec2ClientVpnAuthorizationRule#target_network_cidr}. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig.property.accessGroupId">AccessGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_authorization_rule#access_group_id Ec2ClientVpnAuthorizationRule#access_group_id}. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig.property.authorizeAllGroups">AuthorizeAllGroups</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_authorization_rule#authorize_all_groups Ec2ClientVpnAuthorizationRule#authorize_all_groups}. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_authorization_rule#description Ec2ClientVpnAuthorizationRule#description}. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_authorization_rule#id Ec2ClientVpnAuthorizationRule#id}. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeouts">Ec2ClientVpnAuthorizationRuleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClientVpnEndpointId`<sup>Required</sup> <a name="ClientVpnEndpointId" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig.property.clientVpnEndpointId"></a>

```go
ClientVpnEndpointId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_authorization_rule#client_vpn_endpoint_id Ec2ClientVpnAuthorizationRule#client_vpn_endpoint_id}.

---

##### `TargetNetworkCidr`<sup>Required</sup> <a name="TargetNetworkCidr" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig.property.targetNetworkCidr"></a>

```go
TargetNetworkCidr *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_authorization_rule#target_network_cidr Ec2ClientVpnAuthorizationRule#target_network_cidr}.

---

##### `AccessGroupId`<sup>Optional</sup> <a name="AccessGroupId" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig.property.accessGroupId"></a>

```go
AccessGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_authorization_rule#access_group_id Ec2ClientVpnAuthorizationRule#access_group_id}.

---

##### `AuthorizeAllGroups`<sup>Optional</sup> <a name="AuthorizeAllGroups" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig.property.authorizeAllGroups"></a>

```go
AuthorizeAllGroups interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_authorization_rule#authorize_all_groups Ec2ClientVpnAuthorizationRule#authorize_all_groups}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_authorization_rule#description Ec2ClientVpnAuthorizationRule#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_authorization_rule#id Ec2ClientVpnAuthorizationRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleConfig.property.timeouts"></a>

```go
Timeouts Ec2ClientVpnAuthorizationRuleTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeouts">Ec2ClientVpnAuthorizationRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_authorization_rule#timeouts Ec2ClientVpnAuthorizationRule#timeouts}

---

### Ec2ClientVpnAuthorizationRuleTimeouts <a name="Ec2ClientVpnAuthorizationRuleTimeouts" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2clientvpnauthorizationrule"

&ec2clientvpnauthorizationrule.Ec2ClientVpnAuthorizationRuleTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_authorization_rule#create Ec2ClientVpnAuthorizationRule#create}. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_authorization_rule#delete Ec2ClientVpnAuthorizationRule#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_authorization_rule#create Ec2ClientVpnAuthorizationRule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_authorization_rule#delete Ec2ClientVpnAuthorizationRule#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference <a name="Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ec2clientvpnauthorizationrule"

ec2clientvpnauthorizationrule.NewEc2ClientVpnAuthorizationRuleTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ec2ClientVpnAuthorizationRule.Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



