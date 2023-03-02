# `route53ResolverFirewallRuleGroupAssociation` Submodule <a name="`route53ResolverFirewallRuleGroupAssociation` Submodule" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53ResolverFirewallRuleGroupAssociation <a name="Route53ResolverFirewallRuleGroupAssociation" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association aws_route53_resolver_firewall_rule_group_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_resolver_firewall_rule_group_association.Route53ResolverFirewallRuleGroupAssociation;

Route53ResolverFirewallRuleGroupAssociation.Builder.create(Construct scope, java.lang.String id)
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
    .firewallRuleGroupId(java.lang.String)
    .name(java.lang.String)
    .priority(java.lang.Number)
    .vpcId(java.lang.String)
//  .id(java.lang.String)
//  .mutationProtection(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer.parameter.firewallRuleGroupId">firewallRuleGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association#firewall_rule_group_id Route53ResolverFirewallRuleGroupAssociation#firewall_rule_group_id}. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association#name Route53ResolverFirewallRuleGroupAssociation#name}. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer.parameter.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association#priority Route53ResolverFirewallRuleGroupAssociation#priority}. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer.parameter.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association#vpc_id Route53ResolverFirewallRuleGroupAssociation#vpc_id}. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association#id Route53ResolverFirewallRuleGroupAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer.parameter.mutationProtection">mutationProtection</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association#mutation_protection Route53ResolverFirewallRuleGroupAssociation#mutation_protection}. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association#tags Route53ResolverFirewallRuleGroupAssociation#tags}. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association#tags_all Route53ResolverFirewallRuleGroupAssociation#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `firewallRuleGroupId`<sup>Required</sup> <a name="firewallRuleGroupId" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer.parameter.firewallRuleGroupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association#firewall_rule_group_id Route53ResolverFirewallRuleGroupAssociation#firewall_rule_group_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association#name Route53ResolverFirewallRuleGroupAssociation#name}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer.parameter.priority"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association#priority Route53ResolverFirewallRuleGroupAssociation#priority}.

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer.parameter.vpcId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association#vpc_id Route53ResolverFirewallRuleGroupAssociation#vpc_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association#id Route53ResolverFirewallRuleGroupAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mutationProtection`<sup>Optional</sup> <a name="mutationProtection" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer.parameter.mutationProtection"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association#mutation_protection Route53ResolverFirewallRuleGroupAssociation#mutation_protection}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association#tags Route53ResolverFirewallRuleGroupAssociation#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association#tags_all Route53ResolverFirewallRuleGroupAssociation#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.resetMutationProtection">resetMutationProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.resetId"></a>

```java
public void resetId()
```

##### `resetMutationProtection` <a name="resetMutationProtection" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.resetMutationProtection"></a>

```java
public void resetMutationProtection()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.resetTagsAll"></a>

```java
public void resetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_resolver_firewall_rule_group_association.Route53ResolverFirewallRuleGroupAssociation;

Route53ResolverFirewallRuleGroupAssociation.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_resolver_firewall_rule_group_association.Route53ResolverFirewallRuleGroupAssociation;

Route53ResolverFirewallRuleGroupAssociation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_resolver_firewall_rule_group_association.Route53ResolverFirewallRuleGroupAssociation;

Route53ResolverFirewallRuleGroupAssociation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.firewallRuleGroupIdInput">firewallRuleGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.mutationProtectionInput">mutationProtectionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.vpcIdInput">vpcIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.firewallRuleGroupId">firewallRuleGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.mutationProtection">mutationProtection</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `firewallRuleGroupIdInput`<sup>Optional</sup> <a name="firewallRuleGroupIdInput" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.firewallRuleGroupIdInput"></a>

```java
public java.lang.String getFirewallRuleGroupIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `mutationProtectionInput`<sup>Optional</sup> <a name="mutationProtectionInput" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.mutationProtectionInput"></a>

```java
public java.lang.String getMutationProtectionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.vpcIdInput"></a>

```java
public java.lang.String getVpcIdInput();
```

- *Type:* java.lang.String

---

##### `firewallRuleGroupId`<sup>Required</sup> <a name="firewallRuleGroupId" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.firewallRuleGroupId"></a>

```java
public java.lang.String getFirewallRuleGroupId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `mutationProtection`<sup>Required</sup> <a name="mutationProtection" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.mutationProtection"></a>

```java
public java.lang.String getMutationProtection();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Route53ResolverFirewallRuleGroupAssociationConfig <a name="Route53ResolverFirewallRuleGroupAssociationConfig" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_resolver_firewall_rule_group_association.Route53ResolverFirewallRuleGroupAssociationConfig;

Route53ResolverFirewallRuleGroupAssociationConfig.builder()
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
    .firewallRuleGroupId(java.lang.String)
    .name(java.lang.String)
    .priority(java.lang.Number)
    .vpcId(java.lang.String)
//  .id(java.lang.String)
//  .mutationProtection(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.firewallRuleGroupId">firewallRuleGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association#firewall_rule_group_id Route53ResolverFirewallRuleGroupAssociation#firewall_rule_group_id}. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association#name Route53ResolverFirewallRuleGroupAssociation#name}. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association#priority Route53ResolverFirewallRuleGroupAssociation#priority}. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association#vpc_id Route53ResolverFirewallRuleGroupAssociation#vpc_id}. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association#id Route53ResolverFirewallRuleGroupAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.mutationProtection">mutationProtection</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association#mutation_protection Route53ResolverFirewallRuleGroupAssociation#mutation_protection}. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association#tags Route53ResolverFirewallRuleGroupAssociation#tags}. |
| <code><a href="#@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association#tags_all Route53ResolverFirewallRuleGroupAssociation#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `firewallRuleGroupId`<sup>Required</sup> <a name="firewallRuleGroupId" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.firewallRuleGroupId"></a>

```java
public java.lang.String getFirewallRuleGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association#firewall_rule_group_id Route53ResolverFirewallRuleGroupAssociation#firewall_rule_group_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association#name Route53ResolverFirewallRuleGroupAssociation#name}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association#priority Route53ResolverFirewallRuleGroupAssociation#priority}.

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association#vpc_id Route53ResolverFirewallRuleGroupAssociation#vpc_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association#id Route53ResolverFirewallRuleGroupAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mutationProtection`<sup>Optional</sup> <a name="mutationProtection" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.mutationProtection"></a>

```java
public java.lang.String getMutationProtection();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association#mutation_protection Route53ResolverFirewallRuleGroupAssociation#mutation_protection}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association#tags Route53ResolverFirewallRuleGroupAssociation#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.route53ResolverFirewallRuleGroupAssociation.Route53ResolverFirewallRuleGroupAssociationConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_resolver_firewall_rule_group_association#tags_all Route53ResolverFirewallRuleGroupAssociation#tags_all}.

---



