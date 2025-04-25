# `ecrPullThroughCacheRule` Submodule <a name="`ecrPullThroughCacheRule` Submodule" id="@cdktf/provider-aws.ecrPullThroughCacheRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EcrPullThroughCacheRule <a name="EcrPullThroughCacheRule" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/ecr_pull_through_cache_rule aws_ecr_pull_through_cache_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecr_pull_through_cache_rule.EcrPullThroughCacheRule;

EcrPullThroughCacheRule.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .ecrRepositoryPrefix(java.lang.String)
    .upstreamRegistryUrl(java.lang.String)
//  .credentialArn(java.lang.String)
//  .customRoleArn(java.lang.String)
//  .id(java.lang.String)
//  .upstreamRepositoryPrefix(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.ecrRepositoryPrefix">ecrRepositoryPrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/ecr_pull_through_cache_rule#ecr_repository_prefix EcrPullThroughCacheRule#ecr_repository_prefix}. |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.upstreamRegistryUrl">upstreamRegistryUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/ecr_pull_through_cache_rule#upstream_registry_url EcrPullThroughCacheRule#upstream_registry_url}. |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.credentialArn">credentialArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/ecr_pull_through_cache_rule#credential_arn EcrPullThroughCacheRule#credential_arn}. |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.customRoleArn">customRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/ecr_pull_through_cache_rule#custom_role_arn EcrPullThroughCacheRule#custom_role_arn}. |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/ecr_pull_through_cache_rule#id EcrPullThroughCacheRule#id}. |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.upstreamRepositoryPrefix">upstreamRepositoryPrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/ecr_pull_through_cache_rule#upstream_repository_prefix EcrPullThroughCacheRule#upstream_repository_prefix}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `ecrRepositoryPrefix`<sup>Required</sup> <a name="ecrRepositoryPrefix" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.ecrRepositoryPrefix"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/ecr_pull_through_cache_rule#ecr_repository_prefix EcrPullThroughCacheRule#ecr_repository_prefix}.

---

##### `upstreamRegistryUrl`<sup>Required</sup> <a name="upstreamRegistryUrl" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.upstreamRegistryUrl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/ecr_pull_through_cache_rule#upstream_registry_url EcrPullThroughCacheRule#upstream_registry_url}.

---

##### `credentialArn`<sup>Optional</sup> <a name="credentialArn" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.credentialArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/ecr_pull_through_cache_rule#credential_arn EcrPullThroughCacheRule#credential_arn}.

---

##### `customRoleArn`<sup>Optional</sup> <a name="customRoleArn" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.customRoleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/ecr_pull_through_cache_rule#custom_role_arn EcrPullThroughCacheRule#custom_role_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/ecr_pull_through_cache_rule#id EcrPullThroughCacheRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `upstreamRepositoryPrefix`<sup>Optional</sup> <a name="upstreamRepositoryPrefix" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.upstreamRepositoryPrefix"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/ecr_pull_through_cache_rule#upstream_repository_prefix EcrPullThroughCacheRule#upstream_repository_prefix}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.resetCredentialArn">resetCredentialArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.resetCustomRoleArn">resetCustomRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.resetUpstreamRepositoryPrefix">resetUpstreamRepositoryPrefix</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCredentialArn` <a name="resetCredentialArn" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.resetCredentialArn"></a>

```java
public void resetCredentialArn()
```

##### `resetCustomRoleArn` <a name="resetCustomRoleArn" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.resetCustomRoleArn"></a>

```java
public void resetCustomRoleArn()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.resetId"></a>

```java
public void resetId()
```

##### `resetUpstreamRepositoryPrefix` <a name="resetUpstreamRepositoryPrefix" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.resetUpstreamRepositoryPrefix"></a>

```java
public void resetUpstreamRepositoryPrefix()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a EcrPullThroughCacheRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecr_pull_through_cache_rule.EcrPullThroughCacheRule;

EcrPullThroughCacheRule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecr_pull_through_cache_rule.EcrPullThroughCacheRule;

EcrPullThroughCacheRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecr_pull_through_cache_rule.EcrPullThroughCacheRule;

EcrPullThroughCacheRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecr_pull_through_cache_rule.EcrPullThroughCacheRule;

EcrPullThroughCacheRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),EcrPullThroughCacheRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a EcrPullThroughCacheRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the EcrPullThroughCacheRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing EcrPullThroughCacheRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/ecr_pull_through_cache_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the EcrPullThroughCacheRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.registryId">registryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.credentialArnInput">credentialArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.customRoleArnInput">customRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.ecrRepositoryPrefixInput">ecrRepositoryPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.upstreamRegistryUrlInput">upstreamRegistryUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.upstreamRepositoryPrefixInput">upstreamRepositoryPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.credentialArn">credentialArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.customRoleArn">customRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.ecrRepositoryPrefix">ecrRepositoryPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.upstreamRegistryUrl">upstreamRegistryUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.upstreamRepositoryPrefix">upstreamRepositoryPrefix</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `registryId`<sup>Required</sup> <a name="registryId" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.registryId"></a>

```java
public java.lang.String getRegistryId();
```

- *Type:* java.lang.String

---

##### `credentialArnInput`<sup>Optional</sup> <a name="credentialArnInput" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.credentialArnInput"></a>

```java
public java.lang.String getCredentialArnInput();
```

- *Type:* java.lang.String

---

##### `customRoleArnInput`<sup>Optional</sup> <a name="customRoleArnInput" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.customRoleArnInput"></a>

```java
public java.lang.String getCustomRoleArnInput();
```

- *Type:* java.lang.String

---

##### `ecrRepositoryPrefixInput`<sup>Optional</sup> <a name="ecrRepositoryPrefixInput" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.ecrRepositoryPrefixInput"></a>

```java
public java.lang.String getEcrRepositoryPrefixInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `upstreamRegistryUrlInput`<sup>Optional</sup> <a name="upstreamRegistryUrlInput" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.upstreamRegistryUrlInput"></a>

```java
public java.lang.String getUpstreamRegistryUrlInput();
```

- *Type:* java.lang.String

---

##### `upstreamRepositoryPrefixInput`<sup>Optional</sup> <a name="upstreamRepositoryPrefixInput" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.upstreamRepositoryPrefixInput"></a>

```java
public java.lang.String getUpstreamRepositoryPrefixInput();
```

- *Type:* java.lang.String

---

##### `credentialArn`<sup>Required</sup> <a name="credentialArn" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.credentialArn"></a>

```java
public java.lang.String getCredentialArn();
```

- *Type:* java.lang.String

---

##### `customRoleArn`<sup>Required</sup> <a name="customRoleArn" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.customRoleArn"></a>

```java
public java.lang.String getCustomRoleArn();
```

- *Type:* java.lang.String

---

##### `ecrRepositoryPrefix`<sup>Required</sup> <a name="ecrRepositoryPrefix" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.ecrRepositoryPrefix"></a>

```java
public java.lang.String getEcrRepositoryPrefix();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `upstreamRegistryUrl`<sup>Required</sup> <a name="upstreamRegistryUrl" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.upstreamRegistryUrl"></a>

```java
public java.lang.String getUpstreamRegistryUrl();
```

- *Type:* java.lang.String

---

##### `upstreamRepositoryPrefix`<sup>Required</sup> <a name="upstreamRepositoryPrefix" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.upstreamRepositoryPrefix"></a>

```java
public java.lang.String getUpstreamRepositoryPrefix();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EcrPullThroughCacheRuleConfig <a name="EcrPullThroughCacheRuleConfig" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecr_pull_through_cache_rule.EcrPullThroughCacheRuleConfig;

EcrPullThroughCacheRuleConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .ecrRepositoryPrefix(java.lang.String)
    .upstreamRegistryUrl(java.lang.String)
//  .credentialArn(java.lang.String)
//  .customRoleArn(java.lang.String)
//  .id(java.lang.String)
//  .upstreamRepositoryPrefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.ecrRepositoryPrefix">ecrRepositoryPrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/ecr_pull_through_cache_rule#ecr_repository_prefix EcrPullThroughCacheRule#ecr_repository_prefix}. |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.upstreamRegistryUrl">upstreamRegistryUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/ecr_pull_through_cache_rule#upstream_registry_url EcrPullThroughCacheRule#upstream_registry_url}. |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.credentialArn">credentialArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/ecr_pull_through_cache_rule#credential_arn EcrPullThroughCacheRule#credential_arn}. |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.customRoleArn">customRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/ecr_pull_through_cache_rule#custom_role_arn EcrPullThroughCacheRule#custom_role_arn}. |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/ecr_pull_through_cache_rule#id EcrPullThroughCacheRule#id}. |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.upstreamRepositoryPrefix">upstreamRepositoryPrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/ecr_pull_through_cache_rule#upstream_repository_prefix EcrPullThroughCacheRule#upstream_repository_prefix}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `ecrRepositoryPrefix`<sup>Required</sup> <a name="ecrRepositoryPrefix" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.ecrRepositoryPrefix"></a>

```java
public java.lang.String getEcrRepositoryPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/ecr_pull_through_cache_rule#ecr_repository_prefix EcrPullThroughCacheRule#ecr_repository_prefix}.

---

##### `upstreamRegistryUrl`<sup>Required</sup> <a name="upstreamRegistryUrl" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.upstreamRegistryUrl"></a>

```java
public java.lang.String getUpstreamRegistryUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/ecr_pull_through_cache_rule#upstream_registry_url EcrPullThroughCacheRule#upstream_registry_url}.

---

##### `credentialArn`<sup>Optional</sup> <a name="credentialArn" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.credentialArn"></a>

```java
public java.lang.String getCredentialArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/ecr_pull_through_cache_rule#credential_arn EcrPullThroughCacheRule#credential_arn}.

---

##### `customRoleArn`<sup>Optional</sup> <a name="customRoleArn" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.customRoleArn"></a>

```java
public java.lang.String getCustomRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/ecr_pull_through_cache_rule#custom_role_arn EcrPullThroughCacheRule#custom_role_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/ecr_pull_through_cache_rule#id EcrPullThroughCacheRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `upstreamRepositoryPrefix`<sup>Optional</sup> <a name="upstreamRepositoryPrefix" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.upstreamRepositoryPrefix"></a>

```java
public java.lang.String getUpstreamRepositoryPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/ecr_pull_through_cache_rule#upstream_repository_prefix EcrPullThroughCacheRule#upstream_repository_prefix}.

---



