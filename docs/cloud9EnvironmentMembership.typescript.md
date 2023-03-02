# `cloud9EnvironmentMembership` Submodule <a name="`cloud9EnvironmentMembership` Submodule" id="@cdktf/provider-aws.cloud9EnvironmentMembership"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Cloud9EnvironmentMembership <a name="Cloud9EnvironmentMembership" id="@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_membership aws_cloud9_environment_membership}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.Initializer"></a>

```typescript
import { cloud9EnvironmentMembership } from '@cdktf/provider-aws'

new cloud9EnvironmentMembership.Cloud9EnvironmentMembership(scope: Construct, id: string, config: Cloud9EnvironmentMembershipConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembershipConfig">Cloud9EnvironmentMembershipConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembershipConfig">Cloud9EnvironmentMembershipConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.isConstruct"></a>

```typescript
import { cloud9EnvironmentMembership } from '@cdktf/provider-aws'

cloud9EnvironmentMembership.Cloud9EnvironmentMembership.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.isTerraformElement"></a>

```typescript
import { cloud9EnvironmentMembership } from '@cdktf/provider-aws'

cloud9EnvironmentMembership.Cloud9EnvironmentMembership.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.isTerraformResource"></a>

```typescript
import { cloud9EnvironmentMembership } from '@cdktf/provider-aws'

cloud9EnvironmentMembership.Cloud9EnvironmentMembership.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.property.userId">userId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.property.environmentIdInput">environmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.property.permissionsInput">permissionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.property.userArnInput">userArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.property.environmentId">environmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.property.permissions">permissions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.property.userArn">userArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

---

##### `environmentIdInput`<sup>Optional</sup> <a name="environmentIdInput" id="@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.property.environmentIdInput"></a>

```typescript
public readonly environmentIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `permissionsInput`<sup>Optional</sup> <a name="permissionsInput" id="@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.property.permissionsInput"></a>

```typescript
public readonly permissionsInput: string;
```

- *Type:* string

---

##### `userArnInput`<sup>Optional</sup> <a name="userArnInput" id="@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.property.userArnInput"></a>

```typescript
public readonly userArnInput: string;
```

- *Type:* string

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.property.permissions"></a>

```typescript
public readonly permissions: string;
```

- *Type:* string

---

##### `userArn`<sup>Required</sup> <a name="userArn" id="@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.property.userArn"></a>

```typescript
public readonly userArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembership.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Cloud9EnvironmentMembershipConfig <a name="Cloud9EnvironmentMembershipConfig" id="@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembershipConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembershipConfig.Initializer"></a>

```typescript
import { cloud9EnvironmentMembership } from '@cdktf/provider-aws'

const cloud9EnvironmentMembershipConfig: cloud9EnvironmentMembership.Cloud9EnvironmentMembershipConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembershipConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembershipConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembershipConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembershipConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembershipConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembershipConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembershipConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembershipConfig.property.environmentId">environmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_membership#environment_id Cloud9EnvironmentMembership#environment_id}. |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembershipConfig.property.permissions">permissions</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_membership#permissions Cloud9EnvironmentMembership#permissions}. |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembershipConfig.property.userArn">userArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_membership#user_arn Cloud9EnvironmentMembership#user_arn}. |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembershipConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_membership#id Cloud9EnvironmentMembership#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembershipConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembershipConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembershipConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembershipConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembershipConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembershipConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembershipConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembershipConfig.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_membership#environment_id Cloud9EnvironmentMembership#environment_id}.

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembershipConfig.property.permissions"></a>

```typescript
public readonly permissions: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_membership#permissions Cloud9EnvironmentMembership#permissions}.

---

##### `userArn`<sup>Required</sup> <a name="userArn" id="@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembershipConfig.property.userArn"></a>

```typescript
public readonly userArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_membership#user_arn Cloud9EnvironmentMembership#user_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloud9EnvironmentMembership.Cloud9EnvironmentMembershipConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_membership#id Cloud9EnvironmentMembership#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



