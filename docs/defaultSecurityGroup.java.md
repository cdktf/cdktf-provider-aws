# `defaultSecurityGroup` Submodule <a name="`defaultSecurityGroup` Submodule" id="@cdktf/provider-aws.defaultSecurityGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DefaultSecurityGroup <a name="DefaultSecurityGroup" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/default_security_group aws_default_security_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.default_security_group.DefaultSecurityGroup;

DefaultSecurityGroup.Builder.create(Construct scope, java.lang.String id)
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
//  .egress(IResolvable)
//  .egress(java.util.List<DefaultSecurityGroupEgress>)
//  .id(java.lang.String)
//  .ingress(IResolvable)
//  .ingress(java.util.List<DefaultSecurityGroupIngress>)
//  .revokeRulesOnDelete(java.lang.Boolean)
//  .revokeRulesOnDelete(IResolvable)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .vpcId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.Initializer.parameter.egress">egress</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress">DefaultSecurityGroupEgress</a>></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#egress DefaultSecurityGroup#egress}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#id DefaultSecurityGroup#id}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.Initializer.parameter.ingress">ingress</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress">DefaultSecurityGroupIngress</a>></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#ingress DefaultSecurityGroup#ingress}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.Initializer.parameter.revokeRulesOnDelete">revokeRulesOnDelete</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#revoke_rules_on_delete DefaultSecurityGroup#revoke_rules_on_delete}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#tags DefaultSecurityGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#tags_all DefaultSecurityGroup#tags_all}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.Initializer.parameter.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#vpc_id DefaultSecurityGroup#vpc_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `egress`<sup>Optional</sup> <a name="egress" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.Initializer.parameter.egress"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress">DefaultSecurityGroupEgress</a>>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#egress DefaultSecurityGroup#egress}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#id DefaultSecurityGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingress`<sup>Optional</sup> <a name="ingress" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.Initializer.parameter.ingress"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress">DefaultSecurityGroupIngress</a>>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#ingress DefaultSecurityGroup#ingress}.

---

##### `revokeRulesOnDelete`<sup>Optional</sup> <a name="revokeRulesOnDelete" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.Initializer.parameter.revokeRulesOnDelete"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#revoke_rules_on_delete DefaultSecurityGroup#revoke_rules_on_delete}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#tags DefaultSecurityGroup#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#tags_all DefaultSecurityGroup#tags_all}.

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.Initializer.parameter.vpcId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#vpc_id DefaultSecurityGroup#vpc_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.putEgress">putEgress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.putIngress">putIngress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.resetEgress">resetEgress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.resetIngress">resetIngress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.resetRevokeRulesOnDelete">resetRevokeRulesOnDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.resetVpcId">resetVpcId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putEgress` <a name="putEgress" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.putEgress"></a>

```java
public void putEgress(IResolvable OR java.util.List<DefaultSecurityGroupEgress> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.putEgress.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress">DefaultSecurityGroupEgress</a>>

---

##### `putIngress` <a name="putIngress" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.putIngress"></a>

```java
public void putIngress(IResolvable OR java.util.List<DefaultSecurityGroupIngress> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.putIngress.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress">DefaultSecurityGroupIngress</a>>

---

##### `resetEgress` <a name="resetEgress" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.resetEgress"></a>

```java
public void resetEgress()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.resetId"></a>

```java
public void resetId()
```

##### `resetIngress` <a name="resetIngress" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.resetIngress"></a>

```java
public void resetIngress()
```

##### `resetRevokeRulesOnDelete` <a name="resetRevokeRulesOnDelete" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.resetRevokeRulesOnDelete"></a>

```java
public void resetRevokeRulesOnDelete()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetVpcId` <a name="resetVpcId" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.resetVpcId"></a>

```java
public void resetVpcId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.default_security_group.DefaultSecurityGroup;

DefaultSecurityGroup.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.default_security_group.DefaultSecurityGroup;

DefaultSecurityGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.default_security_group.DefaultSecurityGroup;

DefaultSecurityGroup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.egress">egress</a></code> | <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList">DefaultSecurityGroupEgressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.ingress">ingress</a></code> | <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList">DefaultSecurityGroupIngressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.namePrefix">namePrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.ownerId">ownerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.egressInput">egressInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress">DefaultSecurityGroupEgress</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.ingressInput">ingressInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress">DefaultSecurityGroupIngress</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.revokeRulesOnDeleteInput">revokeRulesOnDeleteInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.vpcIdInput">vpcIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.revokeRulesOnDelete">revokeRulesOnDelete</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `egress`<sup>Required</sup> <a name="egress" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.egress"></a>

```java
public DefaultSecurityGroupEgressList getEgress();
```

- *Type:* <a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList">DefaultSecurityGroupEgressList</a>

---

##### `ingress`<sup>Required</sup> <a name="ingress" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.ingress"></a>

```java
public DefaultSecurityGroupIngressList getIngress();
```

- *Type:* <a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList">DefaultSecurityGroupIngressList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namePrefix`<sup>Required</sup> <a name="namePrefix" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.namePrefix"></a>

```java
public java.lang.String getNamePrefix();
```

- *Type:* java.lang.String

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.ownerId"></a>

```java
public java.lang.String getOwnerId();
```

- *Type:* java.lang.String

---

##### `egressInput`<sup>Optional</sup> <a name="egressInput" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.egressInput"></a>

```java
public java.lang.Object getEgressInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress">DefaultSecurityGroupEgress</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ingressInput`<sup>Optional</sup> <a name="ingressInput" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.ingressInput"></a>

```java
public java.lang.Object getIngressInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress">DefaultSecurityGroupIngress</a>>

---

##### `revokeRulesOnDeleteInput`<sup>Optional</sup> <a name="revokeRulesOnDeleteInput" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.revokeRulesOnDeleteInput"></a>

```java
public java.lang.Object getRevokeRulesOnDeleteInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.vpcIdInput"></a>

```java
public java.lang.String getVpcIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `revokeRulesOnDelete`<sup>Required</sup> <a name="revokeRulesOnDelete" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.revokeRulesOnDelete"></a>

```java
public java.lang.Object getRevokeRulesOnDelete();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DefaultSecurityGroupConfig <a name="DefaultSecurityGroupConfig" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.default_security_group.DefaultSecurityGroupConfig;

DefaultSecurityGroupConfig.builder()
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
//  .egress(IResolvable)
//  .egress(java.util.List<DefaultSecurityGroupEgress>)
//  .id(java.lang.String)
//  .ingress(IResolvable)
//  .ingress(java.util.List<DefaultSecurityGroupIngress>)
//  .revokeRulesOnDelete(java.lang.Boolean)
//  .revokeRulesOnDelete(IResolvable)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .vpcId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.egress">egress</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress">DefaultSecurityGroupEgress</a>></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#egress DefaultSecurityGroup#egress}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#id DefaultSecurityGroup#id}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.ingress">ingress</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress">DefaultSecurityGroupIngress</a>></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#ingress DefaultSecurityGroup#ingress}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.revokeRulesOnDelete">revokeRulesOnDelete</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#revoke_rules_on_delete DefaultSecurityGroup#revoke_rules_on_delete}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#tags DefaultSecurityGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#tags_all DefaultSecurityGroup#tags_all}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#vpc_id DefaultSecurityGroup#vpc_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `egress`<sup>Optional</sup> <a name="egress" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.egress"></a>

```java
public java.lang.Object getEgress();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress">DefaultSecurityGroupEgress</a>>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#egress DefaultSecurityGroup#egress}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#id DefaultSecurityGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingress`<sup>Optional</sup> <a name="ingress" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.ingress"></a>

```java
public java.lang.Object getIngress();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress">DefaultSecurityGroupIngress</a>>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#ingress DefaultSecurityGroup#ingress}.

---

##### `revokeRulesOnDelete`<sup>Optional</sup> <a name="revokeRulesOnDelete" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.revokeRulesOnDelete"></a>

```java
public java.lang.Object getRevokeRulesOnDelete();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#revoke_rules_on_delete DefaultSecurityGroup#revoke_rules_on_delete}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#tags DefaultSecurityGroup#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#tags_all DefaultSecurityGroup#tags_all}.

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#vpc_id DefaultSecurityGroup#vpc_id}.

---

### DefaultSecurityGroupEgress <a name="DefaultSecurityGroupEgress" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.default_security_group.DefaultSecurityGroupEgress;

DefaultSecurityGroupEgress.builder()
//  .cidrBlocks(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .fromPort(java.lang.Number)
//  .ipv6CidrBlocks(java.util.List<java.lang.String>)
//  .prefixListIds(java.util.List<java.lang.String>)
//  .protocol(java.lang.String)
//  .securityGroups(java.util.List<java.lang.String>)
//  .selfAttribute(java.lang.Boolean)
//  .selfAttribute(IResolvable)
//  .toPort(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress.property.cidrBlocks">cidrBlocks</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#cidr_blocks DefaultSecurityGroup#cidr_blocks}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#description DefaultSecurityGroup#description}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress.property.fromPort">fromPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#from_port DefaultSecurityGroup#from_port}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress.property.ipv6CidrBlocks">ipv6CidrBlocks</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#ipv6_cidr_blocks DefaultSecurityGroup#ipv6_cidr_blocks}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress.property.prefixListIds">prefixListIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#prefix_list_ids DefaultSecurityGroup#prefix_list_ids}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#protocol DefaultSecurityGroup#protocol}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress.property.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#security_groups DefaultSecurityGroup#security_groups}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress.property.selfAttribute">selfAttribute</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#self DefaultSecurityGroup#self}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress.property.toPort">toPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#to_port DefaultSecurityGroup#to_port}. |

---

##### `cidrBlocks`<sup>Optional</sup> <a name="cidrBlocks" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress.property.cidrBlocks"></a>

```java
public java.util.List<java.lang.String> getCidrBlocks();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#cidr_blocks DefaultSecurityGroup#cidr_blocks}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#description DefaultSecurityGroup#description}.

---

##### `fromPort`<sup>Optional</sup> <a name="fromPort" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress.property.fromPort"></a>

```java
public java.lang.Number getFromPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#from_port DefaultSecurityGroup#from_port}.

---

##### `ipv6CidrBlocks`<sup>Optional</sup> <a name="ipv6CidrBlocks" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress.property.ipv6CidrBlocks"></a>

```java
public java.util.List<java.lang.String> getIpv6CidrBlocks();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#ipv6_cidr_blocks DefaultSecurityGroup#ipv6_cidr_blocks}.

---

##### `prefixListIds`<sup>Optional</sup> <a name="prefixListIds" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress.property.prefixListIds"></a>

```java
public java.util.List<java.lang.String> getPrefixListIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#prefix_list_ids DefaultSecurityGroup#prefix_list_ids}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#protocol DefaultSecurityGroup#protocol}.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress.property.securityGroups"></a>

```java
public java.util.List<java.lang.String> getSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#security_groups DefaultSecurityGroup#security_groups}.

---

##### `selfAttribute`<sup>Optional</sup> <a name="selfAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress.property.selfAttribute"></a>

```java
public java.lang.Object getSelfAttribute();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#self DefaultSecurityGroup#self}.

---

##### `toPort`<sup>Optional</sup> <a name="toPort" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress.property.toPort"></a>

```java
public java.lang.Number getToPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#to_port DefaultSecurityGroup#to_port}.

---

### DefaultSecurityGroupIngress <a name="DefaultSecurityGroupIngress" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.default_security_group.DefaultSecurityGroupIngress;

DefaultSecurityGroupIngress.builder()
//  .cidrBlocks(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .fromPort(java.lang.Number)
//  .ipv6CidrBlocks(java.util.List<java.lang.String>)
//  .prefixListIds(java.util.List<java.lang.String>)
//  .protocol(java.lang.String)
//  .securityGroups(java.util.List<java.lang.String>)
//  .selfAttribute(java.lang.Boolean)
//  .selfAttribute(IResolvable)
//  .toPort(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress.property.cidrBlocks">cidrBlocks</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#cidr_blocks DefaultSecurityGroup#cidr_blocks}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#description DefaultSecurityGroup#description}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress.property.fromPort">fromPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#from_port DefaultSecurityGroup#from_port}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress.property.ipv6CidrBlocks">ipv6CidrBlocks</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#ipv6_cidr_blocks DefaultSecurityGroup#ipv6_cidr_blocks}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress.property.prefixListIds">prefixListIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#prefix_list_ids DefaultSecurityGroup#prefix_list_ids}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#protocol DefaultSecurityGroup#protocol}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress.property.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#security_groups DefaultSecurityGroup#security_groups}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress.property.selfAttribute">selfAttribute</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#self DefaultSecurityGroup#self}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress.property.toPort">toPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#to_port DefaultSecurityGroup#to_port}. |

---

##### `cidrBlocks`<sup>Optional</sup> <a name="cidrBlocks" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress.property.cidrBlocks"></a>

```java
public java.util.List<java.lang.String> getCidrBlocks();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#cidr_blocks DefaultSecurityGroup#cidr_blocks}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#description DefaultSecurityGroup#description}.

---

##### `fromPort`<sup>Optional</sup> <a name="fromPort" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress.property.fromPort"></a>

```java
public java.lang.Number getFromPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#from_port DefaultSecurityGroup#from_port}.

---

##### `ipv6CidrBlocks`<sup>Optional</sup> <a name="ipv6CidrBlocks" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress.property.ipv6CidrBlocks"></a>

```java
public java.util.List<java.lang.String> getIpv6CidrBlocks();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#ipv6_cidr_blocks DefaultSecurityGroup#ipv6_cidr_blocks}.

---

##### `prefixListIds`<sup>Optional</sup> <a name="prefixListIds" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress.property.prefixListIds"></a>

```java
public java.util.List<java.lang.String> getPrefixListIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#prefix_list_ids DefaultSecurityGroup#prefix_list_ids}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#protocol DefaultSecurityGroup#protocol}.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress.property.securityGroups"></a>

```java
public java.util.List<java.lang.String> getSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#security_groups DefaultSecurityGroup#security_groups}.

---

##### `selfAttribute`<sup>Optional</sup> <a name="selfAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress.property.selfAttribute"></a>

```java
public java.lang.Object getSelfAttribute();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#self DefaultSecurityGroup#self}.

---

##### `toPort`<sup>Optional</sup> <a name="toPort" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress.property.toPort"></a>

```java
public java.lang.Number getToPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#to_port DefaultSecurityGroup#to_port}.

---

## Classes <a name="Classes" id="Classes"></a>

### DefaultSecurityGroupEgressList <a name="DefaultSecurityGroupEgressList" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.default_security_group.DefaultSecurityGroupEgressList;

new DefaultSecurityGroupEgressList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.get"></a>

```java
public DefaultSecurityGroupEgressOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress">DefaultSecurityGroupEgress</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress">DefaultSecurityGroupEgress</a>>

---


### DefaultSecurityGroupEgressOutputReference <a name="DefaultSecurityGroupEgressOutputReference" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.default_security_group.DefaultSecurityGroupEgressOutputReference;

new DefaultSecurityGroupEgressOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.resetCidrBlocks">resetCidrBlocks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.resetFromPort">resetFromPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.resetIpv6CidrBlocks">resetIpv6CidrBlocks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.resetPrefixListIds">resetPrefixListIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.resetSecurityGroups">resetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.resetSelfAttribute">resetSelfAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.resetToPort">resetToPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCidrBlocks` <a name="resetCidrBlocks" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.resetCidrBlocks"></a>

```java
public void resetCidrBlocks()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetFromPort` <a name="resetFromPort" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.resetFromPort"></a>

```java
public void resetFromPort()
```

##### `resetIpv6CidrBlocks` <a name="resetIpv6CidrBlocks" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.resetIpv6CidrBlocks"></a>

```java
public void resetIpv6CidrBlocks()
```

##### `resetPrefixListIds` <a name="resetPrefixListIds" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.resetPrefixListIds"></a>

```java
public void resetPrefixListIds()
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.resetProtocol"></a>

```java
public void resetProtocol()
```

##### `resetSecurityGroups` <a name="resetSecurityGroups" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.resetSecurityGroups"></a>

```java
public void resetSecurityGroups()
```

##### `resetSelfAttribute` <a name="resetSelfAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.resetSelfAttribute"></a>

```java
public void resetSelfAttribute()
```

##### `resetToPort` <a name="resetToPort" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.resetToPort"></a>

```java
public void resetToPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.cidrBlocksInput">cidrBlocksInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.fromPortInput">fromPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.ipv6CidrBlocksInput">ipv6CidrBlocksInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.prefixListIdsInput">prefixListIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.securityGroupsInput">securityGroupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.selfAttributeInput">selfAttributeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.toPortInput">toPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.cidrBlocks">cidrBlocks</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.fromPort">fromPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.ipv6CidrBlocks">ipv6CidrBlocks</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.prefixListIds">prefixListIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.selfAttribute">selfAttribute</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.toPort">toPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress">DefaultSecurityGroupEgress</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cidrBlocksInput`<sup>Optional</sup> <a name="cidrBlocksInput" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.cidrBlocksInput"></a>

```java
public java.util.List<java.lang.String> getCidrBlocksInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `fromPortInput`<sup>Optional</sup> <a name="fromPortInput" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.fromPortInput"></a>

```java
public java.lang.Number getFromPortInput();
```

- *Type:* java.lang.Number

---

##### `ipv6CidrBlocksInput`<sup>Optional</sup> <a name="ipv6CidrBlocksInput" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.ipv6CidrBlocksInput"></a>

```java
public java.util.List<java.lang.String> getIpv6CidrBlocksInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `prefixListIdsInput`<sup>Optional</sup> <a name="prefixListIdsInput" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.prefixListIdsInput"></a>

```java
public java.util.List<java.lang.String> getPrefixListIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `securityGroupsInput`<sup>Optional</sup> <a name="securityGroupsInput" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.securityGroupsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `selfAttributeInput`<sup>Optional</sup> <a name="selfAttributeInput" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.selfAttributeInput"></a>

```java
public java.lang.Object getSelfAttributeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `toPortInput`<sup>Optional</sup> <a name="toPortInput" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.toPortInput"></a>

```java
public java.lang.Number getToPortInput();
```

- *Type:* java.lang.Number

---

##### `cidrBlocks`<sup>Required</sup> <a name="cidrBlocks" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.cidrBlocks"></a>

```java
public java.util.List<java.lang.String> getCidrBlocks();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `fromPort`<sup>Required</sup> <a name="fromPort" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.fromPort"></a>

```java
public java.lang.Number getFromPort();
```

- *Type:* java.lang.Number

---

##### `ipv6CidrBlocks`<sup>Required</sup> <a name="ipv6CidrBlocks" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.ipv6CidrBlocks"></a>

```java
public java.util.List<java.lang.String> getIpv6CidrBlocks();
```

- *Type:* java.util.List<java.lang.String>

---

##### `prefixListIds`<sup>Required</sup> <a name="prefixListIds" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.prefixListIds"></a>

```java
public java.util.List<java.lang.String> getPrefixListIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.securityGroups"></a>

```java
public java.util.List<java.lang.String> getSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `selfAttribute`<sup>Required</sup> <a name="selfAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.selfAttribute"></a>

```java
public java.lang.Object getSelfAttribute();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `toPort`<sup>Required</sup> <a name="toPort" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.toPort"></a>

```java
public java.lang.Number getToPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress">DefaultSecurityGroupEgress</a> OR com.hashicorp.cdktf.IResolvable

---


### DefaultSecurityGroupIngressList <a name="DefaultSecurityGroupIngressList" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.default_security_group.DefaultSecurityGroupIngressList;

new DefaultSecurityGroupIngressList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.get"></a>

```java
public DefaultSecurityGroupIngressOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress">DefaultSecurityGroupIngress</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress">DefaultSecurityGroupIngress</a>>

---


### DefaultSecurityGroupIngressOutputReference <a name="DefaultSecurityGroupIngressOutputReference" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.default_security_group.DefaultSecurityGroupIngressOutputReference;

new DefaultSecurityGroupIngressOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.resetCidrBlocks">resetCidrBlocks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.resetFromPort">resetFromPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.resetIpv6CidrBlocks">resetIpv6CidrBlocks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.resetPrefixListIds">resetPrefixListIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.resetSecurityGroups">resetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.resetSelfAttribute">resetSelfAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.resetToPort">resetToPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCidrBlocks` <a name="resetCidrBlocks" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.resetCidrBlocks"></a>

```java
public void resetCidrBlocks()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetFromPort` <a name="resetFromPort" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.resetFromPort"></a>

```java
public void resetFromPort()
```

##### `resetIpv6CidrBlocks` <a name="resetIpv6CidrBlocks" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.resetIpv6CidrBlocks"></a>

```java
public void resetIpv6CidrBlocks()
```

##### `resetPrefixListIds` <a name="resetPrefixListIds" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.resetPrefixListIds"></a>

```java
public void resetPrefixListIds()
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.resetProtocol"></a>

```java
public void resetProtocol()
```

##### `resetSecurityGroups` <a name="resetSecurityGroups" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.resetSecurityGroups"></a>

```java
public void resetSecurityGroups()
```

##### `resetSelfAttribute` <a name="resetSelfAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.resetSelfAttribute"></a>

```java
public void resetSelfAttribute()
```

##### `resetToPort` <a name="resetToPort" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.resetToPort"></a>

```java
public void resetToPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.cidrBlocksInput">cidrBlocksInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.fromPortInput">fromPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.ipv6CidrBlocksInput">ipv6CidrBlocksInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.prefixListIdsInput">prefixListIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.securityGroupsInput">securityGroupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.selfAttributeInput">selfAttributeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.toPortInput">toPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.cidrBlocks">cidrBlocks</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.fromPort">fromPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.ipv6CidrBlocks">ipv6CidrBlocks</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.prefixListIds">prefixListIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.selfAttribute">selfAttribute</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.toPort">toPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress">DefaultSecurityGroupIngress</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cidrBlocksInput`<sup>Optional</sup> <a name="cidrBlocksInput" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.cidrBlocksInput"></a>

```java
public java.util.List<java.lang.String> getCidrBlocksInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `fromPortInput`<sup>Optional</sup> <a name="fromPortInput" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.fromPortInput"></a>

```java
public java.lang.Number getFromPortInput();
```

- *Type:* java.lang.Number

---

##### `ipv6CidrBlocksInput`<sup>Optional</sup> <a name="ipv6CidrBlocksInput" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.ipv6CidrBlocksInput"></a>

```java
public java.util.List<java.lang.String> getIpv6CidrBlocksInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `prefixListIdsInput`<sup>Optional</sup> <a name="prefixListIdsInput" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.prefixListIdsInput"></a>

```java
public java.util.List<java.lang.String> getPrefixListIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `securityGroupsInput`<sup>Optional</sup> <a name="securityGroupsInput" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.securityGroupsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `selfAttributeInput`<sup>Optional</sup> <a name="selfAttributeInput" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.selfAttributeInput"></a>

```java
public java.lang.Object getSelfAttributeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `toPortInput`<sup>Optional</sup> <a name="toPortInput" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.toPortInput"></a>

```java
public java.lang.Number getToPortInput();
```

- *Type:* java.lang.Number

---

##### `cidrBlocks`<sup>Required</sup> <a name="cidrBlocks" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.cidrBlocks"></a>

```java
public java.util.List<java.lang.String> getCidrBlocks();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `fromPort`<sup>Required</sup> <a name="fromPort" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.fromPort"></a>

```java
public java.lang.Number getFromPort();
```

- *Type:* java.lang.Number

---

##### `ipv6CidrBlocks`<sup>Required</sup> <a name="ipv6CidrBlocks" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.ipv6CidrBlocks"></a>

```java
public java.util.List<java.lang.String> getIpv6CidrBlocks();
```

- *Type:* java.util.List<java.lang.String>

---

##### `prefixListIds`<sup>Required</sup> <a name="prefixListIds" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.prefixListIds"></a>

```java
public java.util.List<java.lang.String> getPrefixListIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.securityGroups"></a>

```java
public java.util.List<java.lang.String> getSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `selfAttribute`<sup>Required</sup> <a name="selfAttribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.selfAttribute"></a>

```java
public java.lang.Object getSelfAttribute();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `toPort`<sup>Required</sup> <a name="toPort" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.toPort"></a>

```java
public java.lang.Number getToPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress">DefaultSecurityGroupIngress</a> OR com.hashicorp.cdktf.IResolvable

---



