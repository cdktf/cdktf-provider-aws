# `route53ResolverFirewallRule` Submodule <a name="`route53ResolverFirewallRule` Submodule" id="@cdktf/provider-aws.route53ResolverFirewallRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53ResolverFirewallRule <a name="Route53ResolverFirewallRule" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule aws_route53_resolver_firewall_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_resolver_firewall_rule.Route53ResolverFirewallRule;

Route53ResolverFirewallRule.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .action(java.lang.String)
    .firewallDomainListId(java.lang.String)
    .firewallRuleGroupId(java.lang.String)
    .name(java.lang.String)
    .priority(java.lang.Number)
//  .blockOverrideDnsType(java.lang.String)
//  .blockOverrideDomain(java.lang.String)
//  .blockOverrideTtl(java.lang.Number)
//  .blockResponse(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule#action Route53ResolverFirewallRule#action}. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.firewallDomainListId">firewallDomainListId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule#firewall_domain_list_id Route53ResolverFirewallRule#firewall_domain_list_id}. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.firewallRuleGroupId">firewallRuleGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule#firewall_rule_group_id Route53ResolverFirewallRule#firewall_rule_group_id}. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule#name Route53ResolverFirewallRule#name}. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule#priority Route53ResolverFirewallRule#priority}. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.blockOverrideDnsType">blockOverrideDnsType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule#block_override_dns_type Route53ResolverFirewallRule#block_override_dns_type}. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.blockOverrideDomain">blockOverrideDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule#block_override_domain Route53ResolverFirewallRule#block_override_domain}. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.blockOverrideTtl">blockOverrideTtl</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule#block_override_ttl Route53ResolverFirewallRule#block_override_ttl}. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.blockResponse">blockResponse</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule#block_response Route53ResolverFirewallRule#block_response}. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule#id Route53ResolverFirewallRule#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.action"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule#action Route53ResolverFirewallRule#action}.

---

##### `firewallDomainListId`<sup>Required</sup> <a name="firewallDomainListId" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.firewallDomainListId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule#firewall_domain_list_id Route53ResolverFirewallRule#firewall_domain_list_id}.

---

##### `firewallRuleGroupId`<sup>Required</sup> <a name="firewallRuleGroupId" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.firewallRuleGroupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule#firewall_rule_group_id Route53ResolverFirewallRule#firewall_rule_group_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule#name Route53ResolverFirewallRule#name}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.priority"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule#priority Route53ResolverFirewallRule#priority}.

---

##### `blockOverrideDnsType`<sup>Optional</sup> <a name="blockOverrideDnsType" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.blockOverrideDnsType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule#block_override_dns_type Route53ResolverFirewallRule#block_override_dns_type}.

---

##### `blockOverrideDomain`<sup>Optional</sup> <a name="blockOverrideDomain" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.blockOverrideDomain"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule#block_override_domain Route53ResolverFirewallRule#block_override_domain}.

---

##### `blockOverrideTtl`<sup>Optional</sup> <a name="blockOverrideTtl" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.blockOverrideTtl"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule#block_override_ttl Route53ResolverFirewallRule#block_override_ttl}.

---

##### `blockResponse`<sup>Optional</sup> <a name="blockResponse" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.blockResponse"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule#block_response Route53ResolverFirewallRule#block_response}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule#id Route53ResolverFirewallRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.resetBlockOverrideDnsType">resetBlockOverrideDnsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.resetBlockOverrideDomain">resetBlockOverrideDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.resetBlockOverrideTtl">resetBlockOverrideTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.resetBlockResponse">resetBlockResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetBlockOverrideDnsType` <a name="resetBlockOverrideDnsType" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.resetBlockOverrideDnsType"></a>

```java
public void resetBlockOverrideDnsType()
```

##### `resetBlockOverrideDomain` <a name="resetBlockOverrideDomain" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.resetBlockOverrideDomain"></a>

```java
public void resetBlockOverrideDomain()
```

##### `resetBlockOverrideTtl` <a name="resetBlockOverrideTtl" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.resetBlockOverrideTtl"></a>

```java
public void resetBlockOverrideTtl()
```

##### `resetBlockResponse` <a name="resetBlockResponse" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.resetBlockResponse"></a>

```java
public void resetBlockResponse()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_resolver_firewall_rule.Route53ResolverFirewallRule;

Route53ResolverFirewallRule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_resolver_firewall_rule.Route53ResolverFirewallRule;

Route53ResolverFirewallRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_resolver_firewall_rule.Route53ResolverFirewallRule;

Route53ResolverFirewallRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.blockOverrideDnsTypeInput">blockOverrideDnsTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.blockOverrideDomainInput">blockOverrideDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.blockOverrideTtlInput">blockOverrideTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.blockResponseInput">blockResponseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.firewallDomainListIdInput">firewallDomainListIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.firewallRuleGroupIdInput">firewallRuleGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.blockOverrideDnsType">blockOverrideDnsType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.blockOverrideDomain">blockOverrideDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.blockOverrideTtl">blockOverrideTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.blockResponse">blockResponse</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.firewallDomainListId">firewallDomainListId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.firewallRuleGroupId">firewallRuleGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `blockOverrideDnsTypeInput`<sup>Optional</sup> <a name="blockOverrideDnsTypeInput" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.blockOverrideDnsTypeInput"></a>

```java
public java.lang.String getBlockOverrideDnsTypeInput();
```

- *Type:* java.lang.String

---

##### `blockOverrideDomainInput`<sup>Optional</sup> <a name="blockOverrideDomainInput" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.blockOverrideDomainInput"></a>

```java
public java.lang.String getBlockOverrideDomainInput();
```

- *Type:* java.lang.String

---

##### `blockOverrideTtlInput`<sup>Optional</sup> <a name="blockOverrideTtlInput" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.blockOverrideTtlInput"></a>

```java
public java.lang.Number getBlockOverrideTtlInput();
```

- *Type:* java.lang.Number

---

##### `blockResponseInput`<sup>Optional</sup> <a name="blockResponseInput" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.blockResponseInput"></a>

```java
public java.lang.String getBlockResponseInput();
```

- *Type:* java.lang.String

---

##### `firewallDomainListIdInput`<sup>Optional</sup> <a name="firewallDomainListIdInput" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.firewallDomainListIdInput"></a>

```java
public java.lang.String getFirewallDomainListIdInput();
```

- *Type:* java.lang.String

---

##### `firewallRuleGroupIdInput`<sup>Optional</sup> <a name="firewallRuleGroupIdInput" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.firewallRuleGroupIdInput"></a>

```java
public java.lang.String getFirewallRuleGroupIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `blockOverrideDnsType`<sup>Required</sup> <a name="blockOverrideDnsType" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.blockOverrideDnsType"></a>

```java
public java.lang.String getBlockOverrideDnsType();
```

- *Type:* java.lang.String

---

##### `blockOverrideDomain`<sup>Required</sup> <a name="blockOverrideDomain" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.blockOverrideDomain"></a>

```java
public java.lang.String getBlockOverrideDomain();
```

- *Type:* java.lang.String

---

##### `blockOverrideTtl`<sup>Required</sup> <a name="blockOverrideTtl" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.blockOverrideTtl"></a>

```java
public java.lang.Number getBlockOverrideTtl();
```

- *Type:* java.lang.Number

---

##### `blockResponse`<sup>Required</sup> <a name="blockResponse" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.blockResponse"></a>

```java
public java.lang.String getBlockResponse();
```

- *Type:* java.lang.String

---

##### `firewallDomainListId`<sup>Required</sup> <a name="firewallDomainListId" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.firewallDomainListId"></a>

```java
public java.lang.String getFirewallDomainListId();
```

- *Type:* java.lang.String

---

##### `firewallRuleGroupId`<sup>Required</sup> <a name="firewallRuleGroupId" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.firewallRuleGroupId"></a>

```java
public java.lang.String getFirewallRuleGroupId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Route53ResolverFirewallRuleConfig <a name="Route53ResolverFirewallRuleConfig" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_resolver_firewall_rule.Route53ResolverFirewallRuleConfig;

Route53ResolverFirewallRuleConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .action(java.lang.String)
    .firewallDomainListId(java.lang.String)
    .firewallRuleGroupId(java.lang.String)
    .name(java.lang.String)
    .priority(java.lang.Number)
//  .blockOverrideDnsType(java.lang.String)
//  .blockOverrideDomain(java.lang.String)
//  .blockOverrideTtl(java.lang.Number)
//  .blockResponse(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule#action Route53ResolverFirewallRule#action}. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.firewallDomainListId">firewallDomainListId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule#firewall_domain_list_id Route53ResolverFirewallRule#firewall_domain_list_id}. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.firewallRuleGroupId">firewallRuleGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule#firewall_rule_group_id Route53ResolverFirewallRule#firewall_rule_group_id}. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule#name Route53ResolverFirewallRule#name}. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule#priority Route53ResolverFirewallRule#priority}. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.blockOverrideDnsType">blockOverrideDnsType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule#block_override_dns_type Route53ResolverFirewallRule#block_override_dns_type}. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.blockOverrideDomain">blockOverrideDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule#block_override_domain Route53ResolverFirewallRule#block_override_domain}. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.blockOverrideTtl">blockOverrideTtl</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule#block_override_ttl Route53ResolverFirewallRule#block_override_ttl}. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.blockResponse">blockResponse</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule#block_response Route53ResolverFirewallRule#block_response}. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule#id Route53ResolverFirewallRule#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule#action Route53ResolverFirewallRule#action}.

---

##### `firewallDomainListId`<sup>Required</sup> <a name="firewallDomainListId" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.firewallDomainListId"></a>

```java
public java.lang.String getFirewallDomainListId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule#firewall_domain_list_id Route53ResolverFirewallRule#firewall_domain_list_id}.

---

##### `firewallRuleGroupId`<sup>Required</sup> <a name="firewallRuleGroupId" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.firewallRuleGroupId"></a>

```java
public java.lang.String getFirewallRuleGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule#firewall_rule_group_id Route53ResolverFirewallRule#firewall_rule_group_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule#name Route53ResolverFirewallRule#name}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule#priority Route53ResolverFirewallRule#priority}.

---

##### `blockOverrideDnsType`<sup>Optional</sup> <a name="blockOverrideDnsType" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.blockOverrideDnsType"></a>

```java
public java.lang.String getBlockOverrideDnsType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule#block_override_dns_type Route53ResolverFirewallRule#block_override_dns_type}.

---

##### `blockOverrideDomain`<sup>Optional</sup> <a name="blockOverrideDomain" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.blockOverrideDomain"></a>

```java
public java.lang.String getBlockOverrideDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule#block_override_domain Route53ResolverFirewallRule#block_override_domain}.

---

##### `blockOverrideTtl`<sup>Optional</sup> <a name="blockOverrideTtl" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.blockOverrideTtl"></a>

```java
public java.lang.Number getBlockOverrideTtl();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule#block_override_ttl Route53ResolverFirewallRule#block_override_ttl}.

---

##### `blockResponse`<sup>Optional</sup> <a name="blockResponse" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.blockResponse"></a>

```java
public java.lang.String getBlockResponse();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule#block_response Route53ResolverFirewallRule#block_response}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.route53ResolverFirewallRule.Route53ResolverFirewallRuleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule#id Route53ResolverFirewallRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



