# `signerSigningJob` Submodule <a name="`signerSigningJob` Submodule" id="@cdktf/provider-aws.signerSigningJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SignerSigningJob <a name="SignerSigningJob" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job aws_signer_signing_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.Initializer"></a>

```typescript
import { signerSigningJob } from '@cdktf/provider-aws'

new signerSigningJob.SignerSigningJob(scope: Construct, id: string, config: SignerSigningJobConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobConfig">SignerSigningJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobConfig">SignerSigningJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.putDestination">putDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.putSource">putSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.resetIgnoreSigningJobFailure">resetIgnoreSigningJobFailure</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putDestination` <a name="putDestination" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.putDestination"></a>

```typescript
public putDestination(value: SignerSigningJobDestination): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.putDestination.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestination">SignerSigningJobDestination</a>

---

##### `putSource` <a name="putSource" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.putSource"></a>

```typescript
public putSource(value: SignerSigningJobSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSource">SignerSigningJobSource</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIgnoreSigningJobFailure` <a name="resetIgnoreSigningJobFailure" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.resetIgnoreSigningJobFailure"></a>

```typescript
public resetIgnoreSigningJobFailure(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.isConstruct"></a>

```typescript
import { signerSigningJob } from '@cdktf/provider-aws'

signerSigningJob.SignerSigningJob.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.isTerraformElement"></a>

```typescript
import { signerSigningJob } from '@cdktf/provider-aws'

signerSigningJob.SignerSigningJob.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.isTerraformResource"></a>

```typescript
import { signerSigningJob } from '@cdktf/provider-aws'

signerSigningJob.SignerSigningJob.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.completedAt">completedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.destination">destination</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference">SignerSigningJobDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.jobId">jobId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.jobInvoker">jobInvoker</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.jobOwner">jobOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.platformDisplayName">platformDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.platformId">platformId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.profileVersion">profileVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.requestedBy">requestedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.revocationRecord">revocationRecord</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordList">SignerSigningJobRevocationRecordList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.signatureExpiresAt">signatureExpiresAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.signedObject">signedObject</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectList">SignerSigningJobSignedObjectList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.source">source</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference">SignerSigningJobSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.statusReason">statusReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.destinationInput">destinationInput</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestination">SignerSigningJobDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.ignoreSigningJobFailureInput">ignoreSigningJobFailureInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.profileNameInput">profileNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.sourceInput">sourceInput</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSource">SignerSigningJobSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.ignoreSigningJobFailure">ignoreSigningJobFailure</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.profileName">profileName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `completedAt`<sup>Required</sup> <a name="completedAt" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.completedAt"></a>

```typescript
public readonly completedAt: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.destination"></a>

```typescript
public readonly destination: SignerSigningJobDestinationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference">SignerSigningJobDestinationOutputReference</a>

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

---

##### `jobInvoker`<sup>Required</sup> <a name="jobInvoker" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.jobInvoker"></a>

```typescript
public readonly jobInvoker: string;
```

- *Type:* string

---

##### `jobOwner`<sup>Required</sup> <a name="jobOwner" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.jobOwner"></a>

```typescript
public readonly jobOwner: string;
```

- *Type:* string

---

##### `platformDisplayName`<sup>Required</sup> <a name="platformDisplayName" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.platformDisplayName"></a>

```typescript
public readonly platformDisplayName: string;
```

- *Type:* string

---

##### `platformId`<sup>Required</sup> <a name="platformId" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.platformId"></a>

```typescript
public readonly platformId: string;
```

- *Type:* string

---

##### `profileVersion`<sup>Required</sup> <a name="profileVersion" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.profileVersion"></a>

```typescript
public readonly profileVersion: string;
```

- *Type:* string

---

##### `requestedBy`<sup>Required</sup> <a name="requestedBy" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.requestedBy"></a>

```typescript
public readonly requestedBy: string;
```

- *Type:* string

---

##### `revocationRecord`<sup>Required</sup> <a name="revocationRecord" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.revocationRecord"></a>

```typescript
public readonly revocationRecord: SignerSigningJobRevocationRecordList;
```

- *Type:* <a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordList">SignerSigningJobRevocationRecordList</a>

---

##### `signatureExpiresAt`<sup>Required</sup> <a name="signatureExpiresAt" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.signatureExpiresAt"></a>

```typescript
public readonly signatureExpiresAt: string;
```

- *Type:* string

---

##### `signedObject`<sup>Required</sup> <a name="signedObject" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.signedObject"></a>

```typescript
public readonly signedObject: SignerSigningJobSignedObjectList;
```

- *Type:* <a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectList">SignerSigningJobSignedObjectList</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.source"></a>

```typescript
public readonly source: SignerSigningJobSourceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference">SignerSigningJobSourceOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `statusReason`<sup>Required</sup> <a name="statusReason" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.statusReason"></a>

```typescript
public readonly statusReason: string;
```

- *Type:* string

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.destinationInput"></a>

```typescript
public readonly destinationInput: SignerSigningJobDestination;
```

- *Type:* <a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestination">SignerSigningJobDestination</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ignoreSigningJobFailureInput`<sup>Optional</sup> <a name="ignoreSigningJobFailureInput" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.ignoreSigningJobFailureInput"></a>

```typescript
public readonly ignoreSigningJobFailureInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `profileNameInput`<sup>Optional</sup> <a name="profileNameInput" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.profileNameInput"></a>

```typescript
public readonly profileNameInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.sourceInput"></a>

```typescript
public readonly sourceInput: SignerSigningJobSource;
```

- *Type:* <a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSource">SignerSigningJobSource</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ignoreSigningJobFailure`<sup>Required</sup> <a name="ignoreSigningJobFailure" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.ignoreSigningJobFailure"></a>

```typescript
public readonly ignoreSigningJobFailure: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `profileName`<sup>Required</sup> <a name="profileName" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.profileName"></a>

```typescript
public readonly profileName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJob.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SignerSigningJobConfig <a name="SignerSigningJobConfig" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobConfig.Initializer"></a>

```typescript
import { signerSigningJob } from '@cdktf/provider-aws'

const signerSigningJobConfig: signerSigningJob.SignerSigningJobConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobConfig.property.destination">destination</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestination">SignerSigningJobDestination</a></code> | destination block. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobConfig.property.profileName">profileName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job#profile_name SignerSigningJob#profile_name}. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobConfig.property.source">source</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSource">SignerSigningJobSource</a></code> | source block. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job#id SignerSigningJob#id}. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobConfig.property.ignoreSigningJobFailure">ignoreSigningJobFailure</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job#ignore_signing_job_failure SignerSigningJob#ignore_signing_job_failure}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobConfig.property.destination"></a>

```typescript
public readonly destination: SignerSigningJobDestination;
```

- *Type:* <a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestination">SignerSigningJobDestination</a>

destination block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job#destination SignerSigningJob#destination}

---

##### `profileName`<sup>Required</sup> <a name="profileName" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobConfig.property.profileName"></a>

```typescript
public readonly profileName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job#profile_name SignerSigningJob#profile_name}.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobConfig.property.source"></a>

```typescript
public readonly source: SignerSigningJobSource;
```

- *Type:* <a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSource">SignerSigningJobSource</a>

source block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job#source SignerSigningJob#source}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job#id SignerSigningJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoreSigningJobFailure`<sup>Optional</sup> <a name="ignoreSigningJobFailure" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobConfig.property.ignoreSigningJobFailure"></a>

```typescript
public readonly ignoreSigningJobFailure: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job#ignore_signing_job_failure SignerSigningJob#ignore_signing_job_failure}.

---

### SignerSigningJobDestination <a name="SignerSigningJobDestination" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestination.Initializer"></a>

```typescript
import { signerSigningJob } from '@cdktf/provider-aws'

const signerSigningJobDestination: signerSigningJob.SignerSigningJobDestination = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestination.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3">SignerSigningJobDestinationS3</a></code> | s3 block. |

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestination.property.s3"></a>

```typescript
public readonly s3: SignerSigningJobDestinationS3;
```

- *Type:* <a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3">SignerSigningJobDestinationS3</a>

s3 block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job#s3 SignerSigningJob#s3}

---

### SignerSigningJobDestinationS3 <a name="SignerSigningJobDestinationS3" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3.Initializer"></a>

```typescript
import { signerSigningJob } from '@cdktf/provider-aws'

const signerSigningJobDestinationS3: signerSigningJob.SignerSigningJobDestinationS3 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job#bucket SignerSigningJob#bucket}. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3.property.prefix">prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job#prefix SignerSigningJob#prefix}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job#bucket SignerSigningJob#bucket}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job#prefix SignerSigningJob#prefix}.

---

### SignerSigningJobRevocationRecord <a name="SignerSigningJobRevocationRecord" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecord"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecord.Initializer"></a>

```typescript
import { signerSigningJob } from '@cdktf/provider-aws'

const signerSigningJobRevocationRecord: signerSigningJob.SignerSigningJobRevocationRecord = { ... }
```


### SignerSigningJobSignedObject <a name="SignerSigningJobSignedObject" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObject.Initializer"></a>

```typescript
import { signerSigningJob } from '@cdktf/provider-aws'

const signerSigningJobSignedObject: signerSigningJob.SignerSigningJobSignedObject = { ... }
```


### SignerSigningJobSignedObjectS3 <a name="SignerSigningJobSignedObjectS3" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3.Initializer"></a>

```typescript
import { signerSigningJob } from '@cdktf/provider-aws'

const signerSigningJobSignedObjectS3: signerSigningJob.SignerSigningJobSignedObjectS3 = { ... }
```


### SignerSigningJobSource <a name="SignerSigningJobSource" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSource.Initializer"></a>

```typescript
import { signerSigningJob } from '@cdktf/provider-aws'

const signerSigningJobSource: signerSigningJob.SignerSigningJobSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSource.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3">SignerSigningJobSourceS3</a></code> | s3 block. |

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSource.property.s3"></a>

```typescript
public readonly s3: SignerSigningJobSourceS3;
```

- *Type:* <a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3">SignerSigningJobSourceS3</a>

s3 block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job#s3 SignerSigningJob#s3}

---

### SignerSigningJobSourceS3 <a name="SignerSigningJobSourceS3" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3.Initializer"></a>

```typescript
import { signerSigningJob } from '@cdktf/provider-aws'

const signerSigningJobSourceS3: signerSigningJob.SignerSigningJobSourceS3 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job#bucket SignerSigningJob#bucket}. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job#key SignerSigningJob#key}. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job#version SignerSigningJob#version}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job#bucket SignerSigningJob#bucket}.

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job#key SignerSigningJob#key}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_job#version SignerSigningJob#version}.

---

## Classes <a name="Classes" id="Classes"></a>

### SignerSigningJobDestinationOutputReference <a name="SignerSigningJobDestinationOutputReference" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.Initializer"></a>

```typescript
import { signerSigningJob } from '@cdktf/provider-aws'

new signerSigningJob.SignerSigningJobDestinationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.putS3">putS3</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3` <a name="putS3" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.putS3"></a>

```typescript
public putS3(value: SignerSigningJobDestinationS3): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3">SignerSigningJobDestinationS3</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference">SignerSigningJobDestinationS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.property.s3Input">s3Input</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3">SignerSigningJobDestinationS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestination">SignerSigningJobDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.property.s3"></a>

```typescript
public readonly s3: SignerSigningJobDestinationS3OutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference">SignerSigningJobDestinationS3OutputReference</a>

---

##### `s3Input`<sup>Optional</sup> <a name="s3Input" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.property.s3Input"></a>

```typescript
public readonly s3Input: SignerSigningJobDestinationS3;
```

- *Type:* <a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3">SignerSigningJobDestinationS3</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SignerSigningJobDestination;
```

- *Type:* <a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestination">SignerSigningJobDestination</a>

---


### SignerSigningJobDestinationS3OutputReference <a name="SignerSigningJobDestinationS3OutputReference" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.Initializer"></a>

```typescript
import { signerSigningJob } from '@cdktf/provider-aws'

new signerSigningJob.SignerSigningJobDestinationS3OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrefix` <a name="resetPrefix" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.resetPrefix"></a>

```typescript
public resetPrefix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3">SignerSigningJobDestinationS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SignerSigningJobDestinationS3;
```

- *Type:* <a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobDestinationS3">SignerSigningJobDestinationS3</a>

---


### SignerSigningJobRevocationRecordList <a name="SignerSigningJobRevocationRecordList" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordList.Initializer"></a>

```typescript
import { signerSigningJob } from '@cdktf/provider-aws'

new signerSigningJob.SignerSigningJobRevocationRecordList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordList.get"></a>

```typescript
public get(index: number): SignerSigningJobRevocationRecordOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### SignerSigningJobRevocationRecordOutputReference <a name="SignerSigningJobRevocationRecordOutputReference" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.Initializer"></a>

```typescript
import { signerSigningJob } from '@cdktf/provider-aws'

new signerSigningJob.SignerSigningJobRevocationRecordOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.property.reason">reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.property.revokedAt">revokedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.property.revokedBy">revokedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecord">SignerSigningJobRevocationRecord</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.property.reason"></a>

```typescript
public readonly reason: string;
```

- *Type:* string

---

##### `revokedAt`<sup>Required</sup> <a name="revokedAt" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.property.revokedAt"></a>

```typescript
public readonly revokedAt: string;
```

- *Type:* string

---

##### `revokedBy`<sup>Required</sup> <a name="revokedBy" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.property.revokedBy"></a>

```typescript
public readonly revokedBy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecordOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SignerSigningJobRevocationRecord;
```

- *Type:* <a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobRevocationRecord">SignerSigningJobRevocationRecord</a>

---


### SignerSigningJobSignedObjectList <a name="SignerSigningJobSignedObjectList" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectList.Initializer"></a>

```typescript
import { signerSigningJob } from '@cdktf/provider-aws'

new signerSigningJob.SignerSigningJobSignedObjectList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectList.get"></a>

```typescript
public get(index: number): SignerSigningJobSignedObjectOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### SignerSigningJobSignedObjectOutputReference <a name="SignerSigningJobSignedObjectOutputReference" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.Initializer"></a>

```typescript
import { signerSigningJob } from '@cdktf/provider-aws'

new signerSigningJob.SignerSigningJobSignedObjectOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3List">SignerSigningJobSignedObjectS3List</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObject">SignerSigningJobSignedObject</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.property.s3"></a>

```typescript
public readonly s3: SignerSigningJobSignedObjectS3List;
```

- *Type:* <a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3List">SignerSigningJobSignedObjectS3List</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SignerSigningJobSignedObject;
```

- *Type:* <a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObject">SignerSigningJobSignedObject</a>

---


### SignerSigningJobSignedObjectS3List <a name="SignerSigningJobSignedObjectS3List" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3List"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3List.Initializer"></a>

```typescript
import { signerSigningJob } from '@cdktf/provider-aws'

new signerSigningJob.SignerSigningJobSignedObjectS3List(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3List.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3List.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3List.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3List.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3List.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3List.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3List.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3List.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3List.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3List.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3List.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3List.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3List.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3List.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3List.get"></a>

```typescript
public get(index: number): SignerSigningJobSignedObjectS3OutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3List.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3List.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3List.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3List.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3List.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### SignerSigningJobSignedObjectS3OutputReference <a name="SignerSigningJobSignedObjectS3OutputReference" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.Initializer"></a>

```typescript
import { signerSigningJob } from '@cdktf/provider-aws'

new signerSigningJob.SignerSigningJobSignedObjectS3OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3">SignerSigningJobSignedObjectS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SignerSigningJobSignedObjectS3;
```

- *Type:* <a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSignedObjectS3">SignerSigningJobSignedObjectS3</a>

---


### SignerSigningJobSourceOutputReference <a name="SignerSigningJobSourceOutputReference" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.Initializer"></a>

```typescript
import { signerSigningJob } from '@cdktf/provider-aws'

new signerSigningJob.SignerSigningJobSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.putS3">putS3</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3` <a name="putS3" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.putS3"></a>

```typescript
public putS3(value: SignerSigningJobSourceS3): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3">SignerSigningJobSourceS3</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference">SignerSigningJobSourceS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.property.s3Input">s3Input</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3">SignerSigningJobSourceS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSource">SignerSigningJobSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.property.s3"></a>

```typescript
public readonly s3: SignerSigningJobSourceS3OutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference">SignerSigningJobSourceS3OutputReference</a>

---

##### `s3Input`<sup>Optional</sup> <a name="s3Input" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.property.s3Input"></a>

```typescript
public readonly s3Input: SignerSigningJobSourceS3;
```

- *Type:* <a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3">SignerSigningJobSourceS3</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SignerSigningJobSource;
```

- *Type:* <a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSource">SignerSigningJobSource</a>

---


### SignerSigningJobSourceS3OutputReference <a name="SignerSigningJobSourceS3OutputReference" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.Initializer"></a>

```typescript
import { signerSigningJob } from '@cdktf/provider-aws'

new signerSigningJob.SignerSigningJobSourceS3OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3">SignerSigningJobSourceS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SignerSigningJobSourceS3;
```

- *Type:* <a href="#@cdktf/provider-aws.signerSigningJob.SignerSigningJobSourceS3">SignerSigningJobSourceS3</a>

---



