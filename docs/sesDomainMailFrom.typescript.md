# `sesDomainMailFrom` Submodule <a name="`sesDomainMailFrom` Submodule" id="@cdktf/provider-aws.sesDomainMailFrom"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SesDomainMailFrom <a name="SesDomainMailFrom" id="@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ses_domain_mail_from aws_ses_domain_mail_from}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.Initializer"></a>

```typescript
import { sesDomainMailFrom } from '@cdktf/provider-aws'

new sesDomainMailFrom.SesDomainMailFrom(scope: Construct, id: string, config: SesDomainMailFromConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFromConfig">SesDomainMailFromConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFromConfig">SesDomainMailFromConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.resetBehaviorOnMxFailure">resetBehaviorOnMxFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetBehaviorOnMxFailure` <a name="resetBehaviorOnMxFailure" id="@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.resetBehaviorOnMxFailure"></a>

```typescript
public resetBehaviorOnMxFailure(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.isConstruct"></a>

```typescript
import { sesDomainMailFrom } from '@cdktf/provider-aws'

sesDomainMailFrom.SesDomainMailFrom.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.isTerraformElement"></a>

```typescript
import { sesDomainMailFrom } from '@cdktf/provider-aws'

sesDomainMailFrom.SesDomainMailFrom.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.isTerraformResource"></a>

```typescript
import { sesDomainMailFrom } from '@cdktf/provider-aws'

sesDomainMailFrom.SesDomainMailFrom.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.property.behaviorOnMxFailureInput">behaviorOnMxFailureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.property.domainInput">domainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.property.mailFromDomainInput">mailFromDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.property.behaviorOnMxFailure">behaviorOnMxFailure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.property.mailFromDomain">mailFromDomain</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `behaviorOnMxFailureInput`<sup>Optional</sup> <a name="behaviorOnMxFailureInput" id="@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.property.behaviorOnMxFailureInput"></a>

```typescript
public readonly behaviorOnMxFailureInput: string;
```

- *Type:* string

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.property.domainInput"></a>

```typescript
public readonly domainInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `mailFromDomainInput`<sup>Optional</sup> <a name="mailFromDomainInput" id="@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.property.mailFromDomainInput"></a>

```typescript
public readonly mailFromDomainInput: string;
```

- *Type:* string

---

##### `behaviorOnMxFailure`<sup>Required</sup> <a name="behaviorOnMxFailure" id="@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.property.behaviorOnMxFailure"></a>

```typescript
public readonly behaviorOnMxFailure: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `mailFromDomain`<sup>Required</sup> <a name="mailFromDomain" id="@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.property.mailFromDomain"></a>

```typescript
public readonly mailFromDomain: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFrom.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SesDomainMailFromConfig <a name="SesDomainMailFromConfig" id="@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFromConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFromConfig.Initializer"></a>

```typescript
import { sesDomainMailFrom } from '@cdktf/provider-aws'

const sesDomainMailFromConfig: sesDomainMailFrom.SesDomainMailFromConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFromConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFromConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFromConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFromConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFromConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFromConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFromConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFromConfig.property.domain">domain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_domain_mail_from#domain SesDomainMailFrom#domain}. |
| <code><a href="#@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFromConfig.property.mailFromDomain">mailFromDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_domain_mail_from#mail_from_domain SesDomainMailFrom#mail_from_domain}. |
| <code><a href="#@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFromConfig.property.behaviorOnMxFailure">behaviorOnMxFailure</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_domain_mail_from#behavior_on_mx_failure SesDomainMailFrom#behavior_on_mx_failure}. |
| <code><a href="#@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFromConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_domain_mail_from#id SesDomainMailFrom#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFromConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFromConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFromConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFromConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFromConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFromConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFromConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFromConfig.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_domain_mail_from#domain SesDomainMailFrom#domain}.

---

##### `mailFromDomain`<sup>Required</sup> <a name="mailFromDomain" id="@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFromConfig.property.mailFromDomain"></a>

```typescript
public readonly mailFromDomain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_domain_mail_from#mail_from_domain SesDomainMailFrom#mail_from_domain}.

---

##### `behaviorOnMxFailure`<sup>Optional</sup> <a name="behaviorOnMxFailure" id="@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFromConfig.property.behaviorOnMxFailure"></a>

```typescript
public readonly behaviorOnMxFailure: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_domain_mail_from#behavior_on_mx_failure SesDomainMailFrom#behavior_on_mx_failure}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sesDomainMailFrom.SesDomainMailFromConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_domain_mail_from#id SesDomainMailFrom#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



