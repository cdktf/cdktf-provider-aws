# `defaultNetworkAcl` Submodule <a name="`defaultNetworkAcl` Submodule" id="@cdktf/provider-aws.defaultNetworkAcl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DefaultNetworkAcl <a name="DefaultNetworkAcl" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl aws_default_network_acl}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.default_network_acl.DefaultNetworkAcl;

DefaultNetworkAcl.Builder.create(Construct scope, java.lang.String id)
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
    .defaultNetworkAclId(java.lang.String)
//  .egress(IResolvable)
//  .egress(java.util.List<DefaultNetworkAclEgress>)
//  .id(java.lang.String)
//  .ingress(IResolvable)
//  .ingress(java.util.List<DefaultNetworkAclIngress>)
//  .subnetIds(java.util.List<java.lang.String>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer.parameter.defaultNetworkAclId">defaultNetworkAclId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#default_network_acl_id DefaultNetworkAcl#default_network_acl_id}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer.parameter.egress">egress</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress">DefaultNetworkAclEgress</a>></code> | egress block. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#id DefaultNetworkAcl#id}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer.parameter.ingress">ingress</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress">DefaultNetworkAclIngress</a>></code> | ingress block. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer.parameter.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#subnet_ids DefaultNetworkAcl#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#tags DefaultNetworkAcl#tags}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#tags_all DefaultNetworkAcl#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `defaultNetworkAclId`<sup>Required</sup> <a name="defaultNetworkAclId" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer.parameter.defaultNetworkAclId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#default_network_acl_id DefaultNetworkAcl#default_network_acl_id}.

---

##### `egress`<sup>Optional</sup> <a name="egress" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer.parameter.egress"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress">DefaultNetworkAclEgress</a>>

egress block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#egress DefaultNetworkAcl#egress}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#id DefaultNetworkAcl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingress`<sup>Optional</sup> <a name="ingress" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer.parameter.ingress"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress">DefaultNetworkAclIngress</a>>

ingress block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#ingress DefaultNetworkAcl#ingress}

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer.parameter.subnetIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#subnet_ids DefaultNetworkAcl#subnet_ids}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#tags DefaultNetworkAcl#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#tags_all DefaultNetworkAcl#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.putEgress">putEgress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.putIngress">putIngress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.resetEgress">resetEgress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.resetIngress">resetIngress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.resetSubnetIds">resetSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putEgress` <a name="putEgress" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.putEgress"></a>

```java
public void putEgress(IResolvable OR java.util.List<DefaultNetworkAclEgress> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.putEgress.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress">DefaultNetworkAclEgress</a>>

---

##### `putIngress` <a name="putIngress" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.putIngress"></a>

```java
public void putIngress(IResolvable OR java.util.List<DefaultNetworkAclIngress> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.putIngress.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress">DefaultNetworkAclIngress</a>>

---

##### `resetEgress` <a name="resetEgress" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.resetEgress"></a>

```java
public void resetEgress()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.resetId"></a>

```java
public void resetId()
```

##### `resetIngress` <a name="resetIngress" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.resetIngress"></a>

```java
public void resetIngress()
```

##### `resetSubnetIds` <a name="resetSubnetIds" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.resetSubnetIds"></a>

```java
public void resetSubnetIds()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.resetTagsAll"></a>

```java
public void resetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.default_network_acl.DefaultNetworkAcl;

DefaultNetworkAcl.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.default_network_acl.DefaultNetworkAcl;

DefaultNetworkAcl.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.default_network_acl.DefaultNetworkAcl;

DefaultNetworkAcl.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.egress">egress</a></code> | <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList">DefaultNetworkAclEgressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.ingress">ingress</a></code> | <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList">DefaultNetworkAclIngressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.ownerId">ownerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.defaultNetworkAclIdInput">defaultNetworkAclIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.egressInput">egressInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress">DefaultNetworkAclEgress</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.ingressInput">ingressInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress">DefaultNetworkAclIngress</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.subnetIdsInput">subnetIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.defaultNetworkAclId">defaultNetworkAclId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `egress`<sup>Required</sup> <a name="egress" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.egress"></a>

```java
public DefaultNetworkAclEgressList getEgress();
```

- *Type:* <a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList">DefaultNetworkAclEgressList</a>

---

##### `ingress`<sup>Required</sup> <a name="ingress" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.ingress"></a>

```java
public DefaultNetworkAclIngressList getIngress();
```

- *Type:* <a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList">DefaultNetworkAclIngressList</a>

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.ownerId"></a>

```java
public java.lang.String getOwnerId();
```

- *Type:* java.lang.String

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

##### `defaultNetworkAclIdInput`<sup>Optional</sup> <a name="defaultNetworkAclIdInput" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.defaultNetworkAclIdInput"></a>

```java
public java.lang.String getDefaultNetworkAclIdInput();
```

- *Type:* java.lang.String

---

##### `egressInput`<sup>Optional</sup> <a name="egressInput" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.egressInput"></a>

```java
public java.lang.Object getEgressInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress">DefaultNetworkAclEgress</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ingressInput`<sup>Optional</sup> <a name="ingressInput" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.ingressInput"></a>

```java
public java.lang.Object getIngressInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress">DefaultNetworkAclIngress</a>>

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.subnetIdsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `defaultNetworkAclId`<sup>Required</sup> <a name="defaultNetworkAclId" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.defaultNetworkAclId"></a>

```java
public java.lang.String getDefaultNetworkAclId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DefaultNetworkAclConfig <a name="DefaultNetworkAclConfig" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.default_network_acl.DefaultNetworkAclConfig;

DefaultNetworkAclConfig.builder()
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
    .defaultNetworkAclId(java.lang.String)
//  .egress(IResolvable)
//  .egress(java.util.List<DefaultNetworkAclEgress>)
//  .id(java.lang.String)
//  .ingress(IResolvable)
//  .ingress(java.util.List<DefaultNetworkAclIngress>)
//  .subnetIds(java.util.List<java.lang.String>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.defaultNetworkAclId">defaultNetworkAclId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#default_network_acl_id DefaultNetworkAcl#default_network_acl_id}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.egress">egress</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress">DefaultNetworkAclEgress</a>></code> | egress block. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#id DefaultNetworkAcl#id}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.ingress">ingress</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress">DefaultNetworkAclIngress</a>></code> | ingress block. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#subnet_ids DefaultNetworkAcl#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#tags DefaultNetworkAcl#tags}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#tags_all DefaultNetworkAcl#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `defaultNetworkAclId`<sup>Required</sup> <a name="defaultNetworkAclId" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.defaultNetworkAclId"></a>

```java
public java.lang.String getDefaultNetworkAclId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#default_network_acl_id DefaultNetworkAcl#default_network_acl_id}.

---

##### `egress`<sup>Optional</sup> <a name="egress" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.egress"></a>

```java
public java.lang.Object getEgress();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress">DefaultNetworkAclEgress</a>>

egress block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#egress DefaultNetworkAcl#egress}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#id DefaultNetworkAcl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingress`<sup>Optional</sup> <a name="ingress" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.ingress"></a>

```java
public java.lang.Object getIngress();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress">DefaultNetworkAclIngress</a>>

ingress block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#ingress DefaultNetworkAcl#ingress}

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#subnet_ids DefaultNetworkAcl#subnet_ids}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#tags DefaultNetworkAcl#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#tags_all DefaultNetworkAcl#tags_all}.

---

### DefaultNetworkAclEgress <a name="DefaultNetworkAclEgress" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.default_network_acl.DefaultNetworkAclEgress;

DefaultNetworkAclEgress.builder()
    .action(java.lang.String)
    .fromPort(java.lang.Number)
    .protocol(java.lang.String)
    .ruleNo(java.lang.Number)
    .toPort(java.lang.Number)
//  .cidrBlock(java.lang.String)
//  .icmpCode(java.lang.Number)
//  .icmpType(java.lang.Number)
//  .ipv6CidrBlock(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#action DefaultNetworkAcl#action}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.fromPort">fromPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#from_port DefaultNetworkAcl#from_port}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#protocol DefaultNetworkAcl#protocol}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.ruleNo">ruleNo</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#rule_no DefaultNetworkAcl#rule_no}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.toPort">toPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#to_port DefaultNetworkAcl#to_port}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.cidrBlock">cidrBlock</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#cidr_block DefaultNetworkAcl#cidr_block}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.icmpCode">icmpCode</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#icmp_code DefaultNetworkAcl#icmp_code}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.icmpType">icmpType</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#icmp_type DefaultNetworkAcl#icmp_type}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.ipv6CidrBlock">ipv6CidrBlock</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#ipv6_cidr_block DefaultNetworkAcl#ipv6_cidr_block}. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#action DefaultNetworkAcl#action}.

---

##### `fromPort`<sup>Required</sup> <a name="fromPort" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.fromPort"></a>

```java
public java.lang.Number getFromPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#from_port DefaultNetworkAcl#from_port}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#protocol DefaultNetworkAcl#protocol}.

---

##### `ruleNo`<sup>Required</sup> <a name="ruleNo" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.ruleNo"></a>

```java
public java.lang.Number getRuleNo();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#rule_no DefaultNetworkAcl#rule_no}.

---

##### `toPort`<sup>Required</sup> <a name="toPort" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.toPort"></a>

```java
public java.lang.Number getToPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#to_port DefaultNetworkAcl#to_port}.

---

##### `cidrBlock`<sup>Optional</sup> <a name="cidrBlock" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.cidrBlock"></a>

```java
public java.lang.String getCidrBlock();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#cidr_block DefaultNetworkAcl#cidr_block}.

---

##### `icmpCode`<sup>Optional</sup> <a name="icmpCode" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.icmpCode"></a>

```java
public java.lang.Number getIcmpCode();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#icmp_code DefaultNetworkAcl#icmp_code}.

---

##### `icmpType`<sup>Optional</sup> <a name="icmpType" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.icmpType"></a>

```java
public java.lang.Number getIcmpType();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#icmp_type DefaultNetworkAcl#icmp_type}.

---

##### `ipv6CidrBlock`<sup>Optional</sup> <a name="ipv6CidrBlock" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.ipv6CidrBlock"></a>

```java
public java.lang.String getIpv6CidrBlock();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#ipv6_cidr_block DefaultNetworkAcl#ipv6_cidr_block}.

---

### DefaultNetworkAclIngress <a name="DefaultNetworkAclIngress" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.default_network_acl.DefaultNetworkAclIngress;

DefaultNetworkAclIngress.builder()
    .action(java.lang.String)
    .fromPort(java.lang.Number)
    .protocol(java.lang.String)
    .ruleNo(java.lang.Number)
    .toPort(java.lang.Number)
//  .cidrBlock(java.lang.String)
//  .icmpCode(java.lang.Number)
//  .icmpType(java.lang.Number)
//  .ipv6CidrBlock(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#action DefaultNetworkAcl#action}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.fromPort">fromPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#from_port DefaultNetworkAcl#from_port}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#protocol DefaultNetworkAcl#protocol}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.ruleNo">ruleNo</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#rule_no DefaultNetworkAcl#rule_no}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.toPort">toPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#to_port DefaultNetworkAcl#to_port}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.cidrBlock">cidrBlock</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#cidr_block DefaultNetworkAcl#cidr_block}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.icmpCode">icmpCode</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#icmp_code DefaultNetworkAcl#icmp_code}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.icmpType">icmpType</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#icmp_type DefaultNetworkAcl#icmp_type}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.ipv6CidrBlock">ipv6CidrBlock</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#ipv6_cidr_block DefaultNetworkAcl#ipv6_cidr_block}. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#action DefaultNetworkAcl#action}.

---

##### `fromPort`<sup>Required</sup> <a name="fromPort" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.fromPort"></a>

```java
public java.lang.Number getFromPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#from_port DefaultNetworkAcl#from_port}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#protocol DefaultNetworkAcl#protocol}.

---

##### `ruleNo`<sup>Required</sup> <a name="ruleNo" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.ruleNo"></a>

```java
public java.lang.Number getRuleNo();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#rule_no DefaultNetworkAcl#rule_no}.

---

##### `toPort`<sup>Required</sup> <a name="toPort" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.toPort"></a>

```java
public java.lang.Number getToPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#to_port DefaultNetworkAcl#to_port}.

---

##### `cidrBlock`<sup>Optional</sup> <a name="cidrBlock" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.cidrBlock"></a>

```java
public java.lang.String getCidrBlock();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#cidr_block DefaultNetworkAcl#cidr_block}.

---

##### `icmpCode`<sup>Optional</sup> <a name="icmpCode" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.icmpCode"></a>

```java
public java.lang.Number getIcmpCode();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#icmp_code DefaultNetworkAcl#icmp_code}.

---

##### `icmpType`<sup>Optional</sup> <a name="icmpType" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.icmpType"></a>

```java
public java.lang.Number getIcmpType();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#icmp_type DefaultNetworkAcl#icmp_type}.

---

##### `ipv6CidrBlock`<sup>Optional</sup> <a name="ipv6CidrBlock" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.ipv6CidrBlock"></a>

```java
public java.lang.String getIpv6CidrBlock();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#ipv6_cidr_block DefaultNetworkAcl#ipv6_cidr_block}.

---

## Classes <a name="Classes" id="Classes"></a>

### DefaultNetworkAclEgressList <a name="DefaultNetworkAclEgressList" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.default_network_acl.DefaultNetworkAclEgressList;

new DefaultNetworkAclEgressList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.get"></a>

```java
public DefaultNetworkAclEgressOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress">DefaultNetworkAclEgress</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress">DefaultNetworkAclEgress</a>>

---


### DefaultNetworkAclEgressOutputReference <a name="DefaultNetworkAclEgressOutputReference" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.default_network_acl.DefaultNetworkAclEgressOutputReference;

new DefaultNetworkAclEgressOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.resetCidrBlock">resetCidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.resetIcmpCode">resetIcmpCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.resetIcmpType">resetIcmpType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.resetIpv6CidrBlock">resetIpv6CidrBlock</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCidrBlock` <a name="resetCidrBlock" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.resetCidrBlock"></a>

```java
public void resetCidrBlock()
```

##### `resetIcmpCode` <a name="resetIcmpCode" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.resetIcmpCode"></a>

```java
public void resetIcmpCode()
```

##### `resetIcmpType` <a name="resetIcmpType" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.resetIcmpType"></a>

```java
public void resetIcmpType()
```

##### `resetIpv6CidrBlock` <a name="resetIpv6CidrBlock" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.resetIpv6CidrBlock"></a>

```java
public void resetIpv6CidrBlock()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.cidrBlockInput">cidrBlockInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.fromPortInput">fromPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.icmpCodeInput">icmpCodeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.icmpTypeInput">icmpTypeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.ipv6CidrBlockInput">ipv6CidrBlockInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.ruleNoInput">ruleNoInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.toPortInput">toPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.cidrBlock">cidrBlock</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.fromPort">fromPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.icmpCode">icmpCode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.icmpType">icmpType</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.ipv6CidrBlock">ipv6CidrBlock</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.ruleNo">ruleNo</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.toPort">toPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress">DefaultNetworkAclEgress</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `cidrBlockInput`<sup>Optional</sup> <a name="cidrBlockInput" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.cidrBlockInput"></a>

```java
public java.lang.String getCidrBlockInput();
```

- *Type:* java.lang.String

---

##### `fromPortInput`<sup>Optional</sup> <a name="fromPortInput" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.fromPortInput"></a>

```java
public java.lang.Number getFromPortInput();
```

- *Type:* java.lang.Number

---

##### `icmpCodeInput`<sup>Optional</sup> <a name="icmpCodeInput" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.icmpCodeInput"></a>

```java
public java.lang.Number getIcmpCodeInput();
```

- *Type:* java.lang.Number

---

##### `icmpTypeInput`<sup>Optional</sup> <a name="icmpTypeInput" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.icmpTypeInput"></a>

```java
public java.lang.Number getIcmpTypeInput();
```

- *Type:* java.lang.Number

---

##### `ipv6CidrBlockInput`<sup>Optional</sup> <a name="ipv6CidrBlockInput" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.ipv6CidrBlockInput"></a>

```java
public java.lang.String getIpv6CidrBlockInput();
```

- *Type:* java.lang.String

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `ruleNoInput`<sup>Optional</sup> <a name="ruleNoInput" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.ruleNoInput"></a>

```java
public java.lang.Number getRuleNoInput();
```

- *Type:* java.lang.Number

---

##### `toPortInput`<sup>Optional</sup> <a name="toPortInput" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.toPortInput"></a>

```java
public java.lang.Number getToPortInput();
```

- *Type:* java.lang.Number

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `cidrBlock`<sup>Required</sup> <a name="cidrBlock" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.cidrBlock"></a>

```java
public java.lang.String getCidrBlock();
```

- *Type:* java.lang.String

---

##### `fromPort`<sup>Required</sup> <a name="fromPort" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.fromPort"></a>

```java
public java.lang.Number getFromPort();
```

- *Type:* java.lang.Number

---

##### `icmpCode`<sup>Required</sup> <a name="icmpCode" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.icmpCode"></a>

```java
public java.lang.Number getIcmpCode();
```

- *Type:* java.lang.Number

---

##### `icmpType`<sup>Required</sup> <a name="icmpType" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.icmpType"></a>

```java
public java.lang.Number getIcmpType();
```

- *Type:* java.lang.Number

---

##### `ipv6CidrBlock`<sup>Required</sup> <a name="ipv6CidrBlock" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.ipv6CidrBlock"></a>

```java
public java.lang.String getIpv6CidrBlock();
```

- *Type:* java.lang.String

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `ruleNo`<sup>Required</sup> <a name="ruleNo" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.ruleNo"></a>

```java
public java.lang.Number getRuleNo();
```

- *Type:* java.lang.Number

---

##### `toPort`<sup>Required</sup> <a name="toPort" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.toPort"></a>

```java
public java.lang.Number getToPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress">DefaultNetworkAclEgress</a> OR com.hashicorp.cdktf.IResolvable

---


### DefaultNetworkAclIngressList <a name="DefaultNetworkAclIngressList" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.default_network_acl.DefaultNetworkAclIngressList;

new DefaultNetworkAclIngressList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.get"></a>

```java
public DefaultNetworkAclIngressOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress">DefaultNetworkAclIngress</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress">DefaultNetworkAclIngress</a>>

---


### DefaultNetworkAclIngressOutputReference <a name="DefaultNetworkAclIngressOutputReference" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.default_network_acl.DefaultNetworkAclIngressOutputReference;

new DefaultNetworkAclIngressOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.resetCidrBlock">resetCidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.resetIcmpCode">resetIcmpCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.resetIcmpType">resetIcmpType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.resetIpv6CidrBlock">resetIpv6CidrBlock</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCidrBlock` <a name="resetCidrBlock" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.resetCidrBlock"></a>

```java
public void resetCidrBlock()
```

##### `resetIcmpCode` <a name="resetIcmpCode" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.resetIcmpCode"></a>

```java
public void resetIcmpCode()
```

##### `resetIcmpType` <a name="resetIcmpType" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.resetIcmpType"></a>

```java
public void resetIcmpType()
```

##### `resetIpv6CidrBlock` <a name="resetIpv6CidrBlock" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.resetIpv6CidrBlock"></a>

```java
public void resetIpv6CidrBlock()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.cidrBlockInput">cidrBlockInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.fromPortInput">fromPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.icmpCodeInput">icmpCodeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.icmpTypeInput">icmpTypeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.ipv6CidrBlockInput">ipv6CidrBlockInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.ruleNoInput">ruleNoInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.toPortInput">toPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.cidrBlock">cidrBlock</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.fromPort">fromPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.icmpCode">icmpCode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.icmpType">icmpType</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.ipv6CidrBlock">ipv6CidrBlock</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.ruleNo">ruleNo</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.toPort">toPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress">DefaultNetworkAclIngress</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `cidrBlockInput`<sup>Optional</sup> <a name="cidrBlockInput" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.cidrBlockInput"></a>

```java
public java.lang.String getCidrBlockInput();
```

- *Type:* java.lang.String

---

##### `fromPortInput`<sup>Optional</sup> <a name="fromPortInput" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.fromPortInput"></a>

```java
public java.lang.Number getFromPortInput();
```

- *Type:* java.lang.Number

---

##### `icmpCodeInput`<sup>Optional</sup> <a name="icmpCodeInput" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.icmpCodeInput"></a>

```java
public java.lang.Number getIcmpCodeInput();
```

- *Type:* java.lang.Number

---

##### `icmpTypeInput`<sup>Optional</sup> <a name="icmpTypeInput" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.icmpTypeInput"></a>

```java
public java.lang.Number getIcmpTypeInput();
```

- *Type:* java.lang.Number

---

##### `ipv6CidrBlockInput`<sup>Optional</sup> <a name="ipv6CidrBlockInput" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.ipv6CidrBlockInput"></a>

```java
public java.lang.String getIpv6CidrBlockInput();
```

- *Type:* java.lang.String

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `ruleNoInput`<sup>Optional</sup> <a name="ruleNoInput" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.ruleNoInput"></a>

```java
public java.lang.Number getRuleNoInput();
```

- *Type:* java.lang.Number

---

##### `toPortInput`<sup>Optional</sup> <a name="toPortInput" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.toPortInput"></a>

```java
public java.lang.Number getToPortInput();
```

- *Type:* java.lang.Number

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `cidrBlock`<sup>Required</sup> <a name="cidrBlock" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.cidrBlock"></a>

```java
public java.lang.String getCidrBlock();
```

- *Type:* java.lang.String

---

##### `fromPort`<sup>Required</sup> <a name="fromPort" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.fromPort"></a>

```java
public java.lang.Number getFromPort();
```

- *Type:* java.lang.Number

---

##### `icmpCode`<sup>Required</sup> <a name="icmpCode" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.icmpCode"></a>

```java
public java.lang.Number getIcmpCode();
```

- *Type:* java.lang.Number

---

##### `icmpType`<sup>Required</sup> <a name="icmpType" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.icmpType"></a>

```java
public java.lang.Number getIcmpType();
```

- *Type:* java.lang.Number

---

##### `ipv6CidrBlock`<sup>Required</sup> <a name="ipv6CidrBlock" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.ipv6CidrBlock"></a>

```java
public java.lang.String getIpv6CidrBlock();
```

- *Type:* java.lang.String

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `ruleNo`<sup>Required</sup> <a name="ruleNo" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.ruleNo"></a>

```java
public java.lang.Number getRuleNo();
```

- *Type:* java.lang.Number

---

##### `toPort`<sup>Required</sup> <a name="toPort" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.toPort"></a>

```java
public java.lang.Number getToPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress">DefaultNetworkAclIngress</a> OR com.hashicorp.cdktf.IResolvable

---



