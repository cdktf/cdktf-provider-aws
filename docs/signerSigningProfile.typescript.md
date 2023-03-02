# `signerSigningProfile` Submodule <a name="`signerSigningProfile` Submodule" id="@cdktf/provider-aws.signerSigningProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SignerSigningProfile <a name="SignerSigningProfile" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile aws_signer_signing_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.Initializer"></a>

```typescript
import { signerSigningProfile } from '@cdktf/provider-aws'

new signerSigningProfile.SignerSigningProfile(scope: Construct, id: string, config: SignerSigningProfileConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig">SignerSigningProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig">SignerSigningProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.putSignatureValidityPeriod">putSignatureValidityPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.resetNamePrefix">resetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.resetSignatureValidityPeriod">resetSignatureValidityPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putSignatureValidityPeriod` <a name="putSignatureValidityPeriod" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.putSignatureValidityPeriod"></a>

```typescript
public putSignatureValidityPeriod(value: SignerSigningProfileSignatureValidityPeriod): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.putSignatureValidityPeriod.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriod">SignerSigningProfileSignatureValidityPeriod</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNamePrefix` <a name="resetNamePrefix" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.resetNamePrefix"></a>

```typescript
public resetNamePrefix(): void
```

##### `resetSignatureValidityPeriod` <a name="resetSignatureValidityPeriod" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.resetSignatureValidityPeriod"></a>

```typescript
public resetSignatureValidityPeriod(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.isConstruct"></a>

```typescript
import { signerSigningProfile } from '@cdktf/provider-aws'

signerSigningProfile.SignerSigningProfile.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.isTerraformElement"></a>

```typescript
import { signerSigningProfile } from '@cdktf/provider-aws'

signerSigningProfile.SignerSigningProfile.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.isTerraformResource"></a>

```typescript
import { signerSigningProfile } from '@cdktf/provider-aws'

signerSigningProfile.SignerSigningProfile.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.platformDisplayName">platformDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.revocationRecord">revocationRecord</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordList">SignerSigningProfileRevocationRecordList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.signatureValidityPeriod">signatureValidityPeriod</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference">SignerSigningProfileSignatureValidityPeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.versionArn">versionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.namePrefixInput">namePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.platformIdInput">platformIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.signatureValidityPeriodInput">signatureValidityPeriodInput</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriod">SignerSigningProfileSignatureValidityPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.namePrefix">namePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.platformId">platformId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `platformDisplayName`<sup>Required</sup> <a name="platformDisplayName" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.platformDisplayName"></a>

```typescript
public readonly platformDisplayName: string;
```

- *Type:* string

---

##### `revocationRecord`<sup>Required</sup> <a name="revocationRecord" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.revocationRecord"></a>

```typescript
public readonly revocationRecord: SignerSigningProfileRevocationRecordList;
```

- *Type:* <a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordList">SignerSigningProfileRevocationRecordList</a>

---

##### `signatureValidityPeriod`<sup>Required</sup> <a name="signatureValidityPeriod" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.signatureValidityPeriod"></a>

```typescript
public readonly signatureValidityPeriod: SignerSigningProfileSignatureValidityPeriodOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference">SignerSigningProfileSignatureValidityPeriodOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `versionArn`<sup>Required</sup> <a name="versionArn" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.versionArn"></a>

```typescript
public readonly versionArn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namePrefixInput`<sup>Optional</sup> <a name="namePrefixInput" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.namePrefixInput"></a>

```typescript
public readonly namePrefixInput: string;
```

- *Type:* string

---

##### `platformIdInput`<sup>Optional</sup> <a name="platformIdInput" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.platformIdInput"></a>

```typescript
public readonly platformIdInput: string;
```

- *Type:* string

---

##### `signatureValidityPeriodInput`<sup>Optional</sup> <a name="signatureValidityPeriodInput" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.signatureValidityPeriodInput"></a>

```typescript
public readonly signatureValidityPeriodInput: SignerSigningProfileSignatureValidityPeriod;
```

- *Type:* <a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriod">SignerSigningProfileSignatureValidityPeriod</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namePrefix`<sup>Required</sup> <a name="namePrefix" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

---

##### `platformId`<sup>Required</sup> <a name="platformId" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.platformId"></a>

```typescript
public readonly platformId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfile.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SignerSigningProfileConfig <a name="SignerSigningProfileConfig" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.Initializer"></a>

```typescript
import { signerSigningProfile } from '@cdktf/provider-aws'

const signerSigningProfileConfig: signerSigningProfile.SignerSigningProfileConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.property.platformId">platformId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile#platform_id SignerSigningProfile#platform_id}. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile#id SignerSigningProfile#id}. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile#name SignerSigningProfile#name}. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.property.namePrefix">namePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile#name_prefix SignerSigningProfile#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.property.signatureValidityPeriod">signatureValidityPeriod</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriod">SignerSigningProfileSignatureValidityPeriod</a></code> | signature_validity_period block. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile#tags SignerSigningProfile#tags}. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile#tags_all SignerSigningProfile#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `platformId`<sup>Required</sup> <a name="platformId" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.property.platformId"></a>

```typescript
public readonly platformId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile#platform_id SignerSigningProfile#platform_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile#id SignerSigningProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile#name SignerSigningProfile#name}.

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile#name_prefix SignerSigningProfile#name_prefix}.

---

##### `signatureValidityPeriod`<sup>Optional</sup> <a name="signatureValidityPeriod" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.property.signatureValidityPeriod"></a>

```typescript
public readonly signatureValidityPeriod: SignerSigningProfileSignatureValidityPeriod;
```

- *Type:* <a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriod">SignerSigningProfileSignatureValidityPeriod</a>

signature_validity_period block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile#signature_validity_period SignerSigningProfile#signature_validity_period}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile#tags SignerSigningProfile#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile#tags_all SignerSigningProfile#tags_all}.

---

### SignerSigningProfileRevocationRecord <a name="SignerSigningProfileRevocationRecord" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecord"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecord.Initializer"></a>

```typescript
import { signerSigningProfile } from '@cdktf/provider-aws'

const signerSigningProfileRevocationRecord: signerSigningProfile.SignerSigningProfileRevocationRecord = { ... }
```


### SignerSigningProfileSignatureValidityPeriod <a name="SignerSigningProfileSignatureValidityPeriod" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriod"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriod.Initializer"></a>

```typescript
import { signerSigningProfile } from '@cdktf/provider-aws'

const signerSigningProfileSignatureValidityPeriod: signerSigningProfile.SignerSigningProfileSignatureValidityPeriod = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriod.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile#type SignerSigningProfile#type}. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriod.property.value">value</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile#value SignerSigningProfile#value}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriod.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile#type SignerSigningProfile#type}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriod.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile#value SignerSigningProfile#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### SignerSigningProfileRevocationRecordList <a name="SignerSigningProfileRevocationRecordList" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordList.Initializer"></a>

```typescript
import { signerSigningProfile } from '@cdktf/provider-aws'

new signerSigningProfile.SignerSigningProfileRevocationRecordList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordList.get"></a>

```typescript
public get(index: number): SignerSigningProfileRevocationRecordOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### SignerSigningProfileRevocationRecordOutputReference <a name="SignerSigningProfileRevocationRecordOutputReference" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.Initializer"></a>

```typescript
import { signerSigningProfile } from '@cdktf/provider-aws'

new signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.property.revocationEffectiveFrom">revocationEffectiveFrom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.property.revokedAt">revokedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.property.revokedBy">revokedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecord">SignerSigningProfileRevocationRecord</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `revocationEffectiveFrom`<sup>Required</sup> <a name="revocationEffectiveFrom" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.property.revocationEffectiveFrom"></a>

```typescript
public readonly revocationEffectiveFrom: string;
```

- *Type:* string

---

##### `revokedAt`<sup>Required</sup> <a name="revokedAt" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.property.revokedAt"></a>

```typescript
public readonly revokedAt: string;
```

- *Type:* string

---

##### `revokedBy`<sup>Required</sup> <a name="revokedBy" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.property.revokedBy"></a>

```typescript
public readonly revokedBy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecordOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SignerSigningProfileRevocationRecord;
```

- *Type:* <a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileRevocationRecord">SignerSigningProfileRevocationRecord</a>

---


### SignerSigningProfileSignatureValidityPeriodOutputReference <a name="SignerSigningProfileSignatureValidityPeriodOutputReference" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.Initializer"></a>

```typescript
import { signerSigningProfile } from '@cdktf/provider-aws'

new signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriod">SignerSigningProfileSignatureValidityPeriod</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriodOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SignerSigningProfileSignatureValidityPeriod;
```

- *Type:* <a href="#@cdktf/provider-aws.signerSigningProfile.SignerSigningProfileSignatureValidityPeriod">SignerSigningProfileSignatureValidityPeriod</a>

---



