# `opensearchDomain` Submodule <a name="`opensearchDomain` Submodule" id="@cdktf/provider-aws.opensearchDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpensearchDomain <a name="OpensearchDomain" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain aws_opensearch_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer"></a>

```typescript
import { opensearchDomain } from '@cdktf/provider-aws'

new opensearchDomain.OpensearchDomain(scope: Construct, id: string, config: OpensearchDomainConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig">OpensearchDomainConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig">OpensearchDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putAdvancedSecurityOptions">putAdvancedSecurityOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putAutoTuneOptions">putAutoTuneOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putClusterConfig">putClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putCognitoOptions">putCognitoOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putDomainEndpointOptions">putDomainEndpointOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putEbsOptions">putEbsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putEncryptAtRest">putEncryptAtRest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putLogPublishingOptions">putLogPublishingOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putNodeToNodeEncryption">putNodeToNodeEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putSnapshotOptions">putSnapshotOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putVpcOptions">putVpcOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetAccessPolicies">resetAccessPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetAdvancedOptions">resetAdvancedOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetAdvancedSecurityOptions">resetAdvancedSecurityOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetAutoTuneOptions">resetAutoTuneOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetClusterConfig">resetClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetCognitoOptions">resetCognitoOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetDomainEndpointOptions">resetDomainEndpointOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetEbsOptions">resetEbsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetEncryptAtRest">resetEncryptAtRest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetEngineVersion">resetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetLogPublishingOptions">resetLogPublishingOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetNodeToNodeEncryption">resetNodeToNodeEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetSnapshotOptions">resetSnapshotOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetVpcOptions">resetVpcOptions</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putAdvancedSecurityOptions` <a name="putAdvancedSecurityOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putAdvancedSecurityOptions"></a>

```typescript
public putAdvancedSecurityOptions(value: OpensearchDomainAdvancedSecurityOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putAdvancedSecurityOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptions">OpensearchDomainAdvancedSecurityOptions</a>

---

##### `putAutoTuneOptions` <a name="putAutoTuneOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putAutoTuneOptions"></a>

```typescript
public putAutoTuneOptions(value: OpensearchDomainAutoTuneOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putAutoTuneOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptions">OpensearchDomainAutoTuneOptions</a>

---

##### `putClusterConfig` <a name="putClusterConfig" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putClusterConfig"></a>

```typescript
public putClusterConfig(value: OpensearchDomainClusterConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putClusterConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig">OpensearchDomainClusterConfig</a>

---

##### `putCognitoOptions` <a name="putCognitoOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putCognitoOptions"></a>

```typescript
public putCognitoOptions(value: OpensearchDomainCognitoOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putCognitoOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptions">OpensearchDomainCognitoOptions</a>

---

##### `putDomainEndpointOptions` <a name="putDomainEndpointOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putDomainEndpointOptions"></a>

```typescript
public putDomainEndpointOptions(value: OpensearchDomainDomainEndpointOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putDomainEndpointOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptions">OpensearchDomainDomainEndpointOptions</a>

---

##### `putEbsOptions` <a name="putEbsOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putEbsOptions"></a>

```typescript
public putEbsOptions(value: OpensearchDomainEbsOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putEbsOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptions">OpensearchDomainEbsOptions</a>

---

##### `putEncryptAtRest` <a name="putEncryptAtRest" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putEncryptAtRest"></a>

```typescript
public putEncryptAtRest(value: OpensearchDomainEncryptAtRest): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putEncryptAtRest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRest">OpensearchDomainEncryptAtRest</a>

---

##### `putLogPublishingOptions` <a name="putLogPublishingOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putLogPublishingOptions"></a>

```typescript
public putLogPublishingOptions(value: IResolvable | OpensearchDomainLogPublishingOptions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putLogPublishingOptions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptions">OpensearchDomainLogPublishingOptions</a>[]

---

##### `putNodeToNodeEncryption` <a name="putNodeToNodeEncryption" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putNodeToNodeEncryption"></a>

```typescript
public putNodeToNodeEncryption(value: OpensearchDomainNodeToNodeEncryption): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putNodeToNodeEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryption">OpensearchDomainNodeToNodeEncryption</a>

---

##### `putSnapshotOptions` <a name="putSnapshotOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putSnapshotOptions"></a>

```typescript
public putSnapshotOptions(value: OpensearchDomainSnapshotOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putSnapshotOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptions">OpensearchDomainSnapshotOptions</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putTimeouts"></a>

```typescript
public putTimeouts(value: OpensearchDomainTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeouts">OpensearchDomainTimeouts</a>

---

##### `putVpcOptions` <a name="putVpcOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putVpcOptions"></a>

```typescript
public putVpcOptions(value: OpensearchDomainVpcOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putVpcOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptions">OpensearchDomainVpcOptions</a>

---

##### `resetAccessPolicies` <a name="resetAccessPolicies" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetAccessPolicies"></a>

```typescript
public resetAccessPolicies(): void
```

##### `resetAdvancedOptions` <a name="resetAdvancedOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetAdvancedOptions"></a>

```typescript
public resetAdvancedOptions(): void
```

##### `resetAdvancedSecurityOptions` <a name="resetAdvancedSecurityOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetAdvancedSecurityOptions"></a>

```typescript
public resetAdvancedSecurityOptions(): void
```

##### `resetAutoTuneOptions` <a name="resetAutoTuneOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetAutoTuneOptions"></a>

```typescript
public resetAutoTuneOptions(): void
```

##### `resetClusterConfig` <a name="resetClusterConfig" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetClusterConfig"></a>

```typescript
public resetClusterConfig(): void
```

##### `resetCognitoOptions` <a name="resetCognitoOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetCognitoOptions"></a>

```typescript
public resetCognitoOptions(): void
```

##### `resetDomainEndpointOptions` <a name="resetDomainEndpointOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetDomainEndpointOptions"></a>

```typescript
public resetDomainEndpointOptions(): void
```

##### `resetEbsOptions` <a name="resetEbsOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetEbsOptions"></a>

```typescript
public resetEbsOptions(): void
```

##### `resetEncryptAtRest` <a name="resetEncryptAtRest" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetEncryptAtRest"></a>

```typescript
public resetEncryptAtRest(): void
```

##### `resetEngineVersion` <a name="resetEngineVersion" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetEngineVersion"></a>

```typescript
public resetEngineVersion(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLogPublishingOptions` <a name="resetLogPublishingOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetLogPublishingOptions"></a>

```typescript
public resetLogPublishingOptions(): void
```

##### `resetNodeToNodeEncryption` <a name="resetNodeToNodeEncryption" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetNodeToNodeEncryption"></a>

```typescript
public resetNodeToNodeEncryption(): void
```

##### `resetSnapshotOptions` <a name="resetSnapshotOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetSnapshotOptions"></a>

```typescript
public resetSnapshotOptions(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVpcOptions` <a name="resetVpcOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetVpcOptions"></a>

```typescript
public resetVpcOptions(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.isConstruct"></a>

```typescript
import { opensearchDomain } from '@cdktf/provider-aws'

opensearchDomain.OpensearchDomain.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.isTerraformElement"></a>

```typescript
import { opensearchDomain } from '@cdktf/provider-aws'

opensearchDomain.OpensearchDomain.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.isTerraformResource"></a>

```typescript
import { opensearchDomain } from '@cdktf/provider-aws'

opensearchDomain.OpensearchDomain.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.advancedSecurityOptions">advancedSecurityOptions</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference">OpensearchDomainAdvancedSecurityOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.autoTuneOptions">autoTuneOptions</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference">OpensearchDomainAutoTuneOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.clusterConfig">clusterConfig</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference">OpensearchDomainClusterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.cognitoOptions">cognitoOptions</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference">OpensearchDomainCognitoOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.domainEndpointOptions">domainEndpointOptions</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference">OpensearchDomainDomainEndpointOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.domainId">domainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.ebsOptions">ebsOptions</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference">OpensearchDomainEbsOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.encryptAtRest">encryptAtRest</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference">OpensearchDomainEncryptAtRestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.kibanaEndpoint">kibanaEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.logPublishingOptions">logPublishingOptions</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList">OpensearchDomainLogPublishingOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.nodeToNodeEncryption">nodeToNodeEncryption</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference">OpensearchDomainNodeToNodeEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.snapshotOptions">snapshotOptions</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference">OpensearchDomainSnapshotOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference">OpensearchDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.vpcOptions">vpcOptions</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference">OpensearchDomainVpcOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.accessPoliciesInput">accessPoliciesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.advancedOptionsInput">advancedOptionsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.advancedSecurityOptionsInput">advancedSecurityOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptions">OpensearchDomainAdvancedSecurityOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.autoTuneOptionsInput">autoTuneOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptions">OpensearchDomainAutoTuneOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.clusterConfigInput">clusterConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig">OpensearchDomainClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.cognitoOptionsInput">cognitoOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptions">OpensearchDomainCognitoOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.domainEndpointOptionsInput">domainEndpointOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptions">OpensearchDomainDomainEndpointOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.domainNameInput">domainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.ebsOptionsInput">ebsOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptions">OpensearchDomainEbsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.encryptAtRestInput">encryptAtRestInput</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRest">OpensearchDomainEncryptAtRest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.engineVersionInput">engineVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.logPublishingOptionsInput">logPublishingOptionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptions">OpensearchDomainLogPublishingOptions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.nodeToNodeEncryptionInput">nodeToNodeEncryptionInput</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryption">OpensearchDomainNodeToNodeEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.snapshotOptionsInput">snapshotOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptions">OpensearchDomainSnapshotOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeouts">OpensearchDomainTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.vpcOptionsInput">vpcOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptions">OpensearchDomainVpcOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.accessPolicies">accessPolicies</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.advancedOptions">advancedOptions</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.engineVersion">engineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `advancedSecurityOptions`<sup>Required</sup> <a name="advancedSecurityOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.advancedSecurityOptions"></a>

```typescript
public readonly advancedSecurityOptions: OpensearchDomainAdvancedSecurityOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference">OpensearchDomainAdvancedSecurityOptionsOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `autoTuneOptions`<sup>Required</sup> <a name="autoTuneOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.autoTuneOptions"></a>

```typescript
public readonly autoTuneOptions: OpensearchDomainAutoTuneOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference">OpensearchDomainAutoTuneOptionsOutputReference</a>

---

##### `clusterConfig`<sup>Required</sup> <a name="clusterConfig" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.clusterConfig"></a>

```typescript
public readonly clusterConfig: OpensearchDomainClusterConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference">OpensearchDomainClusterConfigOutputReference</a>

---

##### `cognitoOptions`<sup>Required</sup> <a name="cognitoOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.cognitoOptions"></a>

```typescript
public readonly cognitoOptions: OpensearchDomainCognitoOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference">OpensearchDomainCognitoOptionsOutputReference</a>

---

##### `domainEndpointOptions`<sup>Required</sup> <a name="domainEndpointOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.domainEndpointOptions"></a>

```typescript
public readonly domainEndpointOptions: OpensearchDomainDomainEndpointOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference">OpensearchDomainDomainEndpointOptionsOutputReference</a>

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

---

##### `ebsOptions`<sup>Required</sup> <a name="ebsOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.ebsOptions"></a>

```typescript
public readonly ebsOptions: OpensearchDomainEbsOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference">OpensearchDomainEbsOptionsOutputReference</a>

---

##### `encryptAtRest`<sup>Required</sup> <a name="encryptAtRest" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.encryptAtRest"></a>

```typescript
public readonly encryptAtRest: OpensearchDomainEncryptAtRestOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference">OpensearchDomainEncryptAtRestOutputReference</a>

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `kibanaEndpoint`<sup>Required</sup> <a name="kibanaEndpoint" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.kibanaEndpoint"></a>

```typescript
public readonly kibanaEndpoint: string;
```

- *Type:* string

---

##### `logPublishingOptions`<sup>Required</sup> <a name="logPublishingOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.logPublishingOptions"></a>

```typescript
public readonly logPublishingOptions: OpensearchDomainLogPublishingOptionsList;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList">OpensearchDomainLogPublishingOptionsList</a>

---

##### `nodeToNodeEncryption`<sup>Required</sup> <a name="nodeToNodeEncryption" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.nodeToNodeEncryption"></a>

```typescript
public readonly nodeToNodeEncryption: OpensearchDomainNodeToNodeEncryptionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference">OpensearchDomainNodeToNodeEncryptionOutputReference</a>

---

##### `snapshotOptions`<sup>Required</sup> <a name="snapshotOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.snapshotOptions"></a>

```typescript
public readonly snapshotOptions: OpensearchDomainSnapshotOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference">OpensearchDomainSnapshotOptionsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.timeouts"></a>

```typescript
public readonly timeouts: OpensearchDomainTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference">OpensearchDomainTimeoutsOutputReference</a>

---

##### `vpcOptions`<sup>Required</sup> <a name="vpcOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.vpcOptions"></a>

```typescript
public readonly vpcOptions: OpensearchDomainVpcOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference">OpensearchDomainVpcOptionsOutputReference</a>

---

##### `accessPoliciesInput`<sup>Optional</sup> <a name="accessPoliciesInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.accessPoliciesInput"></a>

```typescript
public readonly accessPoliciesInput: string;
```

- *Type:* string

---

##### `advancedOptionsInput`<sup>Optional</sup> <a name="advancedOptionsInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.advancedOptionsInput"></a>

```typescript
public readonly advancedOptionsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `advancedSecurityOptionsInput`<sup>Optional</sup> <a name="advancedSecurityOptionsInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.advancedSecurityOptionsInput"></a>

```typescript
public readonly advancedSecurityOptionsInput: OpensearchDomainAdvancedSecurityOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptions">OpensearchDomainAdvancedSecurityOptions</a>

---

##### `autoTuneOptionsInput`<sup>Optional</sup> <a name="autoTuneOptionsInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.autoTuneOptionsInput"></a>

```typescript
public readonly autoTuneOptionsInput: OpensearchDomainAutoTuneOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptions">OpensearchDomainAutoTuneOptions</a>

---

##### `clusterConfigInput`<sup>Optional</sup> <a name="clusterConfigInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.clusterConfigInput"></a>

```typescript
public readonly clusterConfigInput: OpensearchDomainClusterConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig">OpensearchDomainClusterConfig</a>

---

##### `cognitoOptionsInput`<sup>Optional</sup> <a name="cognitoOptionsInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.cognitoOptionsInput"></a>

```typescript
public readonly cognitoOptionsInput: OpensearchDomainCognitoOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptions">OpensearchDomainCognitoOptions</a>

---

##### `domainEndpointOptionsInput`<sup>Optional</sup> <a name="domainEndpointOptionsInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.domainEndpointOptionsInput"></a>

```typescript
public readonly domainEndpointOptionsInput: OpensearchDomainDomainEndpointOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptions">OpensearchDomainDomainEndpointOptions</a>

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.domainNameInput"></a>

```typescript
public readonly domainNameInput: string;
```

- *Type:* string

---

##### `ebsOptionsInput`<sup>Optional</sup> <a name="ebsOptionsInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.ebsOptionsInput"></a>

```typescript
public readonly ebsOptionsInput: OpensearchDomainEbsOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptions">OpensearchDomainEbsOptions</a>

---

##### `encryptAtRestInput`<sup>Optional</sup> <a name="encryptAtRestInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.encryptAtRestInput"></a>

```typescript
public readonly encryptAtRestInput: OpensearchDomainEncryptAtRest;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRest">OpensearchDomainEncryptAtRest</a>

---

##### `engineVersionInput`<sup>Optional</sup> <a name="engineVersionInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.engineVersionInput"></a>

```typescript
public readonly engineVersionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `logPublishingOptionsInput`<sup>Optional</sup> <a name="logPublishingOptionsInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.logPublishingOptionsInput"></a>

```typescript
public readonly logPublishingOptionsInput: IResolvable | OpensearchDomainLogPublishingOptions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptions">OpensearchDomainLogPublishingOptions</a>[]

---

##### `nodeToNodeEncryptionInput`<sup>Optional</sup> <a name="nodeToNodeEncryptionInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.nodeToNodeEncryptionInput"></a>

```typescript
public readonly nodeToNodeEncryptionInput: OpensearchDomainNodeToNodeEncryption;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryption">OpensearchDomainNodeToNodeEncryption</a>

---

##### `snapshotOptionsInput`<sup>Optional</sup> <a name="snapshotOptionsInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.snapshotOptionsInput"></a>

```typescript
public readonly snapshotOptionsInput: OpensearchDomainSnapshotOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptions">OpensearchDomainSnapshotOptions</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: OpensearchDomainTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeouts">OpensearchDomainTimeouts</a> | cdktf.IResolvable

---

##### `vpcOptionsInput`<sup>Optional</sup> <a name="vpcOptionsInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.vpcOptionsInput"></a>

```typescript
public readonly vpcOptionsInput: OpensearchDomainVpcOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptions">OpensearchDomainVpcOptions</a>

---

##### `accessPolicies`<sup>Required</sup> <a name="accessPolicies" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.accessPolicies"></a>

```typescript
public readonly accessPolicies: string;
```

- *Type:* string

---

##### `advancedOptions`<sup>Required</sup> <a name="advancedOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.advancedOptions"></a>

```typescript
public readonly advancedOptions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.engineVersion"></a>

```typescript
public readonly engineVersion: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OpensearchDomainAdvancedSecurityOptions <a name="OpensearchDomainAdvancedSecurityOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptions.Initializer"></a>

```typescript
import { opensearchDomain } from '@cdktf/provider-aws'

const opensearchDomainAdvancedSecurityOptions: opensearchDomain.OpensearchDomainAdvancedSecurityOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptions.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#enabled OpensearchDomain#enabled}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptions.property.anonymousAuthEnabled">anonymousAuthEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#anonymous_auth_enabled OpensearchDomain#anonymous_auth_enabled}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptions.property.internalUserDatabaseEnabled">internalUserDatabaseEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#internal_user_database_enabled OpensearchDomain#internal_user_database_enabled}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptions.property.masterUserOptions">masterUserOptions</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptions">OpensearchDomainAdvancedSecurityOptionsMasterUserOptions</a></code> | master_user_options block. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptions.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#enabled OpensearchDomain#enabled}.

---

##### `anonymousAuthEnabled`<sup>Optional</sup> <a name="anonymousAuthEnabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptions.property.anonymousAuthEnabled"></a>

```typescript
public readonly anonymousAuthEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#anonymous_auth_enabled OpensearchDomain#anonymous_auth_enabled}.

---

##### `internalUserDatabaseEnabled`<sup>Optional</sup> <a name="internalUserDatabaseEnabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptions.property.internalUserDatabaseEnabled"></a>

```typescript
public readonly internalUserDatabaseEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#internal_user_database_enabled OpensearchDomain#internal_user_database_enabled}.

---

##### `masterUserOptions`<sup>Optional</sup> <a name="masterUserOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptions.property.masterUserOptions"></a>

```typescript
public readonly masterUserOptions: OpensearchDomainAdvancedSecurityOptionsMasterUserOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptions">OpensearchDomainAdvancedSecurityOptionsMasterUserOptions</a>

master_user_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#master_user_options OpensearchDomain#master_user_options}

---

### OpensearchDomainAdvancedSecurityOptionsMasterUserOptions <a name="OpensearchDomainAdvancedSecurityOptionsMasterUserOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptions.Initializer"></a>

```typescript
import { opensearchDomain } from '@cdktf/provider-aws'

const opensearchDomainAdvancedSecurityOptionsMasterUserOptions: opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptions.property.masterUserArn">masterUserArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#master_user_arn OpensearchDomain#master_user_arn}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptions.property.masterUserName">masterUserName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#master_user_name OpensearchDomain#master_user_name}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptions.property.masterUserPassword">masterUserPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#master_user_password OpensearchDomain#master_user_password}. |

---

##### `masterUserArn`<sup>Optional</sup> <a name="masterUserArn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptions.property.masterUserArn"></a>

```typescript
public readonly masterUserArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#master_user_arn OpensearchDomain#master_user_arn}.

---

##### `masterUserName`<sup>Optional</sup> <a name="masterUserName" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptions.property.masterUserName"></a>

```typescript
public readonly masterUserName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#master_user_name OpensearchDomain#master_user_name}.

---

##### `masterUserPassword`<sup>Optional</sup> <a name="masterUserPassword" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptions.property.masterUserPassword"></a>

```typescript
public readonly masterUserPassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#master_user_password OpensearchDomain#master_user_password}.

---

### OpensearchDomainAutoTuneOptions <a name="OpensearchDomainAutoTuneOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptions.Initializer"></a>

```typescript
import { opensearchDomain } from '@cdktf/provider-aws'

const opensearchDomainAutoTuneOptions: opensearchDomain.OpensearchDomainAutoTuneOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptions.property.desiredState">desiredState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#desired_state OpensearchDomain#desired_state}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptions.property.maintenanceSchedule">maintenanceSchedule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceSchedule">OpensearchDomainAutoTuneOptionsMaintenanceSchedule</a>[]</code> | maintenance_schedule block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptions.property.rollbackOnDisable">rollbackOnDisable</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#rollback_on_disable OpensearchDomain#rollback_on_disable}. |

---

##### `desiredState`<sup>Required</sup> <a name="desiredState" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptions.property.desiredState"></a>

```typescript
public readonly desiredState: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#desired_state OpensearchDomain#desired_state}.

---

##### `maintenanceSchedule`<sup>Optional</sup> <a name="maintenanceSchedule" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptions.property.maintenanceSchedule"></a>

```typescript
public readonly maintenanceSchedule: IResolvable | OpensearchDomainAutoTuneOptionsMaintenanceSchedule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceSchedule">OpensearchDomainAutoTuneOptionsMaintenanceSchedule</a>[]

maintenance_schedule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#maintenance_schedule OpensearchDomain#maintenance_schedule}

---

##### `rollbackOnDisable`<sup>Optional</sup> <a name="rollbackOnDisable" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptions.property.rollbackOnDisable"></a>

```typescript
public readonly rollbackOnDisable: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#rollback_on_disable OpensearchDomain#rollback_on_disable}.

---

### OpensearchDomainAutoTuneOptionsMaintenanceSchedule <a name="OpensearchDomainAutoTuneOptionsMaintenanceSchedule" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceSchedule.Initializer"></a>

```typescript
import { opensearchDomain } from '@cdktf/provider-aws'

const opensearchDomainAutoTuneOptionsMaintenanceSchedule: opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceSchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceSchedule.property.cronExpressionForRecurrence">cronExpressionForRecurrence</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#cron_expression_for_recurrence OpensearchDomain#cron_expression_for_recurrence}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceSchedule.property.duration">duration</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration">OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration</a></code> | duration block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceSchedule.property.startAt">startAt</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#start_at OpensearchDomain#start_at}. |

---

##### `cronExpressionForRecurrence`<sup>Required</sup> <a name="cronExpressionForRecurrence" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceSchedule.property.cronExpressionForRecurrence"></a>

```typescript
public readonly cronExpressionForRecurrence: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#cron_expression_for_recurrence OpensearchDomain#cron_expression_for_recurrence}.

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceSchedule.property.duration"></a>

```typescript
public readonly duration: OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration">OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration</a>

duration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#duration OpensearchDomain#duration}

---

##### `startAt`<sup>Required</sup> <a name="startAt" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceSchedule.property.startAt"></a>

```typescript
public readonly startAt: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#start_at OpensearchDomain#start_at}.

---

### OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration <a name="OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration.Initializer"></a>

```typescript
import { opensearchDomain } from '@cdktf/provider-aws'

const opensearchDomainAutoTuneOptionsMaintenanceScheduleDuration: opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration.property.unit">unit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#unit OpensearchDomain#unit}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration.property.value">value</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#value OpensearchDomain#value}. |

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#unit OpensearchDomain#unit}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#value OpensearchDomain#value}.

---

### OpensearchDomainClusterConfig <a name="OpensearchDomainClusterConfig" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.Initializer"></a>

```typescript
import { opensearchDomain } from '@cdktf/provider-aws'

const opensearchDomainClusterConfig: opensearchDomain.OpensearchDomainClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.coldStorageOptions">coldStorageOptions</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptions">OpensearchDomainClusterConfigColdStorageOptions</a></code> | cold_storage_options block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.dedicatedMasterCount">dedicatedMasterCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#dedicated_master_count OpensearchDomain#dedicated_master_count}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.dedicatedMasterEnabled">dedicatedMasterEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#dedicated_master_enabled OpensearchDomain#dedicated_master_enabled}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.dedicatedMasterType">dedicatedMasterType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#dedicated_master_type OpensearchDomain#dedicated_master_type}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.instanceCount">instanceCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#instance_count OpensearchDomain#instance_count}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.instanceType">instanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#instance_type OpensearchDomain#instance_type}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.warmCount">warmCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#warm_count OpensearchDomain#warm_count}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.warmEnabled">warmEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#warm_enabled OpensearchDomain#warm_enabled}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.warmType">warmType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#warm_type OpensearchDomain#warm_type}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.zoneAwarenessConfig">zoneAwarenessConfig</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfig">OpensearchDomainClusterConfigZoneAwarenessConfig</a></code> | zone_awareness_config block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.zoneAwarenessEnabled">zoneAwarenessEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#zone_awareness_enabled OpensearchDomain#zone_awareness_enabled}. |

---

##### `coldStorageOptions`<sup>Optional</sup> <a name="coldStorageOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.coldStorageOptions"></a>

```typescript
public readonly coldStorageOptions: OpensearchDomainClusterConfigColdStorageOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptions">OpensearchDomainClusterConfigColdStorageOptions</a>

cold_storage_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#cold_storage_options OpensearchDomain#cold_storage_options}

---

##### `dedicatedMasterCount`<sup>Optional</sup> <a name="dedicatedMasterCount" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.dedicatedMasterCount"></a>

```typescript
public readonly dedicatedMasterCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#dedicated_master_count OpensearchDomain#dedicated_master_count}.

---

##### `dedicatedMasterEnabled`<sup>Optional</sup> <a name="dedicatedMasterEnabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.dedicatedMasterEnabled"></a>

```typescript
public readonly dedicatedMasterEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#dedicated_master_enabled OpensearchDomain#dedicated_master_enabled}.

---

##### `dedicatedMasterType`<sup>Optional</sup> <a name="dedicatedMasterType" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.dedicatedMasterType"></a>

```typescript
public readonly dedicatedMasterType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#dedicated_master_type OpensearchDomain#dedicated_master_type}.

---

##### `instanceCount`<sup>Optional</sup> <a name="instanceCount" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.instanceCount"></a>

```typescript
public readonly instanceCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#instance_count OpensearchDomain#instance_count}.

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#instance_type OpensearchDomain#instance_type}.

---

##### `warmCount`<sup>Optional</sup> <a name="warmCount" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.warmCount"></a>

```typescript
public readonly warmCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#warm_count OpensearchDomain#warm_count}.

---

##### `warmEnabled`<sup>Optional</sup> <a name="warmEnabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.warmEnabled"></a>

```typescript
public readonly warmEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#warm_enabled OpensearchDomain#warm_enabled}.

---

##### `warmType`<sup>Optional</sup> <a name="warmType" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.warmType"></a>

```typescript
public readonly warmType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#warm_type OpensearchDomain#warm_type}.

---

##### `zoneAwarenessConfig`<sup>Optional</sup> <a name="zoneAwarenessConfig" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.zoneAwarenessConfig"></a>

```typescript
public readonly zoneAwarenessConfig: OpensearchDomainClusterConfigZoneAwarenessConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfig">OpensearchDomainClusterConfigZoneAwarenessConfig</a>

zone_awareness_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#zone_awareness_config OpensearchDomain#zone_awareness_config}

---

##### `zoneAwarenessEnabled`<sup>Optional</sup> <a name="zoneAwarenessEnabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.zoneAwarenessEnabled"></a>

```typescript
public readonly zoneAwarenessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#zone_awareness_enabled OpensearchDomain#zone_awareness_enabled}.

---

### OpensearchDomainClusterConfigColdStorageOptions <a name="OpensearchDomainClusterConfigColdStorageOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptions.Initializer"></a>

```typescript
import { opensearchDomain } from '@cdktf/provider-aws'

const opensearchDomainClusterConfigColdStorageOptions: opensearchDomain.OpensearchDomainClusterConfigColdStorageOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptions.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#enabled OpensearchDomain#enabled}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptions.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#enabled OpensearchDomain#enabled}.

---

### OpensearchDomainClusterConfigZoneAwarenessConfig <a name="OpensearchDomainClusterConfigZoneAwarenessConfig" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfig.Initializer"></a>

```typescript
import { opensearchDomain } from '@cdktf/provider-aws'

const opensearchDomainClusterConfigZoneAwarenessConfig: opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfig.property.availabilityZoneCount">availabilityZoneCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#availability_zone_count OpensearchDomain#availability_zone_count}. |

---

##### `availabilityZoneCount`<sup>Optional</sup> <a name="availabilityZoneCount" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfig.property.availabilityZoneCount"></a>

```typescript
public readonly availabilityZoneCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#availability_zone_count OpensearchDomain#availability_zone_count}.

---

### OpensearchDomainCognitoOptions <a name="OpensearchDomainCognitoOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptions.Initializer"></a>

```typescript
import { opensearchDomain } from '@cdktf/provider-aws'

const opensearchDomainCognitoOptions: opensearchDomain.OpensearchDomainCognitoOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptions.property.identityPoolId">identityPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#identity_pool_id OpensearchDomain#identity_pool_id}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptions.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#role_arn OpensearchDomain#role_arn}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptions.property.userPoolId">userPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#user_pool_id OpensearchDomain#user_pool_id}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptions.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#enabled OpensearchDomain#enabled}. |

---

##### `identityPoolId`<sup>Required</sup> <a name="identityPoolId" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptions.property.identityPoolId"></a>

```typescript
public readonly identityPoolId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#identity_pool_id OpensearchDomain#identity_pool_id}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptions.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#role_arn OpensearchDomain#role_arn}.

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptions.property.userPoolId"></a>

```typescript
public readonly userPoolId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#user_pool_id OpensearchDomain#user_pool_id}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptions.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#enabled OpensearchDomain#enabled}.

---

### OpensearchDomainConfig <a name="OpensearchDomainConfig" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.Initializer"></a>

```typescript
import { opensearchDomain } from '@cdktf/provider-aws'

const opensearchDomainConfig: opensearchDomain.OpensearchDomainConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.domainName">domainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#domain_name OpensearchDomain#domain_name}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.accessPolicies">accessPolicies</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#access_policies OpensearchDomain#access_policies}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.advancedOptions">advancedOptions</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#advanced_options OpensearchDomain#advanced_options}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.advancedSecurityOptions">advancedSecurityOptions</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptions">OpensearchDomainAdvancedSecurityOptions</a></code> | advanced_security_options block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.autoTuneOptions">autoTuneOptions</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptions">OpensearchDomainAutoTuneOptions</a></code> | auto_tune_options block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.clusterConfig">clusterConfig</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig">OpensearchDomainClusterConfig</a></code> | cluster_config block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.cognitoOptions">cognitoOptions</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptions">OpensearchDomainCognitoOptions</a></code> | cognito_options block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.domainEndpointOptions">domainEndpointOptions</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptions">OpensearchDomainDomainEndpointOptions</a></code> | domain_endpoint_options block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.ebsOptions">ebsOptions</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptions">OpensearchDomainEbsOptions</a></code> | ebs_options block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.encryptAtRest">encryptAtRest</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRest">OpensearchDomainEncryptAtRest</a></code> | encrypt_at_rest block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.engineVersion">engineVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#engine_version OpensearchDomain#engine_version}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#id OpensearchDomain#id}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.logPublishingOptions">logPublishingOptions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptions">OpensearchDomainLogPublishingOptions</a>[]</code> | log_publishing_options block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.nodeToNodeEncryption">nodeToNodeEncryption</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryption">OpensearchDomainNodeToNodeEncryption</a></code> | node_to_node_encryption block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.snapshotOptions">snapshotOptions</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptions">OpensearchDomainSnapshotOptions</a></code> | snapshot_options block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#tags OpensearchDomain#tags}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#tags_all OpensearchDomain#tags_all}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeouts">OpensearchDomainTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.vpcOptions">vpcOptions</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptions">OpensearchDomainVpcOptions</a></code> | vpc_options block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#domain_name OpensearchDomain#domain_name}.

---

##### `accessPolicies`<sup>Optional</sup> <a name="accessPolicies" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.accessPolicies"></a>

```typescript
public readonly accessPolicies: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#access_policies OpensearchDomain#access_policies}.

---

##### `advancedOptions`<sup>Optional</sup> <a name="advancedOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.advancedOptions"></a>

```typescript
public readonly advancedOptions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#advanced_options OpensearchDomain#advanced_options}.

---

##### `advancedSecurityOptions`<sup>Optional</sup> <a name="advancedSecurityOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.advancedSecurityOptions"></a>

```typescript
public readonly advancedSecurityOptions: OpensearchDomainAdvancedSecurityOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptions">OpensearchDomainAdvancedSecurityOptions</a>

advanced_security_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#advanced_security_options OpensearchDomain#advanced_security_options}

---

##### `autoTuneOptions`<sup>Optional</sup> <a name="autoTuneOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.autoTuneOptions"></a>

```typescript
public readonly autoTuneOptions: OpensearchDomainAutoTuneOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptions">OpensearchDomainAutoTuneOptions</a>

auto_tune_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#auto_tune_options OpensearchDomain#auto_tune_options}

---

##### `clusterConfig`<sup>Optional</sup> <a name="clusterConfig" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.clusterConfig"></a>

```typescript
public readonly clusterConfig: OpensearchDomainClusterConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig">OpensearchDomainClusterConfig</a>

cluster_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#cluster_config OpensearchDomain#cluster_config}

---

##### `cognitoOptions`<sup>Optional</sup> <a name="cognitoOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.cognitoOptions"></a>

```typescript
public readonly cognitoOptions: OpensearchDomainCognitoOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptions">OpensearchDomainCognitoOptions</a>

cognito_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#cognito_options OpensearchDomain#cognito_options}

---

##### `domainEndpointOptions`<sup>Optional</sup> <a name="domainEndpointOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.domainEndpointOptions"></a>

```typescript
public readonly domainEndpointOptions: OpensearchDomainDomainEndpointOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptions">OpensearchDomainDomainEndpointOptions</a>

domain_endpoint_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#domain_endpoint_options OpensearchDomain#domain_endpoint_options}

---

##### `ebsOptions`<sup>Optional</sup> <a name="ebsOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.ebsOptions"></a>

```typescript
public readonly ebsOptions: OpensearchDomainEbsOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptions">OpensearchDomainEbsOptions</a>

ebs_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#ebs_options OpensearchDomain#ebs_options}

---

##### `encryptAtRest`<sup>Optional</sup> <a name="encryptAtRest" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.encryptAtRest"></a>

```typescript
public readonly encryptAtRest: OpensearchDomainEncryptAtRest;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRest">OpensearchDomainEncryptAtRest</a>

encrypt_at_rest block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#encrypt_at_rest OpensearchDomain#encrypt_at_rest}

---

##### `engineVersion`<sup>Optional</sup> <a name="engineVersion" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.engineVersion"></a>

```typescript
public readonly engineVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#engine_version OpensearchDomain#engine_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#id OpensearchDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logPublishingOptions`<sup>Optional</sup> <a name="logPublishingOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.logPublishingOptions"></a>

```typescript
public readonly logPublishingOptions: IResolvable | OpensearchDomainLogPublishingOptions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptions">OpensearchDomainLogPublishingOptions</a>[]

log_publishing_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#log_publishing_options OpensearchDomain#log_publishing_options}

---

##### `nodeToNodeEncryption`<sup>Optional</sup> <a name="nodeToNodeEncryption" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.nodeToNodeEncryption"></a>

```typescript
public readonly nodeToNodeEncryption: OpensearchDomainNodeToNodeEncryption;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryption">OpensearchDomainNodeToNodeEncryption</a>

node_to_node_encryption block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#node_to_node_encryption OpensearchDomain#node_to_node_encryption}

---

##### `snapshotOptions`<sup>Optional</sup> <a name="snapshotOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.snapshotOptions"></a>

```typescript
public readonly snapshotOptions: OpensearchDomainSnapshotOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptions">OpensearchDomainSnapshotOptions</a>

snapshot_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#snapshot_options OpensearchDomain#snapshot_options}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#tags OpensearchDomain#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#tags_all OpensearchDomain#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.timeouts"></a>

```typescript
public readonly timeouts: OpensearchDomainTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeouts">OpensearchDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#timeouts OpensearchDomain#timeouts}

---

##### `vpcOptions`<sup>Optional</sup> <a name="vpcOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.vpcOptions"></a>

```typescript
public readonly vpcOptions: OpensearchDomainVpcOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptions">OpensearchDomainVpcOptions</a>

vpc_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#vpc_options OpensearchDomain#vpc_options}

---

### OpensearchDomainDomainEndpointOptions <a name="OpensearchDomainDomainEndpointOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptions.Initializer"></a>

```typescript
import { opensearchDomain } from '@cdktf/provider-aws'

const opensearchDomainDomainEndpointOptions: opensearchDomain.OpensearchDomainDomainEndpointOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptions.property.customEndpoint">customEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#custom_endpoint OpensearchDomain#custom_endpoint}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptions.property.customEndpointCertificateArn">customEndpointCertificateArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#custom_endpoint_certificate_arn OpensearchDomain#custom_endpoint_certificate_arn}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptions.property.customEndpointEnabled">customEndpointEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#custom_endpoint_enabled OpensearchDomain#custom_endpoint_enabled}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptions.property.enforceHttps">enforceHttps</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#enforce_https OpensearchDomain#enforce_https}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptions.property.tlsSecurityPolicy">tlsSecurityPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#tls_security_policy OpensearchDomain#tls_security_policy}. |

---

##### `customEndpoint`<sup>Optional</sup> <a name="customEndpoint" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptions.property.customEndpoint"></a>

```typescript
public readonly customEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#custom_endpoint OpensearchDomain#custom_endpoint}.

---

##### `customEndpointCertificateArn`<sup>Optional</sup> <a name="customEndpointCertificateArn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptions.property.customEndpointCertificateArn"></a>

```typescript
public readonly customEndpointCertificateArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#custom_endpoint_certificate_arn OpensearchDomain#custom_endpoint_certificate_arn}.

---

##### `customEndpointEnabled`<sup>Optional</sup> <a name="customEndpointEnabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptions.property.customEndpointEnabled"></a>

```typescript
public readonly customEndpointEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#custom_endpoint_enabled OpensearchDomain#custom_endpoint_enabled}.

---

##### `enforceHttps`<sup>Optional</sup> <a name="enforceHttps" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptions.property.enforceHttps"></a>

```typescript
public readonly enforceHttps: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#enforce_https OpensearchDomain#enforce_https}.

---

##### `tlsSecurityPolicy`<sup>Optional</sup> <a name="tlsSecurityPolicy" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptions.property.tlsSecurityPolicy"></a>

```typescript
public readonly tlsSecurityPolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#tls_security_policy OpensearchDomain#tls_security_policy}.

---

### OpensearchDomainEbsOptions <a name="OpensearchDomainEbsOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptions.Initializer"></a>

```typescript
import { opensearchDomain } from '@cdktf/provider-aws'

const opensearchDomainEbsOptions: opensearchDomain.OpensearchDomainEbsOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptions.property.ebsEnabled">ebsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#ebs_enabled OpensearchDomain#ebs_enabled}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptions.property.iops">iops</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#iops OpensearchDomain#iops}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptions.property.throughput">throughput</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#throughput OpensearchDomain#throughput}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptions.property.volumeSize">volumeSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#volume_size OpensearchDomain#volume_size}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptions.property.volumeType">volumeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#volume_type OpensearchDomain#volume_type}. |

---

##### `ebsEnabled`<sup>Required</sup> <a name="ebsEnabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptions.property.ebsEnabled"></a>

```typescript
public readonly ebsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#ebs_enabled OpensearchDomain#ebs_enabled}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptions.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#iops OpensearchDomain#iops}.

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptions.property.throughput"></a>

```typescript
public readonly throughput: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#throughput OpensearchDomain#throughput}.

---

##### `volumeSize`<sup>Optional</sup> <a name="volumeSize" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptions.property.volumeSize"></a>

```typescript
public readonly volumeSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#volume_size OpensearchDomain#volume_size}.

---

##### `volumeType`<sup>Optional</sup> <a name="volumeType" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptions.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#volume_type OpensearchDomain#volume_type}.

---

### OpensearchDomainEncryptAtRest <a name="OpensearchDomainEncryptAtRest" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRest.Initializer"></a>

```typescript
import { opensearchDomain } from '@cdktf/provider-aws'

const opensearchDomainEncryptAtRest: opensearchDomain.OpensearchDomainEncryptAtRest = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRest.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#enabled OpensearchDomain#enabled}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRest.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#kms_key_id OpensearchDomain#kms_key_id}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRest.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#enabled OpensearchDomain#enabled}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRest.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#kms_key_id OpensearchDomain#kms_key_id}.

---

### OpensearchDomainLogPublishingOptions <a name="OpensearchDomainLogPublishingOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptions.Initializer"></a>

```typescript
import { opensearchDomain } from '@cdktf/provider-aws'

const opensearchDomainLogPublishingOptions: opensearchDomain.OpensearchDomainLogPublishingOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptions.property.cloudwatchLogGroupArn">cloudwatchLogGroupArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#cloudwatch_log_group_arn OpensearchDomain#cloudwatch_log_group_arn}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptions.property.logType">logType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#log_type OpensearchDomain#log_type}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptions.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#enabled OpensearchDomain#enabled}. |

---

##### `cloudwatchLogGroupArn`<sup>Required</sup> <a name="cloudwatchLogGroupArn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptions.property.cloudwatchLogGroupArn"></a>

```typescript
public readonly cloudwatchLogGroupArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#cloudwatch_log_group_arn OpensearchDomain#cloudwatch_log_group_arn}.

---

##### `logType`<sup>Required</sup> <a name="logType" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptions.property.logType"></a>

```typescript
public readonly logType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#log_type OpensearchDomain#log_type}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptions.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#enabled OpensearchDomain#enabled}.

---

### OpensearchDomainNodeToNodeEncryption <a name="OpensearchDomainNodeToNodeEncryption" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryption.Initializer"></a>

```typescript
import { opensearchDomain } from '@cdktf/provider-aws'

const opensearchDomainNodeToNodeEncryption: opensearchDomain.OpensearchDomainNodeToNodeEncryption = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryption.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#enabled OpensearchDomain#enabled}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryption.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#enabled OpensearchDomain#enabled}.

---

### OpensearchDomainSnapshotOptions <a name="OpensearchDomainSnapshotOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptions.Initializer"></a>

```typescript
import { opensearchDomain } from '@cdktf/provider-aws'

const opensearchDomainSnapshotOptions: opensearchDomain.OpensearchDomainSnapshotOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptions.property.automatedSnapshotStartHour">automatedSnapshotStartHour</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#automated_snapshot_start_hour OpensearchDomain#automated_snapshot_start_hour}. |

---

##### `automatedSnapshotStartHour`<sup>Required</sup> <a name="automatedSnapshotStartHour" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptions.property.automatedSnapshotStartHour"></a>

```typescript
public readonly automatedSnapshotStartHour: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#automated_snapshot_start_hour OpensearchDomain#automated_snapshot_start_hour}.

---

### OpensearchDomainTimeouts <a name="OpensearchDomainTimeouts" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeouts.Initializer"></a>

```typescript
import { opensearchDomain } from '@cdktf/provider-aws'

const opensearchDomainTimeouts: opensearchDomain.OpensearchDomainTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#create OpensearchDomain#create}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#delete OpensearchDomain#delete}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#update OpensearchDomain#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#create OpensearchDomain#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#delete OpensearchDomain#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#update OpensearchDomain#update}.

---

### OpensearchDomainVpcOptions <a name="OpensearchDomainVpcOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptions.Initializer"></a>

```typescript
import { opensearchDomain } from '@cdktf/provider-aws'

const opensearchDomainVpcOptions: opensearchDomain.OpensearchDomainVpcOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptions.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#security_group_ids OpensearchDomain#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptions.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#subnet_ids OpensearchDomain#subnet_ids}. |

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptions.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#security_group_ids OpensearchDomain#security_group_ids}.

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptions.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#subnet_ids OpensearchDomain#subnet_ids}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference <a name="OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.Initializer"></a>

```typescript
import { opensearchDomain } from '@cdktf/provider-aws'

new opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resetMasterUserArn">resetMasterUserArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resetMasterUserName">resetMasterUserName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resetMasterUserPassword">resetMasterUserPassword</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMasterUserArn` <a name="resetMasterUserArn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resetMasterUserArn"></a>

```typescript
public resetMasterUserArn(): void
```

##### `resetMasterUserName` <a name="resetMasterUserName" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resetMasterUserName"></a>

```typescript
public resetMasterUserName(): void
```

##### `resetMasterUserPassword` <a name="resetMasterUserPassword" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resetMasterUserPassword"></a>

```typescript
public resetMasterUserPassword(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserArnInput">masterUserArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserNameInput">masterUserNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserPasswordInput">masterUserPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserArn">masterUserArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserName">masterUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserPassword">masterUserPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptions">OpensearchDomainAdvancedSecurityOptionsMasterUserOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `masterUserArnInput`<sup>Optional</sup> <a name="masterUserArnInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserArnInput"></a>

```typescript
public readonly masterUserArnInput: string;
```

- *Type:* string

---

##### `masterUserNameInput`<sup>Optional</sup> <a name="masterUserNameInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserNameInput"></a>

```typescript
public readonly masterUserNameInput: string;
```

- *Type:* string

---

##### `masterUserPasswordInput`<sup>Optional</sup> <a name="masterUserPasswordInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserPasswordInput"></a>

```typescript
public readonly masterUserPasswordInput: string;
```

- *Type:* string

---

##### `masterUserArn`<sup>Required</sup> <a name="masterUserArn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserArn"></a>

```typescript
public readonly masterUserArn: string;
```

- *Type:* string

---

##### `masterUserName`<sup>Required</sup> <a name="masterUserName" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserName"></a>

```typescript
public readonly masterUserName: string;
```

- *Type:* string

---

##### `masterUserPassword`<sup>Required</sup> <a name="masterUserPassword" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserPassword"></a>

```typescript
public readonly masterUserPassword: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OpensearchDomainAdvancedSecurityOptionsMasterUserOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptions">OpensearchDomainAdvancedSecurityOptionsMasterUserOptions</a>

---


### OpensearchDomainAdvancedSecurityOptionsOutputReference <a name="OpensearchDomainAdvancedSecurityOptionsOutputReference" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.Initializer"></a>

```typescript
import { opensearchDomain } from '@cdktf/provider-aws'

new opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.putMasterUserOptions">putMasterUserOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.resetAnonymousAuthEnabled">resetAnonymousAuthEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.resetInternalUserDatabaseEnabled">resetInternalUserDatabaseEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.resetMasterUserOptions">resetMasterUserOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMasterUserOptions` <a name="putMasterUserOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.putMasterUserOptions"></a>

```typescript
public putMasterUserOptions(value: OpensearchDomainAdvancedSecurityOptionsMasterUserOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.putMasterUserOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptions">OpensearchDomainAdvancedSecurityOptionsMasterUserOptions</a>

---

##### `resetAnonymousAuthEnabled` <a name="resetAnonymousAuthEnabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.resetAnonymousAuthEnabled"></a>

```typescript
public resetAnonymousAuthEnabled(): void
```

##### `resetInternalUserDatabaseEnabled` <a name="resetInternalUserDatabaseEnabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.resetInternalUserDatabaseEnabled"></a>

```typescript
public resetInternalUserDatabaseEnabled(): void
```

##### `resetMasterUserOptions` <a name="resetMasterUserOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.resetMasterUserOptions"></a>

```typescript
public resetMasterUserOptions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.masterUserOptions">masterUserOptions</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference">OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.anonymousAuthEnabledInput">anonymousAuthEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.internalUserDatabaseEnabledInput">internalUserDatabaseEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.masterUserOptionsInput">masterUserOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptions">OpensearchDomainAdvancedSecurityOptionsMasterUserOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.anonymousAuthEnabled">anonymousAuthEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.internalUserDatabaseEnabled">internalUserDatabaseEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptions">OpensearchDomainAdvancedSecurityOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `masterUserOptions`<sup>Required</sup> <a name="masterUserOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.masterUserOptions"></a>

```typescript
public readonly masterUserOptions: OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference">OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference</a>

---

##### `anonymousAuthEnabledInput`<sup>Optional</sup> <a name="anonymousAuthEnabledInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.anonymousAuthEnabledInput"></a>

```typescript
public readonly anonymousAuthEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalUserDatabaseEnabledInput`<sup>Optional</sup> <a name="internalUserDatabaseEnabledInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.internalUserDatabaseEnabledInput"></a>

```typescript
public readonly internalUserDatabaseEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `masterUserOptionsInput`<sup>Optional</sup> <a name="masterUserOptionsInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.masterUserOptionsInput"></a>

```typescript
public readonly masterUserOptionsInput: OpensearchDomainAdvancedSecurityOptionsMasterUserOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptions">OpensearchDomainAdvancedSecurityOptionsMasterUserOptions</a>

---

##### `anonymousAuthEnabled`<sup>Required</sup> <a name="anonymousAuthEnabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.anonymousAuthEnabled"></a>

```typescript
public readonly anonymousAuthEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalUserDatabaseEnabled`<sup>Required</sup> <a name="internalUserDatabaseEnabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.internalUserDatabaseEnabled"></a>

```typescript
public readonly internalUserDatabaseEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OpensearchDomainAdvancedSecurityOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptions">OpensearchDomainAdvancedSecurityOptions</a>

---


### OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference <a name="OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.Initializer"></a>

```typescript
import { opensearchDomain } from '@cdktf/provider-aws'

new opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.unitInput">unitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration">OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.unitInput"></a>

```typescript
public readonly unitInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration">OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration</a>

---


### OpensearchDomainAutoTuneOptionsMaintenanceScheduleList <a name="OpensearchDomainAutoTuneOptionsMaintenanceScheduleList" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.Initializer"></a>

```typescript
import { opensearchDomain } from '@cdktf/provider-aws'

new opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.get"></a>

```typescript
public get(index: number): OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceSchedule">OpensearchDomainAutoTuneOptionsMaintenanceSchedule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OpensearchDomainAutoTuneOptionsMaintenanceSchedule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceSchedule">OpensearchDomainAutoTuneOptionsMaintenanceSchedule</a>[]

---


### OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference <a name="OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer"></a>

```typescript
import { opensearchDomain } from '@cdktf/provider-aws'

new opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.putDuration">putDuration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDuration` <a name="putDuration" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.putDuration"></a>

```typescript
public putDuration(value: OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.putDuration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration">OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.duration">duration</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference">OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.cronExpressionForRecurrenceInput">cronExpressionForRecurrenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.durationInput">durationInput</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration">OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.startAtInput">startAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.cronExpressionForRecurrence">cronExpressionForRecurrence</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.startAt">startAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceSchedule">OpensearchDomainAutoTuneOptionsMaintenanceSchedule</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.duration"></a>

```typescript
public readonly duration: OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference">OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference</a>

---

##### `cronExpressionForRecurrenceInput`<sup>Optional</sup> <a name="cronExpressionForRecurrenceInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.cronExpressionForRecurrenceInput"></a>

```typescript
public readonly cronExpressionForRecurrenceInput: string;
```

- *Type:* string

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.durationInput"></a>

```typescript
public readonly durationInput: OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration">OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration</a>

---

##### `startAtInput`<sup>Optional</sup> <a name="startAtInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.startAtInput"></a>

```typescript
public readonly startAtInput: string;
```

- *Type:* string

---

##### `cronExpressionForRecurrence`<sup>Required</sup> <a name="cronExpressionForRecurrence" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.cronExpressionForRecurrence"></a>

```typescript
public readonly cronExpressionForRecurrence: string;
```

- *Type:* string

---

##### `startAt`<sup>Required</sup> <a name="startAt" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.startAt"></a>

```typescript
public readonly startAt: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OpensearchDomainAutoTuneOptionsMaintenanceSchedule | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceSchedule">OpensearchDomainAutoTuneOptionsMaintenanceSchedule</a> | cdktf.IResolvable

---


### OpensearchDomainAutoTuneOptionsOutputReference <a name="OpensearchDomainAutoTuneOptionsOutputReference" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.Initializer"></a>

```typescript
import { opensearchDomain } from '@cdktf/provider-aws'

new opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.putMaintenanceSchedule">putMaintenanceSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.resetMaintenanceSchedule">resetMaintenanceSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.resetRollbackOnDisable">resetRollbackOnDisable</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMaintenanceSchedule` <a name="putMaintenanceSchedule" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.putMaintenanceSchedule"></a>

```typescript
public putMaintenanceSchedule(value: IResolvable | OpensearchDomainAutoTuneOptionsMaintenanceSchedule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.putMaintenanceSchedule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceSchedule">OpensearchDomainAutoTuneOptionsMaintenanceSchedule</a>[]

---

##### `resetMaintenanceSchedule` <a name="resetMaintenanceSchedule" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.resetMaintenanceSchedule"></a>

```typescript
public resetMaintenanceSchedule(): void
```

##### `resetRollbackOnDisable` <a name="resetRollbackOnDisable" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.resetRollbackOnDisable"></a>

```typescript
public resetRollbackOnDisable(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.property.maintenanceSchedule">maintenanceSchedule</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList">OpensearchDomainAutoTuneOptionsMaintenanceScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.property.desiredStateInput">desiredStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.property.maintenanceScheduleInput">maintenanceScheduleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceSchedule">OpensearchDomainAutoTuneOptionsMaintenanceSchedule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.property.rollbackOnDisableInput">rollbackOnDisableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.property.desiredState">desiredState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.property.rollbackOnDisable">rollbackOnDisable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptions">OpensearchDomainAutoTuneOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maintenanceSchedule`<sup>Required</sup> <a name="maintenanceSchedule" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.property.maintenanceSchedule"></a>

```typescript
public readonly maintenanceSchedule: OpensearchDomainAutoTuneOptionsMaintenanceScheduleList;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList">OpensearchDomainAutoTuneOptionsMaintenanceScheduleList</a>

---

##### `desiredStateInput`<sup>Optional</sup> <a name="desiredStateInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.property.desiredStateInput"></a>

```typescript
public readonly desiredStateInput: string;
```

- *Type:* string

---

##### `maintenanceScheduleInput`<sup>Optional</sup> <a name="maintenanceScheduleInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.property.maintenanceScheduleInput"></a>

```typescript
public readonly maintenanceScheduleInput: IResolvable | OpensearchDomainAutoTuneOptionsMaintenanceSchedule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceSchedule">OpensearchDomainAutoTuneOptionsMaintenanceSchedule</a>[]

---

##### `rollbackOnDisableInput`<sup>Optional</sup> <a name="rollbackOnDisableInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.property.rollbackOnDisableInput"></a>

```typescript
public readonly rollbackOnDisableInput: string;
```

- *Type:* string

---

##### `desiredState`<sup>Required</sup> <a name="desiredState" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.property.desiredState"></a>

```typescript
public readonly desiredState: string;
```

- *Type:* string

---

##### `rollbackOnDisable`<sup>Required</sup> <a name="rollbackOnDisable" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.property.rollbackOnDisable"></a>

```typescript
public readonly rollbackOnDisable: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OpensearchDomainAutoTuneOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptions">OpensearchDomainAutoTuneOptions</a>

---


### OpensearchDomainClusterConfigColdStorageOptionsOutputReference <a name="OpensearchDomainClusterConfigColdStorageOptionsOutputReference" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.Initializer"></a>

```typescript
import { opensearchDomain } from '@cdktf/provider-aws'

new opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptions">OpensearchDomainClusterConfigColdStorageOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OpensearchDomainClusterConfigColdStorageOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptions">OpensearchDomainClusterConfigColdStorageOptions</a>

---


### OpensearchDomainClusterConfigOutputReference <a name="OpensearchDomainClusterConfigOutputReference" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.Initializer"></a>

```typescript
import { opensearchDomain } from '@cdktf/provider-aws'

new opensearchDomain.OpensearchDomainClusterConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.putColdStorageOptions">putColdStorageOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.putZoneAwarenessConfig">putZoneAwarenessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetColdStorageOptions">resetColdStorageOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetDedicatedMasterCount">resetDedicatedMasterCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetDedicatedMasterEnabled">resetDedicatedMasterEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetDedicatedMasterType">resetDedicatedMasterType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetInstanceCount">resetInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetInstanceType">resetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetWarmCount">resetWarmCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetWarmEnabled">resetWarmEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetWarmType">resetWarmType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetZoneAwarenessConfig">resetZoneAwarenessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetZoneAwarenessEnabled">resetZoneAwarenessEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putColdStorageOptions` <a name="putColdStorageOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.putColdStorageOptions"></a>

```typescript
public putColdStorageOptions(value: OpensearchDomainClusterConfigColdStorageOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.putColdStorageOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptions">OpensearchDomainClusterConfigColdStorageOptions</a>

---

##### `putZoneAwarenessConfig` <a name="putZoneAwarenessConfig" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.putZoneAwarenessConfig"></a>

```typescript
public putZoneAwarenessConfig(value: OpensearchDomainClusterConfigZoneAwarenessConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.putZoneAwarenessConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfig">OpensearchDomainClusterConfigZoneAwarenessConfig</a>

---

##### `resetColdStorageOptions` <a name="resetColdStorageOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetColdStorageOptions"></a>

```typescript
public resetColdStorageOptions(): void
```

##### `resetDedicatedMasterCount` <a name="resetDedicatedMasterCount" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetDedicatedMasterCount"></a>

```typescript
public resetDedicatedMasterCount(): void
```

##### `resetDedicatedMasterEnabled` <a name="resetDedicatedMasterEnabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetDedicatedMasterEnabled"></a>

```typescript
public resetDedicatedMasterEnabled(): void
```

##### `resetDedicatedMasterType` <a name="resetDedicatedMasterType" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetDedicatedMasterType"></a>

```typescript
public resetDedicatedMasterType(): void
```

##### `resetInstanceCount` <a name="resetInstanceCount" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetInstanceCount"></a>

```typescript
public resetInstanceCount(): void
```

##### `resetInstanceType` <a name="resetInstanceType" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetInstanceType"></a>

```typescript
public resetInstanceType(): void
```

##### `resetWarmCount` <a name="resetWarmCount" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetWarmCount"></a>

```typescript
public resetWarmCount(): void
```

##### `resetWarmEnabled` <a name="resetWarmEnabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetWarmEnabled"></a>

```typescript
public resetWarmEnabled(): void
```

##### `resetWarmType` <a name="resetWarmType" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetWarmType"></a>

```typescript
public resetWarmType(): void
```

##### `resetZoneAwarenessConfig` <a name="resetZoneAwarenessConfig" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetZoneAwarenessConfig"></a>

```typescript
public resetZoneAwarenessConfig(): void
```

##### `resetZoneAwarenessEnabled` <a name="resetZoneAwarenessEnabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetZoneAwarenessEnabled"></a>

```typescript
public resetZoneAwarenessEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.coldStorageOptions">coldStorageOptions</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference">OpensearchDomainClusterConfigColdStorageOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.zoneAwarenessConfig">zoneAwarenessConfig</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference">OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.coldStorageOptionsInput">coldStorageOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptions">OpensearchDomainClusterConfigColdStorageOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.dedicatedMasterCountInput">dedicatedMasterCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.dedicatedMasterEnabledInput">dedicatedMasterEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.dedicatedMasterTypeInput">dedicatedMasterTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.instanceCountInput">instanceCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.instanceTypeInput">instanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.warmCountInput">warmCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.warmEnabledInput">warmEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.warmTypeInput">warmTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.zoneAwarenessConfigInput">zoneAwarenessConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfig">OpensearchDomainClusterConfigZoneAwarenessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.zoneAwarenessEnabledInput">zoneAwarenessEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.dedicatedMasterCount">dedicatedMasterCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.dedicatedMasterEnabled">dedicatedMasterEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.dedicatedMasterType">dedicatedMasterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.instanceCount">instanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.warmCount">warmCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.warmEnabled">warmEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.warmType">warmType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.zoneAwarenessEnabled">zoneAwarenessEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig">OpensearchDomainClusterConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `coldStorageOptions`<sup>Required</sup> <a name="coldStorageOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.coldStorageOptions"></a>

```typescript
public readonly coldStorageOptions: OpensearchDomainClusterConfigColdStorageOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference">OpensearchDomainClusterConfigColdStorageOptionsOutputReference</a>

---

##### `zoneAwarenessConfig`<sup>Required</sup> <a name="zoneAwarenessConfig" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.zoneAwarenessConfig"></a>

```typescript
public readonly zoneAwarenessConfig: OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference">OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference</a>

---

##### `coldStorageOptionsInput`<sup>Optional</sup> <a name="coldStorageOptionsInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.coldStorageOptionsInput"></a>

```typescript
public readonly coldStorageOptionsInput: OpensearchDomainClusterConfigColdStorageOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptions">OpensearchDomainClusterConfigColdStorageOptions</a>

---

##### `dedicatedMasterCountInput`<sup>Optional</sup> <a name="dedicatedMasterCountInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.dedicatedMasterCountInput"></a>

```typescript
public readonly dedicatedMasterCountInput: number;
```

- *Type:* number

---

##### `dedicatedMasterEnabledInput`<sup>Optional</sup> <a name="dedicatedMasterEnabledInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.dedicatedMasterEnabledInput"></a>

```typescript
public readonly dedicatedMasterEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dedicatedMasterTypeInput`<sup>Optional</sup> <a name="dedicatedMasterTypeInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.dedicatedMasterTypeInput"></a>

```typescript
public readonly dedicatedMasterTypeInput: string;
```

- *Type:* string

---

##### `instanceCountInput`<sup>Optional</sup> <a name="instanceCountInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.instanceCountInput"></a>

```typescript
public readonly instanceCountInput: number;
```

- *Type:* number

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.instanceTypeInput"></a>

```typescript
public readonly instanceTypeInput: string;
```

- *Type:* string

---

##### `warmCountInput`<sup>Optional</sup> <a name="warmCountInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.warmCountInput"></a>

```typescript
public readonly warmCountInput: number;
```

- *Type:* number

---

##### `warmEnabledInput`<sup>Optional</sup> <a name="warmEnabledInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.warmEnabledInput"></a>

```typescript
public readonly warmEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `warmTypeInput`<sup>Optional</sup> <a name="warmTypeInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.warmTypeInput"></a>

```typescript
public readonly warmTypeInput: string;
```

- *Type:* string

---

##### `zoneAwarenessConfigInput`<sup>Optional</sup> <a name="zoneAwarenessConfigInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.zoneAwarenessConfigInput"></a>

```typescript
public readonly zoneAwarenessConfigInput: OpensearchDomainClusterConfigZoneAwarenessConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfig">OpensearchDomainClusterConfigZoneAwarenessConfig</a>

---

##### `zoneAwarenessEnabledInput`<sup>Optional</sup> <a name="zoneAwarenessEnabledInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.zoneAwarenessEnabledInput"></a>

```typescript
public readonly zoneAwarenessEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dedicatedMasterCount`<sup>Required</sup> <a name="dedicatedMasterCount" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.dedicatedMasterCount"></a>

```typescript
public readonly dedicatedMasterCount: number;
```

- *Type:* number

---

##### `dedicatedMasterEnabled`<sup>Required</sup> <a name="dedicatedMasterEnabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.dedicatedMasterEnabled"></a>

```typescript
public readonly dedicatedMasterEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dedicatedMasterType`<sup>Required</sup> <a name="dedicatedMasterType" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.dedicatedMasterType"></a>

```typescript
public readonly dedicatedMasterType: string;
```

- *Type:* string

---

##### `instanceCount`<sup>Required</sup> <a name="instanceCount" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.instanceCount"></a>

```typescript
public readonly instanceCount: number;
```

- *Type:* number

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `warmCount`<sup>Required</sup> <a name="warmCount" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.warmCount"></a>

```typescript
public readonly warmCount: number;
```

- *Type:* number

---

##### `warmEnabled`<sup>Required</sup> <a name="warmEnabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.warmEnabled"></a>

```typescript
public readonly warmEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `warmType`<sup>Required</sup> <a name="warmType" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.warmType"></a>

```typescript
public readonly warmType: string;
```

- *Type:* string

---

##### `zoneAwarenessEnabled`<sup>Required</sup> <a name="zoneAwarenessEnabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.zoneAwarenessEnabled"></a>

```typescript
public readonly zoneAwarenessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OpensearchDomainClusterConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig">OpensearchDomainClusterConfig</a>

---


### OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference <a name="OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer"></a>

```typescript
import { opensearchDomain } from '@cdktf/provider-aws'

new opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.resetAvailabilityZoneCount">resetAvailabilityZoneCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAvailabilityZoneCount` <a name="resetAvailabilityZoneCount" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.resetAvailabilityZoneCount"></a>

```typescript
public resetAvailabilityZoneCount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.availabilityZoneCountInput">availabilityZoneCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.availabilityZoneCount">availabilityZoneCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfig">OpensearchDomainClusterConfigZoneAwarenessConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityZoneCountInput`<sup>Optional</sup> <a name="availabilityZoneCountInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.availabilityZoneCountInput"></a>

```typescript
public readonly availabilityZoneCountInput: number;
```

- *Type:* number

---

##### `availabilityZoneCount`<sup>Required</sup> <a name="availabilityZoneCount" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.availabilityZoneCount"></a>

```typescript
public readonly availabilityZoneCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OpensearchDomainClusterConfigZoneAwarenessConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfig">OpensearchDomainClusterConfigZoneAwarenessConfig</a>

---


### OpensearchDomainCognitoOptionsOutputReference <a name="OpensearchDomainCognitoOptionsOutputReference" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.Initializer"></a>

```typescript
import { opensearchDomain } from '@cdktf/provider-aws'

new opensearchDomain.OpensearchDomainCognitoOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.identityPoolIdInput">identityPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.userPoolIdInput">userPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.identityPoolId">identityPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.userPoolId">userPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptions">OpensearchDomainCognitoOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `identityPoolIdInput`<sup>Optional</sup> <a name="identityPoolIdInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.identityPoolIdInput"></a>

```typescript
public readonly identityPoolIdInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `userPoolIdInput`<sup>Optional</sup> <a name="userPoolIdInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.userPoolIdInput"></a>

```typescript
public readonly userPoolIdInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `identityPoolId`<sup>Required</sup> <a name="identityPoolId" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.identityPoolId"></a>

```typescript
public readonly identityPoolId: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.userPoolId"></a>

```typescript
public readonly userPoolId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OpensearchDomainCognitoOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptions">OpensearchDomainCognitoOptions</a>

---


### OpensearchDomainDomainEndpointOptionsOutputReference <a name="OpensearchDomainDomainEndpointOptionsOutputReference" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.Initializer"></a>

```typescript
import { opensearchDomain } from '@cdktf/provider-aws'

new opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.resetCustomEndpoint">resetCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.resetCustomEndpointCertificateArn">resetCustomEndpointCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.resetCustomEndpointEnabled">resetCustomEndpointEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.resetEnforceHttps">resetEnforceHttps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.resetTlsSecurityPolicy">resetTlsSecurityPolicy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCustomEndpoint` <a name="resetCustomEndpoint" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.resetCustomEndpoint"></a>

```typescript
public resetCustomEndpoint(): void
```

##### `resetCustomEndpointCertificateArn` <a name="resetCustomEndpointCertificateArn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.resetCustomEndpointCertificateArn"></a>

```typescript
public resetCustomEndpointCertificateArn(): void
```

##### `resetCustomEndpointEnabled` <a name="resetCustomEndpointEnabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.resetCustomEndpointEnabled"></a>

```typescript
public resetCustomEndpointEnabled(): void
```

##### `resetEnforceHttps` <a name="resetEnforceHttps" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.resetEnforceHttps"></a>

```typescript
public resetEnforceHttps(): void
```

##### `resetTlsSecurityPolicy` <a name="resetTlsSecurityPolicy" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.resetTlsSecurityPolicy"></a>

```typescript
public resetTlsSecurityPolicy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.customEndpointCertificateArnInput">customEndpointCertificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.customEndpointEnabledInput">customEndpointEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.customEndpointInput">customEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.enforceHttpsInput">enforceHttpsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.tlsSecurityPolicyInput">tlsSecurityPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.customEndpoint">customEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.customEndpointCertificateArn">customEndpointCertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.customEndpointEnabled">customEndpointEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.enforceHttps">enforceHttps</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.tlsSecurityPolicy">tlsSecurityPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptions">OpensearchDomainDomainEndpointOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customEndpointCertificateArnInput`<sup>Optional</sup> <a name="customEndpointCertificateArnInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.customEndpointCertificateArnInput"></a>

```typescript
public readonly customEndpointCertificateArnInput: string;
```

- *Type:* string

---

##### `customEndpointEnabledInput`<sup>Optional</sup> <a name="customEndpointEnabledInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.customEndpointEnabledInput"></a>

```typescript
public readonly customEndpointEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `customEndpointInput`<sup>Optional</sup> <a name="customEndpointInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.customEndpointInput"></a>

```typescript
public readonly customEndpointInput: string;
```

- *Type:* string

---

##### `enforceHttpsInput`<sup>Optional</sup> <a name="enforceHttpsInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.enforceHttpsInput"></a>

```typescript
public readonly enforceHttpsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tlsSecurityPolicyInput`<sup>Optional</sup> <a name="tlsSecurityPolicyInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.tlsSecurityPolicyInput"></a>

```typescript
public readonly tlsSecurityPolicyInput: string;
```

- *Type:* string

---

##### `customEndpoint`<sup>Required</sup> <a name="customEndpoint" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.customEndpoint"></a>

```typescript
public readonly customEndpoint: string;
```

- *Type:* string

---

##### `customEndpointCertificateArn`<sup>Required</sup> <a name="customEndpointCertificateArn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.customEndpointCertificateArn"></a>

```typescript
public readonly customEndpointCertificateArn: string;
```

- *Type:* string

---

##### `customEndpointEnabled`<sup>Required</sup> <a name="customEndpointEnabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.customEndpointEnabled"></a>

```typescript
public readonly customEndpointEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enforceHttps`<sup>Required</sup> <a name="enforceHttps" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.enforceHttps"></a>

```typescript
public readonly enforceHttps: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tlsSecurityPolicy`<sup>Required</sup> <a name="tlsSecurityPolicy" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.tlsSecurityPolicy"></a>

```typescript
public readonly tlsSecurityPolicy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OpensearchDomainDomainEndpointOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptions">OpensearchDomainDomainEndpointOptions</a>

---


### OpensearchDomainEbsOptionsOutputReference <a name="OpensearchDomainEbsOptionsOutputReference" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.Initializer"></a>

```typescript
import { opensearchDomain } from '@cdktf/provider-aws'

new opensearchDomain.OpensearchDomainEbsOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.resetIops">resetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.resetThroughput">resetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.resetVolumeSize">resetVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.resetVolumeType">resetVolumeType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIops` <a name="resetIops" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.resetIops"></a>

```typescript
public resetIops(): void
```

##### `resetThroughput` <a name="resetThroughput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.resetThroughput"></a>

```typescript
public resetThroughput(): void
```

##### `resetVolumeSize` <a name="resetVolumeSize" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.resetVolumeSize"></a>

```typescript
public resetVolumeSize(): void
```

##### `resetVolumeType` <a name="resetVolumeType" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.resetVolumeType"></a>

```typescript
public resetVolumeType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.ebsEnabledInput">ebsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.iopsInput">iopsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.throughputInput">throughputInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.volumeSizeInput">volumeSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.volumeTypeInput">volumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.ebsEnabled">ebsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.iops">iops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.throughput">throughput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.volumeSize">volumeSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.volumeType">volumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptions">OpensearchDomainEbsOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ebsEnabledInput`<sup>Optional</sup> <a name="ebsEnabledInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.ebsEnabledInput"></a>

```typescript
public readonly ebsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.iopsInput"></a>

```typescript
public readonly iopsInput: number;
```

- *Type:* number

---

##### `throughputInput`<sup>Optional</sup> <a name="throughputInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.throughputInput"></a>

```typescript
public readonly throughputInput: number;
```

- *Type:* number

---

##### `volumeSizeInput`<sup>Optional</sup> <a name="volumeSizeInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.volumeSizeInput"></a>

```typescript
public readonly volumeSizeInput: number;
```

- *Type:* number

---

##### `volumeTypeInput`<sup>Optional</sup> <a name="volumeTypeInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.volumeTypeInput"></a>

```typescript
public readonly volumeTypeInput: string;
```

- *Type:* string

---

##### `ebsEnabled`<sup>Required</sup> <a name="ebsEnabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.ebsEnabled"></a>

```typescript
public readonly ebsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.throughput"></a>

```typescript
public readonly throughput: number;
```

- *Type:* number

---

##### `volumeSize`<sup>Required</sup> <a name="volumeSize" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.volumeSize"></a>

```typescript
public readonly volumeSize: number;
```

- *Type:* number

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OpensearchDomainEbsOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptions">OpensearchDomainEbsOptions</a>

---


### OpensearchDomainEncryptAtRestOutputReference <a name="OpensearchDomainEncryptAtRestOutputReference" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.Initializer"></a>

```typescript
import { opensearchDomain } from '@cdktf/provider-aws'

new opensearchDomain.OpensearchDomainEncryptAtRestOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRest">OpensearchDomainEncryptAtRest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OpensearchDomainEncryptAtRest;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRest">OpensearchDomainEncryptAtRest</a>

---


### OpensearchDomainLogPublishingOptionsList <a name="OpensearchDomainLogPublishingOptionsList" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.Initializer"></a>

```typescript
import { opensearchDomain } from '@cdktf/provider-aws'

new opensearchDomain.OpensearchDomainLogPublishingOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.get"></a>

```typescript
public get(index: number): OpensearchDomainLogPublishingOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptions">OpensearchDomainLogPublishingOptions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OpensearchDomainLogPublishingOptions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptions">OpensearchDomainLogPublishingOptions</a>[]

---


### OpensearchDomainLogPublishingOptionsOutputReference <a name="OpensearchDomainLogPublishingOptionsOutputReference" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.Initializer"></a>

```typescript
import { opensearchDomain } from '@cdktf/provider-aws'

new opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.property.cloudwatchLogGroupArnInput">cloudwatchLogGroupArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.property.logTypeInput">logTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.property.cloudwatchLogGroupArn">cloudwatchLogGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.property.logType">logType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptions">OpensearchDomainLogPublishingOptions</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudwatchLogGroupArnInput`<sup>Optional</sup> <a name="cloudwatchLogGroupArnInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.property.cloudwatchLogGroupArnInput"></a>

```typescript
public readonly cloudwatchLogGroupArnInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `logTypeInput`<sup>Optional</sup> <a name="logTypeInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.property.logTypeInput"></a>

```typescript
public readonly logTypeInput: string;
```

- *Type:* string

---

##### `cloudwatchLogGroupArn`<sup>Required</sup> <a name="cloudwatchLogGroupArn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.property.cloudwatchLogGroupArn"></a>

```typescript
public readonly cloudwatchLogGroupArn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `logType`<sup>Required</sup> <a name="logType" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.property.logType"></a>

```typescript
public readonly logType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OpensearchDomainLogPublishingOptions | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptions">OpensearchDomainLogPublishingOptions</a> | cdktf.IResolvable

---


### OpensearchDomainNodeToNodeEncryptionOutputReference <a name="OpensearchDomainNodeToNodeEncryptionOutputReference" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.Initializer"></a>

```typescript
import { opensearchDomain } from '@cdktf/provider-aws'

new opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryption">OpensearchDomainNodeToNodeEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OpensearchDomainNodeToNodeEncryption;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryption">OpensearchDomainNodeToNodeEncryption</a>

---


### OpensearchDomainSnapshotOptionsOutputReference <a name="OpensearchDomainSnapshotOptionsOutputReference" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.Initializer"></a>

```typescript
import { opensearchDomain } from '@cdktf/provider-aws'

new opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.property.automatedSnapshotStartHourInput">automatedSnapshotStartHourInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.property.automatedSnapshotStartHour">automatedSnapshotStartHour</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptions">OpensearchDomainSnapshotOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `automatedSnapshotStartHourInput`<sup>Optional</sup> <a name="automatedSnapshotStartHourInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.property.automatedSnapshotStartHourInput"></a>

```typescript
public readonly automatedSnapshotStartHourInput: number;
```

- *Type:* number

---

##### `automatedSnapshotStartHour`<sup>Required</sup> <a name="automatedSnapshotStartHour" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.property.automatedSnapshotStartHour"></a>

```typescript
public readonly automatedSnapshotStartHour: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OpensearchDomainSnapshotOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptions">OpensearchDomainSnapshotOptions</a>

---


### OpensearchDomainTimeoutsOutputReference <a name="OpensearchDomainTimeoutsOutputReference" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.Initializer"></a>

```typescript
import { opensearchDomain } from '@cdktf/provider-aws'

new opensearchDomain.OpensearchDomainTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeouts">OpensearchDomainTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OpensearchDomainTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeouts">OpensearchDomainTimeouts</a> | cdktf.IResolvable

---


### OpensearchDomainVpcOptionsOutputReference <a name="OpensearchDomainVpcOptionsOutputReference" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.Initializer"></a>

```typescript
import { opensearchDomain } from '@cdktf/provider-aws'

new opensearchDomain.OpensearchDomainVpcOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.resetSubnetIds">resetSubnetIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.resetSecurityGroupIds"></a>

```typescript
public resetSecurityGroupIds(): void
```

##### `resetSubnetIds` <a name="resetSubnetIds" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.resetSubnetIds"></a>

```typescript
public resetSubnetIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptions">OpensearchDomainVpcOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.property.securityGroupIdsInput"></a>

```typescript
public readonly securityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.property.subnetIdsInput"></a>

```typescript
public readonly subnetIdsInput: string[];
```

- *Type:* string[]

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OpensearchDomainVpcOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptions">OpensearchDomainVpcOptions</a>

---



